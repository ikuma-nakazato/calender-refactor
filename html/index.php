<?php

if(!isset($_GET['year']) || !isset($_GET['month'])){
echo "値が取得できません。";
exit;
}

//---------------------------------------------------
//カレンダー表示
//---------------------------------------------------


//連想配列用の関数//
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

//日と週を連想配列で取得//
//---------------------------------------------------
use Strict\Date\Months\YMMonth;
require("../vendor/autoload.php");

$day_data = [];
$inst = new YMMonth($_GET['year'], $_GET['month']);

foreach ($inst as $value) {
	$day = $value->format('j');
	$week = $value->format('w');
	$day_data[$day] = $week;
}
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
	//planテーブル
	//---------------------------------------------------
	$db_handle->query('CREATE TABLE IF NOT EXISTS plan
		(
			id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
			day DATE ,
			title VARCHAR(255),
			place VARCHAR(255),
			detail VARCHAR(255)
		)'
	);

	//planテーブルに入れるデータ群とそれの挿入
	//---------------------------------------------------
	$day_list = array(
		'2018-02-06',
		'2018-02-06',
		'2018-02-01'
	);
	$title_list = array(
		'lunch',
		'theater',
		'deadline'
	);
	$place_list = array(
		'yurakutyo',
		'shinjuku',
		'goodlife'
	);
	$detail_list = array(
		'taco bell',
		'ironman',
		'application refactoring for clint and add new feature'
	);
	/*
	$all_list = [
		'days' => $day_list,
		'titles' => $title_list,
		'places' => $place_list,
		'details' => $detail_list
	];

	foreach ($all_list as $key => $value) {
		for ($i = 0; $i < 3 ; $i++){
			echo $value[$i],"<br>";
		}
	}*/

	/*
	//立ち上げ時には必ず一回実行する
	//あとでデータが入ってたら二回目は実行しない処理を書いとけ
	$pre = $db_handle->prepare('INSERT INTO plan (day, title, place, detail) VALUES (:day, :title, :place, :detail)');
	for ($i = 0; $i < 3; $i++){
		$pre->bindValue(':day', $day_list[$i], PDO::PARAM_STR);
		$pre->bindValue(':title', $title_list[$i], PDO::PARAM_STR);
		$pre->bindValue(':place', $place_list[$i], PDO::PARAM_STR);
		$pre->bindValue(':detail', $detail_list[$i], PDO::PARAM_STR);
		$pre->execute();
	}
	*/

	for($i = 0;$i < 3; $i++){
		$pre = $db_handle->prepare('SELECT title FROM plan WHERE day = ?');
		$pre->bindValue(1, $day_list[$i], PDO::PARAM_STR);
		$pre->execute();

		print_r($pre->fetch());
		echo "<br>";


}
	//$result = array('' => , );

/*
//NULLを許可しなければなんか使えそうな感じのやつ
	foreach($all_list as $key => $value) {
			switch ($key) {
				case 'days':
				$pre = $db_handle->prepare('INSERT INTO plan (day) VALUES (:day)');
					for ($i = 0; $i < 3; $i++) {
						$pre->bindValue(':day', $value[$i], PDO::PARAM_STR);
						//$pre->execute();
					}
					break;
				case 'titles':
					$pre = $db_handle->prepare('INSERT INTO plan (title) VALUES (:title)');
					for ($i = 0; $i < 3; $i++) {
						$pre->bindValue(':title', $value[$i], PDO::PARAM_STR);
						//$pre->execute();
					}
					break;
				case 'places':
					$pre = $db_handle->prepare('INSERT INTO plan (place) VALUES (:place)');
					for ($i = 0; $i < 3; $i++) {
						$pre->bindValue(':place', $value[$i], PDO::PARAM_STR);
						//$pre->execute();
					}
					break;
				case 'details':
					$pre = $db_handle->prepare('INSERT INTO plan (detail) VALUES (:detail)');
					for ($i = 0; $i < 3; $i++) {
						$pre->bindValue(':detail', $value[$i], PDO::PARAM_STR);
						//$pre->execute();
					}
					break;
				default:
					break;
			}
			$pre->execute();
		}
*/
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


?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <title>calender</title>
    <link rel="stylesheet" href="style.css">
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
			//カレンダーのデータ生成
			foreach ($day_data as $key => $value) {
				//最初のキーを参照している場合に空データ挿入
				if($key === get_first_key($day_data)){
					for($i = 0; $i < $value; $i++){
						echo "<td></td>";
					}
				}

				echo "<td>";

				echo "{$key}<br>({$value})";
				echo "<div>";

				echo "plan";

				echo "</div>";
				echo "</td>";
				//土曜で改行
				if($value == 6){
					echo "</tr>";
				}
				//最後のキーを参照している場合に空データ挿入
				if($key === get_last_key($day_data)){
					for($i = $value; $i < 6; $i++){
						echo "<td></td>";
					}
				}
			}

            ?>
        </tbody>
    </table>
</div>
<div>
</div>
</body>
</html>
