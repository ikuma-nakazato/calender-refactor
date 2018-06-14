<?php

namespace Goodlife\Calender;

use Strict\Date\DayInterface;
use PDO;


class TaskRepository {
	private $pdo;


	public function __construct(PDO $pdo, $sql_query)
	{
		$this->pdo = $pdo;
		$db_handle = $this->pdo;
		$db_handle->query($sql_query);
	}

	public function get(DayInterface $day): array
	{
		$taskmodel_array = [];
		$db_handle = $this->pdo;
		$sql_query = 'SELECT id, task FROM plan WHERE day = :day';

		$pre = $db_handle->prepare($sql_query);
		$pre->bindValue(':day', $day->format('Y-m-d'), PDO::PARAM_STR);
		$pre->execute();

		foreach($pre as $value){
			$taskmodel_array[] = new TaskModel($value['id'], $value['task'], $day);
		}

		return $taskmodel_array;
	}

	public function update(TaskModel $model, string $task): bool
	{
		$db_handle = $this->pdo;
		$model->setTask($task);

		try {
			$db_handle->beginTransaction();
			//データロック
			$x_lock = 'SELECT * FROM plan WHERE id = :id FOR UPDATE';

			$data_lock = $db_handle->prepare($x_lock);
			$data_lock->bindValue(':id', $model->getId(), PDO::PARAM_STR);

			$data_lock->execute();

			//更新処理
			$sql_query = 'UPDATE plan SET task = :task WHERE id = :id';

			$pre = $db_handle->prepare($sql_query);
			$pre->bindValue(':task', $model->getTask(), PDO::PARAM_STR);
			$pre->bindValue(':id', $model->getId(), PDO::PARAM_STR);
			$pre->execute();

			$db_handle->commit();

			return true;
		} catch(\PDOException $pdoe) {
			$db_handle->rollback();

			return false;
		}
	}

	public function create(string $task, DayInterface $day): TaskModel
	{
		$db_handle = $this->pdo;
		$sql_query = 'INSERT INTO plan (task, day) VALUES (:task, :day)';

		$pre = $db_handle->prepare($sql_query);
		$pre->bindValue(':task', $task, PDO::PARAM_STR);
		$pre->bindValue(':day', $day->format('Y-m-d'), PDO::PARAM_STR);
		$pre->execute();

		return new TaskModel($db_handle->lastInsertId(), $task, $day);
	}

	public function delete(TaskModel $model): bool
	{
		$db_handle = $this->pdo;

		try {
			$db_handle->beginTransaction();
			//データロック
			$x_lock = 'SELECT * FROM plan WHERE id = :id FOR UPDATE';

			$data_lock = $db_handle->prepare($x_lock);
			$data_lock->bindValue(':id', $model->getId(), PDO::PARAM_STR);

			$data_lock->execute();
			//削除処理
			$sql_query = 'DELETE FROM plan WHERE id = :id';

			$pre = $db_handle->prepare($sql_query);
			$pre->bindValue(':id', $model->getId(), PDO::PARAM_STR);
			$pre->execute();

			$db_handle->commit();

			return true;
		} catch (\PDOException $pdoe) {
			$db_handle->rollback();

			return false;
		}
	}
}
