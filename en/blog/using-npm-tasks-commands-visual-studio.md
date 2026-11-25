# Using npm tasks and commands in Visual Studio (2022, 2019, 2017, 2015)

> As Visual Studio users we are used to some of the work being automated in the development environment, but sometimes we need to run npm tasks or commands in our project such as converting TypeScript to JavaScript.

- URL: https://rafaelneto.dev/en/blog/using-npm-tasks-commands-visual-studio/
- Author: Rafael Neto (https://rafaelneto.dev/)
- Published: 2020-05-21
- Language: English (en-US)
- Tags: npm, VisualStudio
- Spanish version: https://rafaelneto.dev/blog/usar-tareas-comandos-npm-visual-studio/

As Visual Studio users we are used to some of the work being automated in the development environment, but sometimes we need to run npm tasks or commands in our project such as converting TypeScript to JavaScript.

To achieve the automation of these tasks we can make use of our _package.json_ file through the Visual Studio Task Runner Explorer (_Task Runner Explorer_).

## Installation of NPM Task Runner

The first thing to do is to install the [NPM Task Runner extension](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.NPMTaskRunner). This will display both the default _install_ and _update_ npm scripts, as well as the custom scripts that we have defined in our _package.json_ file.

![Visual Studio Task Runner Explorer](https://rafaelneto.dev/images/vs2019-task-runner-explorer.png)

We can access the Task Runner Explorer from the context menu by right-clicking on our _package.json_ file.

## Script execution and programming

It is possible to run the scripts from the explorer by double clicking on them or with the right button and the option _Run_ (_Run_).

It is also possible to schedule the execution of the scripts by associating them to different operations of the project (we can associate several operations to each script): _Before Build_ (_Before Build_), _After Build_ (_After Build_), _Clean_ (_Clean_) or _Project Open_ (_Project Open_).

![Visual Studio Task Runner Explorer Bindings](https://rafaelneto.dev/images/vs2019-task-runner-explorer-bindings.png)

## Problems with NPM Task Runner, Visual Studio and ASP.NET Core

When our _package.json_ file is located in the _wwwroot_ folder (or other folder than the root of the project), the Task Runner Explorer will not recognize it, so we will have to create a second _package.json_ in the root path of the project in which we will redefine our scripts.

In the new _package.json_ file we will set the script execution path based on our resources. So, in the following example we will add ```cd wwwroot && ``` at the beginning of the _build_ script for packaging with [Webpack](https://rafaelneto.dev/en/blog/using-webpack-4-transform-package-web-aplicacion-resources/) our resources located in the _wwwroot_ folder.

``` bash
{
  ...
  "scripts": {
    ...,
    "build": "cd wwwroot && webpack"
  },
  ...
}
```
