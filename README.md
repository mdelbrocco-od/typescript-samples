# typescript-samples
Code samples meant to accompany my Feb 2020 TypeScript presentation to the Content Management team

## TypeScript - getting started in 5 minutes

Based on https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

Go to the TypeScript folder here and notice you have a simple `greeter.js` and `greeter.html`. This should work initially if you open the html file in a browser.
Verify that you get a greeting in the browser.

Now rename `greeter.js` => `greeter.ts`. give the function parameter a type. Change var to let if you care enough.

##### Easy Mode: use Visual Studio
If you're in Visual Studio, saving the file should automatically add a `greeter.js` (it's back!) and `greeter.map.js` to the folder. Open your html file in the browser to make sure everything still works. That was easy, huh?

If you're deveoping in Visual Studio Code, we have to manually install the TypeScript compilter ourselves. If you'd like, you can first verify that `tsc` is undefined in your shell/terminal.

##### Installing TypeScript Yourself
Using npm: `npm i -g typescript` (after running `npm init`)  
Using yarn: `yarn global add typescript` (after running `yarn init`)  

Note that these commands will install typescript globally.

Now we have the `tsc` command, which stands for TypeScript Compile. Open up your favorite shell (I use powershell but the one built-in to VSCode works too) and run `tsc greeter.ts` and then open the html file - it'll use the new `greeter.js` that was just generated.

Note that we can run `tsc --init` to create a `tsconfig.json` file to better control TS compilation. We can adjust where source ts files come from, where output js files go, how strict to be with type checks, etc.


## Creating a "create-react-app" project with TypeScript

Navigate to the CRA folder and run any of the following:
`npx create-react-app ts-demo --template typescript` (similar to npm but a bit smarter in some ways - see https://stackoverflow.com/questions/50605219/difference-between-npx-and-npm for more info)

`npm init react-app my-app --template typescript`

`yarn create react-app my-app --template typescript`

Wait a moment as the project files are added, then:

`cd ts-demo`  
`yarn start`  
Note: in my case, I believe create-react-app chose yarn because I have it installed globally. You might be prompted to us npm instead.

This is all you have to do! Check out localhost:3000 to see your new app running with React and TypeScript!


## Adding TypeScript to an existing create-react-app project

Based on https://create-react-app.dev/docs/adding-typescript/

If you have previously created a project with create-react-app, you can run  
`npm install --save typescript @types/node @types/react @types/react-dom @types/jest`
or
`yarn add typescript @types/node @types/react @types/react-dom @types/jest`

<<<<<<< HEAD
to add typescript to your project! Rename .js files to .ts (.jsx to .tsx) and you should be good to go!
=======
to add TypeScript to your project! Rename .js files to .ts (.jsx to .tsx) and you should be good to go!
>>>>>>> master


## Questions from the audience

Where are the files when you run `yarn start`?
* Running `react-scripts start` (which `yarn start` runs under the hood) run a webpack dev server. It builds in-memory! Source: https://stackoverflow.com/questions/57938689/how-to-run-react-scripts-start-from-an-express-server
 
What is the difference between `interface` and `type`? What would you use `type` for?
* I think the accepted answer here is fantastic: https://stackoverflow.com/questions/36782896/in-typescript-what-is-the-difference-between-type-and-interface. The author gives some examples of interfaces and types, then says "So in general if you just have a plain object type, as shown in your question, an interface is usually a better approach. If you find yourself wanting to write something that can't be written as an interface, or want to just give something a different name, a type alias is better." Since I'm typically working with plain objects (in the Atlas CS Site, for example), I tend to use interfaces.