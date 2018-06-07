<?php

require("../vendor/autoload.php");

use Strict\Date\Days\YMDDay;
use Strict\Date\Months\YMMonth;
use Strict\Date\DayInterface;

const DB_DSN = 'mysql:host=exerxise-spare_db_1;dbname=database;charset=utf8mb4';
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
		day DATE
	)';

//---------------------------------------------------
//クエリのフェイルセーフと日付の取得
//---------------------------------------------------
if(!isset($_GET['year']) || !isset($_GET['month'])){
	die('値が取得できません');
}

$inst_ymmonth = new Goodlife\Calender\MakeCalender(new YMMonth($_GET['year'], $_GET['month']));

//---------------------------------------------------
//データーベース関連
//---------------------------------------------------
try {
	$inst_taskrepository = new Goodlife\Calender\TaskRepository(new PDO(DB_DSN, DB_USER, DB_PASSWORD, OPTION), SQL_TB);
	//echo "Connection has been activated & Created Plan Table";

	//$inst_taskmodel = $inst_taskrepository->create('lunch at roppongi with leader', new YMDDay(2018, 05, 29));

	//具体的な更新処理
	//$update_judge = $inst_pdo->update($task_array[5], 'dinner at akasaka');

	//具体的な削除処理
	//$delete_judge = $inst_pdo->delete($task_array[19]);

} catch (\PDOException $e) {
	echo "ErrorMessage : " . $e->getMessage() . "<br>";
	echo "ErrorCode : " . $e->getCode() . "<br>";
	echo "ErrorFile : " . $e->getFile() . "<br>";
	echo "ErrorLine : " . $e->getLine() . "<br>";
}

?><!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <title>Scheduler</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<table border="1">
    <caption>
        <?php

        echo $_GET['year'],"年",$_GET['month'],"月";

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
    <?php

    foreach($inst_ymmonth->getDate() as $value){
        if($value['day'] != NULL) {
            $task_array = $inst_taskrepository->get(new YMDDay($_GET['year'], $_GET['month'], $value['day']));
            }

        if($value['week'] == 0){
            echo "<tr>";
            }

            echo "<td>";


                echo "<div class='popup_form-show' data-scheduleDate=\"{$value['day']}\">";
                echo "{$value['day']}";
                echo "</div>";


                if(isset($task_array) == true) {
                    foreach ($task_array as $task_array_value) {
                        echo "<div data-scheduleTask=\"{$task_array_value->getTask()}\">";
                        echo "{$task_array_value->getTask()}";
                        echo "</div>";
                    }
                }

                echo "</td>";

                if($value['week'] == 6){
                    echo "</tr>";
                }
            }

            ?>
    </tbody>
</table>

<div class="popup_layer"></div>
    <div class="popup_form">
        <p>Y年M月J日</p>
        <form action="index.php" method="post">
            予定を入力してください<br>
            <textarea name="mytask" cols="30" rows="10"></textarea><br>
        </form>
        <input class="popup_form-close" type="submit" value="登録" />
    </div>


<div class="sidemenu">
    <?php

    ?>
</div>


<script type="text/javascript" src="event.js"></script>
</body>
</html>