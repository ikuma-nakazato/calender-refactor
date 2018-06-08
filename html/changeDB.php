<?php

require_once("../vendor/autoload.php");

use Strict\Date\Days\YMDDay;


const SQL_TB = 'CREATE TABLE IF NOT EXISTS plan
	(
		id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
		task VARCHAR(255),
		day DATE
	)';

if(!isset($_GET['year']) || !isset($_GET['month']) || !isset($_GET['day']) || $_POST['new_task'] == NULL){
    die('値が取得できません');
}

$year = $_GET['year'];
$month = $_GET['month'];
$day = $_GET['day'];

try {
    $inst_taskrepository = new Goodlife\Calender\TaskRepository(Goodlife\Calender\PDOMaker::getPDO(), SQL_TB);

    if(isset($_POST['new_task'])){
        $inst_taskmodel = $inst_taskrepository->create($_POST['new_task'], new YMDDay($year, $month, $day));
    }

    //具体的な更新処理
    //$update_judge = $inst_pdo->update($task_array[5], 'dinner at akasaka');

    //具体的な削除処理
    //$delete_judge = $inst_pdo->delete($task_array[19]);
    header("Location: /?year={$year}&month={$month}");
    die;

} catch (\PDOException $e) {
    echo "ErrorMessage : " . $e->getMessage() . "<br>";
    echo "ErrorCode : " . $e->getCode() . "<br>";
    echo "ErrorFile : " . $e->getFile() . "<br>";
    echo "ErrorLine : " . $e->getLine() . "<br>";
}
/*
header("Location: \"./?year=\" . $year . \"&month=\" . $month;");
die;
*/