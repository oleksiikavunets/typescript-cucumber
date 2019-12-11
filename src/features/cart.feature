@cart
Feature: Cart

    User can add products to cart, update cart and checkout successfully

Scenario: User opens Home page, searches a product, adds products to cart, updates the cart and checkouts successfully

Given user opens Home page
When user searches "black dress"
And user adds product 1 to cart
And user adds product 2 to cart
And user proceeds to checkout
When user changes product 2 quantity to "2"
Then product 2 quantity should be "2"
When user removes product 1 from the cart
Then amount of cart items should be 1
When user clicks `Proceed to checkout` button
Then `Authentication page` should be opened