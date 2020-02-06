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


## Creating a "create-react-app" project with typescript

Navigate to the CRA folder and `npx create-react-app ts-demo --template typescript`

`cd ts-demo`
`yarn start`
Note: in my case, I believe create-react-app chose yarn because I have it installed globally. You might be prompted to us npm instead.

This is all you have to do!


## Adding TypeScript to an existing create-react-app project

Based on https://create-react-app.dev/docs/adding-typescript/

Navigate to the CRA folder and (`yarn init` or `npm init` first) run `npm create-react-app ts-demo --template typescript` / `yarn create-react-app ts-demo --template typescript`