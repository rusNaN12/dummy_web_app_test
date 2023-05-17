# Cypress Testing App

This repository contains an example Cypress testing.

## This project needs to achieve following objectives:
- [x] Provide the manual test case(s) covering the flow
- [ ] Automate the prepared manual test case(s)
- [ ] Enable the testing of the provided functionality as part of a CI/CD pipeline
- [x] Provide execution instructions and enough information explaining the final solution
- [ ] Describe the chosen testing approach and anything you could improve about the technical task 

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

