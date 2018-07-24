<?php

require_once("../vendor/autoload.php");
use Strict\Date\Days\YMDDay;
use Strict\Date\Days\StringDay;
const SQL_TB = 'CREATE TABLE IF NOT EXISTS plan
	(
		id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
		task VARCHAR(255),
		day DATE
	)';


if(!isset($_GET['date']) || !isset($_POST['create_task'])){
    die('値が取得できません');
}

$inst_StringDay = new StringDay($_GET['date']);

echo "年：" , $year = $inst_StringDay->format('Y');
echo "<br>";
echo "月：" , $month = $inst_StringDay->format('m');
echo "<br>";
echo "日：" , $day = $inst_StringDay->format('d');
echo "<br>";

try {
    $inst_TaskRepository = new Goodlife\Calender\TaskRepository(Goodlife\Calender\PDOMaker::getPDO(), SQL_TB);
    $inst_TaskModel = $inst_TaskRepository->create($_POST['create_task'], new YMDDay($year, $month, $day));

    if(isset($inst_TaskModel)){
        echo "予定の作成が完了しました。";
    }

} catch (\PDOException $e) {
    echo "ErrorMessage : " . $e->getMessage() . "<br>";
    echo "ErrorCode : " . $e->getCode() . "<br>";
    echo "ErrorFile : " . $e->getFile() . "<br>";
    echo "ErrorLine : " . $e->getLine() . "<br>";
}