# 🚀 Playwright Automation Framework (UI + API + BDD + CI/CD + Docker)

![Playwright](https://img.shields.io/badge/Playwright-Automation-green)
![Cucumber](https://img.shields.io/badge/BDD-Cucumber-brightgreen)
![CI/CD](https://img.shields.io/badge/CI-CD-blue)
![Docker](https://img.shields.io/badge/Docker-Enabled-blue)
![Build](https://img.shields.io/badge/build-passing-brightgreen)
![Status](https://img.shields.io/badge/Framework-Enterprise--Level-success)

---

## 👩‍💻 Author

**Lakshmi Prasanna Vannemreddy**

SDET | QA Automation Engineer | Playwright | API Testing | CI/CD

---

## 🌟 Overview

A **scalable, enterprise-level end-to-end automation framework** built using **Playwright (JavaScript & TypeScript)**.

This framework is designed to solve **real-world QA challenges** by combining:

* UI Automation Testing
* API Testing
* Behavior-Driven Development (BDD - Cucumber)
* Data-Driven Testing
* CI/CD Pipeline Integration
* Dockerized Test Execution

💡 **Business Impact**

* ⏱️ Reduced manual testing effort by ~60%
* 🚀 Accelerated release cycles with CI/CD automation
* 🧪 Improved regression coverage and defect detection
* 🔁 Enabled reliable and repeatable test execution

---

## 🎬 Test Execution Demo

🎥 **Watch Full Execution (VS Code + Browser + Reports)**


https://github.com/user-attachments/assets/1d2e7ce3-523c-41c6-b986-2cd01e3e8e07



📸 **Reports Preview**


* Allure Report Screenshot<img width="1907" height="919" alt="allure-report" src="https://github.com/user-attachments/assets/1633fb1f-9c75-4ff6-8b7c-a00d3dc803c7" />

* Playwright Report Screenshot
*<img width="842" height="882" alt="playwright-report" src="https://github.com/user-attachments/assets/c87cd526-300a-4cc2-b8a8-f48bbfe5e398" />
 
* Cucumber Report Screenshot
<img width="1141" height="830" alt="cucumber-report" src="https://github.com/user-attachments/assets/ff38416c-9d33-45b7-9a06-712d31823694" />

---

## ⚡ Quick Start (Run in 1 Minute)

```bash
git clone https://github.com/PrasannaVannemreddy/playwright-automation-framework
cd playwright-automation-framework
npm install
npx playwright install
npx playwright test
```

---

## 🌐 Applications Under Test

* https://rahulshettyacademy.com/AutomationPractice/
* https://rahulshettyacademy.com/loginpagePractise/
* https://rahulshettyacademy.com/client
* https://rahulshettyacademy.com/seleniumPractise/#/offers
* https://eventhub.rahulshettyacademy.com
* https://www.saucedemo.com/

---

## 🧪 Real-World Scenario Coverage

* 🔐 Authentication & Authorization
* 🛍️ E-commerce workflows (cart, checkout, orders)
* 🔗 API + UI integrated validation
* 📊 Table sorting & filtering validation
* 📦 End-to-end business workflows
* 🎯 Form validations & error handling

---

## 🏗️ Architecture

User
↓
Feature Files (BDD)
↓
Step Definitions
↓
Page Object Model (POM)
↓
Playwright (UI + API)
↓
Utilities (Excel / JSON)
↓
Reports (Allure / Playwright / Cucumber)
↓
CI/CD Pipelines (Azure DevOps / Jenkins)
↓
Docker Execution

---

## 🎯 Key Highlights

✔ Designed a modular and scalable automation framework
✔ Automated real-world end-to-end business workflows
✔ Implemented UI + API integrated testing strategy
✔ Enabled parallel execution & cross-browser testing
✔ Integrated CI/CD pipelines (Azure DevOps & Jenkins)
✔ Built robust data-driven framework (Excel + JSON)
✔ Dockerized execution for consistency across environments
✔ Implemented rich reporting (Allure, Playwright, Cucumber)

---





## ⚙️ Tech Stack

| Category    | Tools                        |
| ----------- | ---------------------------- |
| Automation  | Playwright                   |
| Language    | JavaScript, TypeScript       |
| BDD         | Cucumber                     |
| API Testing | Playwright API               |
| Reporting   | Allure, Playwright, Cucumber |
| CI/CD       | Azure DevOps, Jenkins        |
| Container   | Docker                       |
| Data        | Excel, JSON                  |

---

## 📂 Project Structure

```
playwright-automation-framework/
│
├── features/             # Cucumber BDD feature files (Gherkin scenarios)
├── step_definitions/     # Cucumber step definitions
├── support/              # Cucumber hooks (Before/After) & test setup
├── tests/                # Playwright test specifications (UI + API)
│
├── pageobject/           # Page Object Models (JavaScript)
├── pageobject_ts/        # Page Object Models (TypeScript)
│
├── utils/                # Utility functions (JavaScript)
├── utils_ts/             # Utility functions (TypeScript)
├── scripts/              # Custom helper scripts
│
├── screenshots/          # Execution screenshots & reports (Allure / Playwright / Cucumber)
│
├── playwright.config.js  # Playwright configuration
├── docker-compose.yml    # Docker setup for execution
├── azure-pipelines.yml   # Azure DevOps CI/CD pipeline
├── package.json          # Project dependencies & scripts
└── README.md             # Project documentation
```

---

## ▶️ Test Execution

### Run Playwright Tests

```bash
npx playwright test
```

### Run Cucumber Tests

```bash
npx cucumber-js
```

### Run by Tags

```bash
npx cucumber-js --tags "@regression"
npx cucumber-js --tags "@smoke"
```

---

## 🌐 Cross-Browser Testing

* Chromium
* Firefox
* WebKit

---

## 🧪 Advanced Capabilities

* API-based authentication (skip UI login)
* Network interception & API mocking
* File upload & download automation
* Excel & JSON data-driven testing
* Parallel execution
* Tag-based execution

---

## 🐳 Docker Execution

```bash
docker-compose up
```

---

## 🔁 CI/CD Integration

* Azure DevOps pipeline integration
* Jenkins pipeline support
* Automated execution on every commit
* Docker-based execution

---

## 📊 Reports

### Playwright Report

```bash
npx playwright show-report
```

### Allure Report

```bash
allure serve allure-results
```

### Cucumber Report

```bash
node generate-report.js
```

---

## 🔍 Sample BDD Scenario

```
Scenario: Verify user can place an order successfully
  Given user logs into the application
  When user selects a product and adds it to the cart
  And user completes checkout
  Then order should be placed successfully
```

---

## 📈 Execution Metrics

* ✅ Automated 50+ test scenarios
* ⚡ Reduced manual testing effort by ~60%
* 🚀 Improved execution speed via parallel testing
* 🌐 Ensured stability with cross-browser testing
* 🔄 Enabled continuous testing via CI/CD

---

## 🧩 Challenges & Solutions

| Challenge        | Solution                        |
| ---------------- | ------------------------------- |
| Dynamic elements | Playwright auto-wait & locators |
| Slow execution   | Parallel execution              |
| Repeated login   | API-based authentication        |
| Maintainability  | POM + reusable utilities        |

---

## 🌟 Why This Project Stands Out

* Real-world enterprise automation scenarios
* UI + API + BDD in a single framework
* CI/CD + Docker integrated
* Designed using SDET best practices
* Scalable, maintainable, and extensible

---

## 🚀 Future Enhancements

* GitHub Actions integration
* Cloud execution (BrowserStack / LambdaTest)
* Database validation layer
* Performance testing integration

---

## 🤝 Contribution

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Raise a Pull Request

---

## 📜 License

MIT License

---

## ⭐ Support

If you find this project useful, please ⭐ the repository!
