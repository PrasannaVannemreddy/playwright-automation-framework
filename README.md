# 🚀 Playwright Automation Framework (Docker + CI/CD)

## 📌 Overview

This project is a complete end-to-end Playwright Automation Framework built using JavaScript.

It supports UI + API testing, Cucumber BDD, Docker execution, and is integrated with CI/CD pipelines.

---

## 🎯 Key Features

- ✅ Playwright UI Automation (Web Testing)
- ✅ API Testing integrated with UI flows
- ✅ Cucumber BDD Framework
- ✅ Page Object Model (POM)
- ✅ Docker-based execution
- ✅ Azure CI/CD pipeline integration
- ✅ HTML, Allure & Cucumber reports
- ✅ Screenshots & Trace support
- ✅ Cross-browser testing (Chromium)

---

## 🧠 Advanced Capabilities

- 🔹 End-to-End testing (UI + API in one script)
- 🔹 Session handling using API (skip UI login)
- 🔹 Network interception & mocking
- 🔹 Parallel execution support
- 🔹 Remote execution using WebSocket (wsEndpoint)
- 🔹 Docker container execution

---

## 📁 Project Structure

```id="project-structure"
PlayWrightAutomation/
│
├── tests/
├── pageobject/
├── utils/
├── features/
├── scripts/
├── playwright.config.js
├── docker-compose.yml
├── azure-pipelines.yml
├── package.json
└── README.md
```

---

## 🐳 Run with Docker

### 👉 Start Playwright Server

```bash id="docker-up"
docker-compose up
```

### 👉 Run Tests (in new terminal)

```bash id="run-tests"
npx playwright test
```

---

## 🔌 Configuration

```js id="config"
connectOptions: {
  wsEndpoint: "ws://localhost:3000",
}
```

---

## ⚙️ Installation

```bash id="install"
npm install
npx playwright install
```

---

## 📊 Reports

### Playwright Report

```bash id="report"
npx playwright show-report
```

### Allure Report

```bash id="allure"
allure serve allure-results
```

---

## 🛠️ Tech Stack

- Playwright (JavaScript)
- Node.js
- Docker
- Cucumber (BDD)
- Azure DevOps (CI/CD)

---

## 👩‍💻 Author

Prasanna Lakshmi

---

## 🌟 Highlights

- Built real-world automation framework
- Integrated Docker for scalable execution
- CI/CD ready (Azure pipelines)
- Follows best industry practices

---

## 🚀 Future Enhancements

- Jenkins CI/CD integration
- GitHub Actions pipeline
- Parallel execution optimization
- Advanced reporting dashboards
# playwright-automation-framework
