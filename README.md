# HOW to debug ES6

## launch.json:

    {
        "type": "node",
        "request": "launch",
        "name": "babel-nodemon"
    }

## .babelrc
    {
    "presets": [
        "@babel/preset-env"
    ]
}

## package.json
    "start": "nodemon ./src/game.js babel-node",

## vscode terminal
    on the checkbox: use : "JavaScript Debug Terminal"

## set a breakpoint
    should use the "debugger" keyword [IMPORTANT]

## use:
    use the command: npm run start in the correct terminal (mention above) 
