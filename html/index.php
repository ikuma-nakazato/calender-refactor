<?php

require("../vendor/autoload.php");

use Strict\Date\Months\YMMonth;
use Strict\Date\DayInterface;

const DB_DSN = 'mysql:host=gl-exercise-calender_db_1;dbname=database;charset=utf8mb4';
const DB_USER = 'root';
const DB_PASSWORD = 'pass';
const OPTION = [
	PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
	PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
	PDO::ATTR_EMULATE_PREPARES => false
];

const SQL_TB = 'CREATE TABLE IF NOT EXISTS plan
	(
		id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
		task VARCHAR(255),
		day DATETIME
	)';

//---------------------------------------------------
//クエリのフェイルセーフと日付の取得
//---------------------------------------------------
if(!isset($_GET['year']) || !isset($_GET['month'])){
	die('値が取得できません');
}

$inst_ymmonth = new Goodlife\Calender\MakeCalender(new YMMonth($_GET['year'], $_GET['month']));
//確認用出力
echo "<pre>";
print_r ($inst_ymmonth->getDate());
echo "</pre>";

//---------------------------------------------------
//データーベース関連
//---------------------------------------------------
try {
	$inst_pdo = new Goodlife\Calender\TaskRepository(new PDO(DB_DSN, DB_USER, DB_PASSWORD, OPTION), SQL_TB);
	echo "Connection has been activated";

} catch (\PDOException $e) {
	echo "ErrorMessage : " . $e->getMessage() . "<br>";
	echo "ErrorCode : " . $e->getCode() . "<br>";
	echo "ErrorFile : " . $e->getFile() . "<br>";
	echo "ErrorLine : " . $e->getLine() . "<br>";
}

/*
<!DOCTYPE html>
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
*/
