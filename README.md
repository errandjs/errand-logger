# errand-logger
> [errand](https://github.com/errandjs/errand) worker component used for logging

## Usage

```

npm install errand-logger

```

For dependencies and suggested usage of errand worker components refer to [errand](https://github.com/errandjs/errand)

## Example

```

{
	"tasks": [

		{
			"task": "errand-logger",
			"data": {
				"description": "replace-with-task-description",
				"request": {
					"message": "hello world"
				}
			}
		}

	]
}

```

Notes:

* **tasks** - [errand](https://github.com/errandjs/errand) task list
* **tasks[].task** - required `errand-logger` task name
* **tasks[].data.description** - optional task description
* **tasks[].data.request.message** - required message to write to log

