<?php

namespace Goodlife\Calender;

use Strict\Date\MonthInterface;
use Strict\Date\DayInterface;

class MakeCalender
{
    private $inst;


    public function __construct(MonthInterface $inst)
    {
        $this->inst = $inst;
    }

    public function getDate(): array
    {
        $day_data = [];

        foreach ($this->inst as $value) {
            $day = (int)$value->format('j');
            $week = (int)$value->format('w');

            if ($day == 1) {
                for ($i = 0; $i < $week; $i++) {
                    $day_data_detail = [
                        'day' => NULL,
                        'week' => $i
                    ];

                    $day_data[] = $day_data_detail;
                }
            }

            $day_data_detail = [
                'day' => $day,
                'week' => $week
            ];
            $day_data[] = $day_data_detail;
        }

        if (end($day_data)['week'] != 6) {
            for ($i = $week + 1; $i < 7; $i++) {
                $day_data_detail = [
                    'day' => NULL,
                    'week' => $i
                ];
                $day_data[] = $day_data_detail;
            }
        }

        return $day_data;
    }
}
