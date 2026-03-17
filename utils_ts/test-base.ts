import { test as baseTest } from "@playwright/test";
interface TestDataForOrder {
  username: string;
  password: string;
  productName: string;
}
export const customTest = baseTest.extend<{
  testDataForOrder: TestDataForOrder;
}>({
  testDataForOrder: {
    username: "lakshmi.itqa@gmail.com",
    password: "QATester@9",

    productName: "ADIDAS ORIGINAL",
  },
});
