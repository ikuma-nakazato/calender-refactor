<?php

require("../vendor/autoload.php");

use Strict\Date\Days\YMDDay;
use Strict\Date\Months\YMMonth;

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

$year = $_GET['year'];
$month = $_GET['month'];


$inst_ymmonth = new Goodlife\Calender\MakeCalender(new YMMonth($year, $month));

//---------------------------------------------------
//データーベース関連
//---------------------------------------------------
try {
	$inst_taskrepository = new Goodlife\Calender\TaskRepository(Goodlife\Calender\PDOMaker::getPDO(), SQL_TB);
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
<body class="data_YM" data-scheduleYear="<?php echo $year; ?>" data-scheduleMonth="<?php echo $month; ?>">

<table border="1">
    <caption class="table_caption">
        <a></a>
        Y年M月
        <a></a>
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
            $task_array = $inst_taskrepository->get(new YMDDay($year, $month, $value['day']));
            }

        if($value['week'] == 0){
            echo "<tr>";
            }

            echo "<td class='sidemenu-show'>";

                echo "<div class='popup_form-show' data-scheduleDay=\"{$value['day']}\">";
                echo "{$value['day']}";
                echo "</div>";


                if(isset($task_array) == true) {
                    foreach ($task_array as $task_array_value) {
                        echo "<div class='task' data-scheduleTaskDate=\"{$value['day']}\">";
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
        <p class="popup_form-date">Y年M月J日</p>
        <form class="popup_form-text" action="<?php echo "./?year=" . $year . "&month=" . $month;?>" method="post" target="_self">
            予定を入力してください<br>
            <textarea name="new_task" cols="30" rows="10"></textarea><br>
            <input class="popup_form-close" type="submit" value="登録"/>
        </form>
    </div>

<div class="popup_layer-change"></div>
<div class="popup_form-change">
    <p class="popup_form-date-change">Y年M月J日</p>
    <form class="popup_form-text-change" action="<?php echo "./?year=" . $year . "&month=" . $month;?>" method="post" target="_self">
        予定を更新<br>
        <textarea class="popup_form-textarea-change" name="change_task" cols="30" rows="10"></textarea><br>
        <input class="popup_form-pointer" name="change_target" type="hidden" value=""/>
        <input class="popup_form-close-change" type="submit" value="更新"/>
    </form>
</div>

<div class="sidemenu">
    <div class="sidemenu_date">Y年M月J日</div>
    <div>
        <div class="sidemenu_tasks-title">予定の一覧</div>
        <div class="sidemenu_tasks"></div>
    </div>
</div>


<script type="text/javascript" src="event.js"></script>
</body>
</html>