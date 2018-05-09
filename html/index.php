<!DOCTYPE html>
<?php

if(!isset($_GET['year']) && isset($_GET['month'])){
echo "値が取得できません。";
exit;
}

use Strict\Date\Months\YMMonth;

require("../vendor/autoload.php");

?>
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
        /*
        $show;
        $obj = new YMMonth($_GET['year'],$_GET['month']);
        $obj->getLastMonth()->getMonth();
        $show = $obj->format('y-m-d');
        echo $show;
        */

        /*
        $obj->getLastMonth()->getMonth();
        $obj->getNextMonth()->getMonth();
        */
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


            $DayData;
            $BreakCount;
            $DayInst = new YMMonth($_GET['year'], $_GET['month']);
            foreach ($DayInst as $value) {
                $DayData    = $value->format('j');
                $BreakCount = $value->format('w');
                if($DayData == 1){
                    for($i = 0; $i < $BreakCount; $i ++){
                        echo "<td></td>";
                    }
                }
                //echo "<td>$DayData<div>hello</div></td>";

                echo "<td>{$DayData}";

                echo "<div>";
                echo "";
                echo "</div>";

                echo "<div>";
                echo "hello";
                echo "</div>";

                echo "<div>";
                echo "hello";
                echo "</div>";

                echo "</td>";

                if($BreakCount==6){
                    echo "</tr>";
                }
            }
            ?>
        </tbody>
    </table>
</div>
</body>
</html>
