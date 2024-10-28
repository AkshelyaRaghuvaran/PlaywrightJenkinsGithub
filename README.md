## RUN THE FOLLOWING COMMANDS TO INSTALL NODE MODULES FOR RUNNING THE TESTS

- npm install
- npm install @cucumber/cucumber
- npx playwright install

## Running the "Debug using test:report" Script in VS Code

In Visual Studio Code, in the Run and Debug tab, you can select "Debug using test:report" from the drop down and click on Run. You will then get prompted for two choices.

- The environment you would like to run the test
  - Chose one of the choices, this cooresponds to a running a script from the package.json scripts section
- The tags to run
  - You can select the Tags that you wish to run from the .feature files

## Project_API & Project_Web

- Consists features and step definition folders.
- Features folder contains feature files
- Step Definition folder contains .step.js files to run the feature file
- Project_API is for API Testing
- Project_Web is for Web/UI Testing
- Reports for each run will be saved in 3 formats under reports folder

## Formatting with Prettier

- We will use the "Prettier" VS Code extension to autoformat our code.
- Prettier rules can be modified in the `.prettierrc` file.
- To run Prettier on all files, run the following from the root directory:

  `npx prettier --write .`

- To run Prettier on all files in a specific directory, run the following from the root directory:

  `npx prettier --write "./project-cratebrowser/**/*.js"`

  - This will execute Prettier on all `.js` files in the `project-cratebrowser` directory.

- All files should be formatted with Prettier prior to PR submission.

- Keyboard shortcut to run prettier:
  - **Windows**: Shift + Alt + F
  - **Mac**: Shift + Option + F

## Linting with ESLint

- We will use the "ESLint" VS Code extension to see linting errors in our code.
- ESLint rules can be modified in the `.eslintrc.js` file.
- Linting errors should be corrected and not ignored or commented out (some exceptions may apply).
- All ESLint errors should be resolved prior to PR submission.
- To run `eslint` commands from the terminal, you will first have to install ESLint globally by running:
  - `npm install -g eslint`
- To see where ESLint errors are occurring, run the following from the root directory:

  - **Windows**: `eslint .`
  - **Mac**: `npx eslint .`

- To specify a project to execute ESLint in, run the following from the root directory:

  - **Windows**: `eslint project-cratebrowser`
  - **Mac**: `npx eslint project-cratebrowser`

  - This will excute ESLint on all files within the folder `project-cratebrowser`.
  - This command should be run for your team's project directory prior to each PR submission to ensure all relevant files have been linted.

- To automatically fix some ESLint errors that are auto-fixable, add the `--fix` flag.
  - **Windows**: `eslint --fix project-cratebrowser`
  - **Mac**: `npx eslint --fix project-cratebrowser`

## Winston Logger

- Winston is a simple and universal logging library with support for multiple transports.
- A transport is essentially a storage device for your logs.
- Each Winston logger can have multiple transports configured at different levels.
- Please refer to the official Winston documentation for more information
- npm install --savedev winston
- npm install --savedev winston-daily-rotate-file

## Allure Reporting Commands

- npx playwright test --reporter=line,allure-playwright
- allure generate allure-results --clean
- allure open allure-report
