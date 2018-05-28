<?php

namespace Goodlife\Calender;

use Strict\Date\MonthInterface;
use Strict\Date\DayInterface;

class MakeCalender {
	private $inst;


	public function __construct(MonthInterface $inst){
		$this->inst = $inst;
	}

	public function getDate(): array
	{
		$day_data = [];

		foreach ($this->inst as $value) {
			$day = $value->format('j');
			$week = $value->format('w');

			if($day == 1){
				for ($i = 0; $i < $week; $i++){
					$day_data["NULL{$i}"] = $i;
				}
			}

			$day_data[$day] = $week;
		}

		if(end($day_data) != 6){
			for ($i = $week + 1 ; $i < 7; $i++) {
				$day_data += ["NULL{$i}" => $i];
			}
		}

		return $day_data;
	}
}
