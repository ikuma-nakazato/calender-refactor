<?php

use Strict\Date\Months\YMMonth;
require("../vendor/autoload.php");

//---------------------------------------------------
//クエリのフェイルセーフ
//---------------------------------------------------

if(!isset($_GET['year']) || !isset($_GET['month'])){
echo "値が取得できません。";
exit;
}

//---------------------------------------------------
//カレンダー表示関連
//---------------------------------------------------


//連想配列用の関数
//---------------------------------------------------
//第一引数・・・最初のキーを取得したい配列
//返り値・・・最初のキー
function get_first_key($array){
    reset($array);
    return key($array);
}
//第一引数・・・最初の値を取得したい配列
//返り値・・・最初の値
function get_first_value($array){
    return reset($array);
}
//第一引数・・・最後のキーを取得したい配列
//返り値・・・最後のキー
function get_last_key($array){
    end($array);
    return key($array);
}
//第一引数・・・最後の値を取得したい配列
//返り値・・・最後の値
function get_last_value($array){
    return end($array);
}

//日と週を連想配列で取得
//---------------------------------------------------
$day_data = [];
$inst = new YMMonth($_GET['year'], $_GET['month']);

foreach ($inst as $value) {
	$day = $value->format('j');
	$week = $value->format('w');
	$day_data[$day] = $week;
}
//確認用出力//
echo "<pre>";
print_r($day_data);
echo "</pre>";

//---------------------------------------------------
//データーベースdatabaseにplan,tag,mapテーブルを作成し色々やる
//---------------------------------------------------

const DB_DSN = 'mysql:host=gl-exercise-calender_db_1;dbname=database;charset=utf8mb4';
const DB_USER = 'root';
const DB_PASSWORD = 'pass';
const OPTION = [
	PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
	PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
	PDO::ATTR_EMULATE_PREPARES => false
];

try {
	$db_handle = new PDO(DB_DSN, DB_USER, DB_PASSWORD, OPTION);
	echo "Connection has been activated.<br>";
	//---------------------------------------------------
	//予定表
	//---------------------------------------------------

	$db_handle->query('CREATE TABLE IF NOT EXISTS plan
		(
			id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
			day DATETIME,
			title VARCHAR(255),
			place VARCHAR(255),
			detail VARCHAR(255)
		)'
	);

	//動作検証のためのデータ群
	//---------------------------------------------------
	$day_list = array(
		'2017-02-01 09:00:00',
		'2018-01-03 12:00:00',
		'2018-02-06 12:00:00',
		'2018-02-06 23:00:00'
	);
	$title_list = array(
		'lunch',
		'theater',
		'deadline',
		'golf'
	);
	$place_list = array(
		'yurakutyo',
		'shinjuku',
		'goodlife',
		'gotanda'
	);
	$detail_list = array(
		'taco bell',
		'ironman',
		'application refactoring for clint and add new feature',
		'reception'
	);

	//検証データの挿入
	//立ち上げ時には必ず一回実行する
	//あとでデータが入ってたら二回目は実行しない処理を書いとけ
	//---------------------------------------------------

	$pre = $db_handle->prepare('INSERT INTO plan (day, title, place, detail) VALUES (:day, :title, :place, :detail)');
	for ($i = 0; $i < 4; $i++){
		$pre->bindValue(':day', $day_list[$i], PDO::PARAM_STR);
		$pre->bindValue(':title', $title_list[$i], PDO::PARAM_STR);
		$pre->bindValue(':place', $place_list[$i], PDO::PARAM_STR);
		$pre->bindValue(':detail', $detail_list[$i], PDO::PARAM_STR);
		$pre->execute();
	}

	//検証データ抽出し、その連想配列のキーをplan_dataとして別の連想配列へ格納
	//---------------------------------------------------
	$plan_data;
	for($i = 0;$i < 4; $i++){
		$pre = $db_handle->prepare('SELECT title FROM plan WHERE day = ?');
		$pre->bindValue(1, $day_list[$i], PDO::PARAM_STR);
		$pre->execute();

		$result = $pre->fetch();
		$plan_data[$day_list[$i]] = $result['title'];
	}
	//確認用出力//
	echo "<pre>";
	print_r($plan_data);
	echo "</pre>";

	foreach ($plan_data as $key => $value) {
		echo $key;
		echo "<br>";
	}

	//tagテーブル
	//---------------------------------------------------
	$db_handle->query('CREATE TABLE IF NOT EXISTS tag
		(
			id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
			tagname VARCHAR(255)
		)'
	);
	//mappingテーブル
	$db_handle->query('CREATE TABLE IF NOT EXISTS mapper
		(
			id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
			plan_id BIGINT UNSIGNED,
			tag_id BIGINT UNSIGNED
		)'
	);

} catch (PDOException $e) {
	echo "ErrorMessage : " . $e->getMessage() . "<br>";
	echo "ErrorCode : " . $e->getCode() . "<br>";
	echo "ErrorFile : " . $e->getFile() . "<br>";
	echo "ErrorLine : " . $e->getLine() . "<br>";
}


?><!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <title>calender</title>
    <link rel="stylesheet" href="style.css">
	<script type="text/javascript">
		function formA(){
			alert('test');
		}
	</script>
</head>
<body>
<div>
    <table border="1" >
        <caption>
        <?php

        $DisplayCapYear = $_GET['year'];
        $DisplayCapMonth = $_GET['month'];
        echo $DisplayCapYear,"年",$DisplayCapMonth,"月";

        ?>
        </caption>
        <thead>
            <tr>
                <th class="sunday">日</th>
                <th>月</th>
                <th>火</th>
                <th>水</th>
                <th>木</th>
                <th>金</th>
                <th class="saturday">土</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <?php

			$display_plan = array();
			//カレンダーのデータ生成
			foreach ($day_data as $key => $value) {
				//最初のキーを参照している場合に空データ挿入
				if($key === get_first_key($day_data)){
					for($i = 0; $i < $value; $i++){
						echo "<td></td>";
					}
				}

				echo "<td>";
				echo "<div onclick = \"formA();\">";
				echo "{$key}<br>({$value})";
				echo "</div>";
				echo "<div>";

				foreach ($plan_data as $key_date => $value_title) {
					$ymd_data = new DateTime($key_date);
					$y_data = $ymd_data->format('Y');
					$m_data = $ymd_data->format('m');
					$d_data = $ymd_data->format('d');

					if($y_data == $_GET['year'] && $m_data == $_GET['month']){
						if($d_data == $key){
							echo "{$value_title}<br>";
						}
					}
				}

				echo "</div>";
				echo "</td>";
				//土曜で改行
				if($value == 6){
					echo "</tr><tr>";
				}
				//最後のキーを参照している場合に空データ挿入
				if($key === get_last_key($day_data)){
					for($i = $value; $i < 6; $i++){
						echo "<td></td>";
					}
				}
			}

            ?>
		</tr>
        </tbody>
    </table>
</div>
<div>
</div>
</body>
</html>
