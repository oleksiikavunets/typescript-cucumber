@login
Feature:  Login 

    User must not be able to login using invalid credentials

Scenario: Login using invalid credentials

Given user opens Home page
When user clicks `Sign In` button
And user tries to login using email "test@test.test" and password "1234"
Then error message must be shown