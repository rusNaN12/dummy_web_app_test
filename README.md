# Cypress Testing App

This repository contains an example Cypress testing.

## This project needs to achieve following objectives:
- [X] Provide the manual test case(s) covering the flow
- [X] Automate the prepared manual test case(s)
- [X] Enable the testing of the provided functionality as part of a CI/CD pipeline
- [X] Provide execution instructions and enough information explaining the final solution
- [X] Describe the chosen testing approach and anything you could improve about the technical task 

## Project improvements
- Remove Hardcoded Test Data: Refactor tests to use dynamic and randomized test data generated during test execution, utilizing tools like Faker.js or other data generation libraries.
- Extend Test Suite: Expand the existing test suite to cover a wider range of functionality, including edge cases and different scenarios to ensure comprehensive test coverage.
- Split Tests Per Page: Organize tests into separate files or test suites based on specific pages or components of the application for better readability and maintainability.
- Add Test Coverage Reports: Integrate a code coverage tool (e.g., Istanbul, nyc) to generate test coverage reports, enabling visibility into the percentage of code covered by the tests.
- Publish Test Execution Report: Configure the CI pipeline to publish the test execution report to a remote repository (e.g., GitHub Pages or an external reporting service) for easy access and analysis of test results.


## Prerequisites

Before running the tests, ensure you have the following installed on your machine:

- Node.js (v12 or higher)
- Yarn (or npm)

## Getting Started

1. Clone this repository to your local machine: 
```
git clone https://github.com/your-username/cypress-testing-app.git
```

2. Navigate to the project's directory:
```
cd dummy_web_app_test
```

3. Install the dependencies:
```
yarn install
```

## Running Tests
To run the tests using Cypress, use the following command:
```
yarn cypress:run
```
To lunch cypress interactive mode use following command:
```
yarn cypress:open
```

> **Note:** Also test can be executed with github actions(see on tab actions!) 
> **Note:** During execution there are failing test due to found issues with the application.



The project's folder structure is as follows:

```
├── cypress
│ ├── e2e # Test files
│ ├── fixtures # Test data files
| |── pages # page objects
│ └── support # Test configuration and helper files
└── package.json # Project dependencies and scripts
```

- The `cypress/e2e` directory contains tests.
- The `cypress/fixtures` directory holds the test data files.
- The `cypress/pages` directory contains page objects related to testing app.
- The `cypress/support` directory contains configuration files, helper functions, and any additional support files.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

