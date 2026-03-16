Feature: Ecommerce Validation
@Validation
  Scenario Outline: Scenario Outline name: Place an order
    Given a login to the ecommerce2 platform with "<username>" and "<password>"
    Then verify error message is displayed for invalid login attempt
  

  Examples:
      | username               | password    | 
      | lakshmi.itqa@gmail.com | QATester@9  | 
      | hello123@gmail.com     | QATester@9  | 