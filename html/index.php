<?php

use Strict\Date\Months\YMMonth;

require("../vendor/autoload.php");

if(isset($_GET['year']) && isset($_GET['month'])){

    $obj = new YMMonth($_GET['year'], $_GET['month']);

    foreach ($obj as $value) {
        echo $value->format('Y-m-d-w'), '<br />';
    }
}
