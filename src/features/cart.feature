@cart
Feature: Cart

    User can add products to cart, update cart and checkout successfully

Scenario: User opens Home page, searches a product, adds products to cart, updates the cart and checkouts successfully

Given user opens Home page
When user searches "black dress"
And user adds product 1 to cart
And user adds product 2 to cart
Then user proceeds to checkout
When user changes product 2 quantity to "2"
And user removes product 1 from the cart
Then user clicks `Proceed to checkout` button