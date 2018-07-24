<?php

namespace Goodlife\Calender;
use PDO;

const DB_DSN = 'mysql:host=calender-refactor_db_1; dbname=database; charset=utf8';
const DB_USER = 'root';
const DB_PASSWORD = 'pass';
const OPTION = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false
];


class PDOMaker
{
    public static function getPDO(): PDO
    {
        try {
            return new PDO(DB_DSN, DB_USER, DB_PASSWORD, OPTION);
        } catch (\PDOException $e) {
            echo "ErrorMessage : " . $e->getMessage() . "<br>";
            echo "ErrorCode : " . $e->getCode() . "<br>";
            echo "ErrorFile : " . $e->getFile() . "<br>";
            echo "ErrorLine : " . $e->getLine() . "<br>";
        }
    }
}