1. Install Node JS.
2. Install an IDE (i.e. VSCode).
3. Run 'npm init' to create a package.json file.
4. Run 'npm install express --save'.  This will create a package-lock.json.
5. Change tab settings (optional).
6. Create a .gitignore file and add anything you want to ignore (i.e. node_modules).  Example:
  ```
    node_modules
    lib
    .vscode
  ```
7. Run 'npm install nodemon --save' which automatically refresh the server(called by npm-watch after file change is detected and recompiled).
8. Run 'npm install npm-watch --save' to install a react watcher.  In package.json, you need something like this:
  ```
    "scripts": {
      "server": "npx nodemon",
      "compile": "npx babel src/views --out-dir lib/views",
      "start": "npm-watch"
    },
    "watch": {
      "compile": {
        "patterns": [
          "src/views"
        ],
        "extensions": "js,jsx"
      },
      "server": {}
    },
  ```
  Note: You can launch npm-watch with nodemon by running 'npm run start' with the script above.
