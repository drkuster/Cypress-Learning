Feature: Testing a sample checkout from Rahul Shetty's practice eCommerce site

    I will automate the checkout process within Rahul's site and verify the site handles this scenario properly

    @Regression
    Scenario: Checking out with max items
        Given I land on the site
        When I place items in my cart
        And Verify the total price 
        Then Select the country, submit my order and verify its success

    @Smoke
    Scenario: Filling out the form
        Given I land on the form page
        When I fill out the form details
        | name | gender |
        | bob  | Male   |
        Then Verify all information is correct
        