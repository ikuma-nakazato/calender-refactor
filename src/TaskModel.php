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
		return $this->id;
	}

	public function getTask(): string
	{
		return $this->task;
	}

	public function getDay(): DayInterface
	{
		return $this->day;
	}

	public function setTask(string $task): void
	{
		$this->task = $task;
	}
}
