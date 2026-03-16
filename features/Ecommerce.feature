Feature: Ecommerce Validation
@Regression
Scenario: Place an order
    Given a login to the ecommerce platform with "lakshmi.itqa@gmail.com" and "QATester@9"
    When Add "ZARA COAT 3" to the cart
    Then verify "ZARA COAT 3" is displayed in the cart
    When enter valid details and place the order
    Then Verify order is present in the order history with "ZARA COAT 3"


@Validation
  Scenario Outline: Scenario Outline name: Place an order
    Given a login to the ecommerce2 platform with "<username>" and "<password>"
    Then verify error message is displayed for invalid login attempt
  

  Examples:
      | username               | password    | 
      | lakshmi.itqa@gmail.com | QATester@9  | 
      | hello123@gmail.com     | QATester@9  | 
