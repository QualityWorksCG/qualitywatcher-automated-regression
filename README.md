# QualityWatcher-Automation
Automation Suite for the QualityWatcher 2.0 project

## Getting Started
Clone this repository:
```sh
$ git clone https://github.com/QualityWorksCG/qualitywatcher-automation.git
$ cd QualityWatcher-Automation
$ npm install
```
### `npm install`

Installs the dependencies and creates the node modules folder.<br />

## Folder Structure
- **data:** This contains data files with test data to be used by test files. *E.g. [users, test case data, Mailslurp regular expression data and any other data that will be used in a test]*
- **page:** This contains page object files which include element selectors and functions that are reused in test files.
- **test/specs:** This contains test files which include the actual tests.

## Executing Tests

ENV=stg npm test - runs all tests/specs <br />

ENV=stg npm run authentication - runs tests in the specified suite. In this case, the authentication suite<br />
ENV=stg npm run registration - runs tests in the specified suite. In this case, the registration suite<br />
ENV=stg npm run forgotPassword - runs tests in the specified suite. In this case, the forgot-password suite<br />
ENV=stg npm run testSuites - runs tests in the specified suite. In this case, the test-suite creation suite<br />

## Environments
There are currently 2 environments:

&emsp; stg: https://stg.qualitywatcher.com/

&emsp; prod: https://app.qualitywatcher.com/

To run tests against the different environments you can change the value of the `ENV` variable in the command.

&nbsp; Example to run tests on staging environment

&emsp; ```ENV=stg npm run test```

&nbsp; Example to run tests on production environment

&emsp; ```ENV=prod npm run test```

## Generating Test Report

From the root of the project, run the following command: `allure generate --clean && allure open` <br />

This generates and opens the allure report locally, displaying all test results that are currently in the `allure-results` directory. <br />

Results from the report can also be downloaded as a csv file while in the allure interface for sharing.

## Adding a New Suite

*Update the `suites` property in the `wdio.conf.js` file to include the tests/specs that should be included in your new suite.<br/>
    *Eg: `testRun: ['./test/specs/testRun/*.js'] ` would be added for a suite with the name testRun.<br/><br/>
*Update the `scripts` property in the `package.json` file to include the new suite.<br />
    *Eg: `"testRun": "./node_modules/.bin/wdio wdio.conf.js --suite testRun"` would be added for a suite with the name testRun.<br/>


## Mailslurp Functions and Settings

The MailSlurp function is used in the test suite to implement and test the sign-up and forgot password functionalities of the QualityWatcher app.

MailSlurp is an Email API built for developers and QA testers. It let’s you create real email addresses on demand then send and receive emails from code, tests, or an online dashboard.

MailSlurp is free for personal use but you must have an API Key to use MailSlurp. Get an API Key free by creating an account at https://app.mailslurp.com/sign-up/

Setup and install can be found at https://www.mailslurp.com/guides/getting-started/

A .env file is required to store the API key ,once a MailSlurp account has been created eg. 
&emsp; ```MAILSLURP_API_KEY=c83h5h4449hh5g4j3j56h5h4j3jj5h``` 

The MailSlurp function can be found in the registration test suite.

```
describe('Registration for QualityWatcher', () => {

    it('Verify that user can sign up with valid email and valid password', async () => {
        const mailSlurp = new MailSlurp({ apiKey: process.env.MAILSLURP_API_KEY });
        const inbox = await mailSlurp.createInbox();
   }
}
```
## Best Practices

When using the automation suite independently there are few things to consider. <br/>

***Execution***

For a general confidence test executing the entire suite at once is appropriate but when assessing an issue it is better to execute the suites individually. This allows for easier error tracking and allows you the ability to visually follow the flow of the test as it is occurring,in which you can see exactly where a case begins to fail, typically there is a pause in execution or you may able to briefly see some error on the page. <br/>

***Test Inspection***

If during test execution you would like the execution to be paused to inspect a page for some reason this can be done using pauses. Simply putting a browser pause where necessary will halt the execution for your desired amount of time. For e.g. `browser.pause(5000)` will pause execution for 5 seconds. This is usually helpful when you want to observe some element behavior or result of a line of code before the test completes in full.<br/>

***Skipping Tests***

There may be times in executing a test suite when you no longer need the entire suite to be executed because you are focused on a specific test case. For e.g a specific case has failed and it is not dependent on other cases in the suite. In this instance it would be more time efficient to skip the tests that have passed and only execute the test of focus. Here we can use `x` or `skip` to skip test cases. This is written as 
`xit` or `it.skip`.

