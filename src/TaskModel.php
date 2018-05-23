<?php

namespace Goodlife\Calender;

use Strict\Date\DayInterface;


class TaskModel
{
	/** @var int */
	private $id;

	/** @var string */
	private $task;

	/** @var DayInterface */
	private $day;

	public function __construct(
		int $id,
		string $task,
		DayInterface $day
	) {
		$this->id = $id;
		$this->setTask($task);
		$this->day = $day;
	}

	public function getId(): int
	{
		return $id;
	}

	public function getTask(): stirng
	{
		return $task;
	}

	public function getDay(): DayInterface
	{
		return $day;
	}

	public function setTask(string $task): void
	{
		$this->task = $task;
	}
}
