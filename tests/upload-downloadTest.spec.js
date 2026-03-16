const ExcelJs = require("exceljs");
const { test, expect } = require("@playwright/test");

/**
 * @typedef {Object} Change
 * @property {number} colChange
 */

/**
 * @param {string} searchText
 * @param {string} replaceText
 * @param {Change} change
 * @param {string} filePath
 */
async function writeExcelTest(searchText, replaceText, change, filePath) {
  const workbook = new ExcelJs.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.getWorksheet("Sheet1");
  if (!worksheet) {
    throw new Error("Sheet1 not found in workbook");
  }
  const output = await readExcel(worksheet, searchText);

  const cell = worksheet.getCell(output.row, output.column + change.colChange);
  cell.value = replaceText;
  await workbook.xlsx.writeFile(filePath);
}

/**
 * @param {ExcelJs.Worksheet} worksheet
 * @param {string} searchText
 */
async function readExcel(worksheet, searchText) {
  if (!worksheet) {
    throw new Error("Worksheet is undefined");
  }
  let output = { row: -1, column: -1 };
  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      if (cell.value === searchText) {
        output.row = rowNumber;
        output.column = colNumber;
      }
    });
  });
  return output;
}
//update Mango Price to 350.
//writeExcelTest("Mango",350,{rowChange:0,colChange:2},"/Users/rahulshetty/downloads/excelTest.xlsx");
test("Upload download excel validation", async ({ page }) => {
  const textSearch = "Mango";
  const updateValue = "350";
  await page.goto(
    "https://rahulshettyacademy.com/upload-download-test/index.html",
  );
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "Download" }).click();
  await downloadPromise;
  writeExcelTest(
    textSearch,
    updateValue,
    { rowChange: 0, colChange: 2 },
    "/Users/Harin/Downloads/exceltest.xlsx",
  );
  await page.locator("#fileinput").click();
  await page
    .locator("#fileinput")
    .setInputFiles("/Users/Harin/Downloads/exceltest.xlsx");
  const textlocator = page.getByText(textSearch);
  const desiredRow = await page.getByRole("row").filter({ has: textlocator });
  await expect(desiredRow.locator("#cell-4-undefined")).toContainText(
    updateValue,
  );
});
