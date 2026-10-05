# JavaScript - Web scraping

This project covers reading and writing files with Node.js, making HTTP requests with the `request` module, and processing JSON data from web APIs.

## Requirements

* Node.js 14.x
* Ubuntu 20.04 LTS
* Semistandard 16.x
* `request` module (`npm install request --global`, then `export NODE_PATH=/usr/lib/node_modules`)
* All JavaScript files must be executable
* All JavaScript files must start with `#!/usr/bin/node`

## Tasks

| File | Description |
| ---- | ----------- |
| `0-readme.js` | Reads and prints a file (utf-8); prints the error object on failure |
| `1-writeme.js` | Writes a string to a file (utf-8); prints the error object on failure |
| `2-statuscode.js` | Prints the status code of a GET request as `code: <status code>` |
| `3-starwars_title.js` | Prints the title of the Star Wars movie with a given ID |
| `4-starwars_count.js` | Prints the number of movies where "Wedge Antilles" (character 18) appears |
| `5-request_store.js` | Fetches a webpage and stores the body in a file (utf-8) |
| `6-completed_tasks.js` | Prints the number of completed tasks per user ID |

## Usage

```
$ ./0-readme.js cisfun
$ ./1-writeme.js my_file.txt "Python is cool"
$ ./2-statuscode.js https://intranet.alxswe.com/status
$ ./3-starwars_title.js 1
$ ./4-starwars_count.js https://swapi-api.alx-tools.com/api/films
$ ./5-request_store.js http://loripsum.net/api loripsum
$ ./6-completed_tasks.js https://jsonplaceholder.typicode.com/todos
```

## Author

Boaz Oloo - boazoloo263@gmail.com
