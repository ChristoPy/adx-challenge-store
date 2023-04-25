# Mini E-Commerce System Store

This project is a small e-commerce system with a store front-end where visitors can view products and add them to a shopping cart.  
The store is developed using the Vue.js and Nuxt frameworks.

And can be found here: [adx-challenge-store.vercel.app/](adx-challenge-store.vercel.app/).

## Installation

1. Clone the repository
2. Install dependencies using `npm install`
3. Run the API server using `npm start`
4. Start the server using `npm run dev`

## Features

The store allows visitors to view the products in a side-by-side grid, displaying information such as name, price, and image. The following features are available:

### Products

#### View all products

View a list of all products in the system, with information such as name, price, and image.

#### Add a product to the cart

Add a product to the shopping cart by clicking the "Add to cart" button on the product card.

### Shopping Cart

#### View the shopping cart

View the contents of the shopping cart by clicking the "Cart" button in the top right corner of the page.

#### Adjust the quantity of items in the cart

Adjust the quantity of items in the shopping cart by clicking the "-" button or the "+" button on the item listed on Shopping Cart.

#### Remove a product from the cart

Remove a product from the shopping cart by clicking the "-" until the quantity reaches zero.

#### Persistency

The shopping cart is persisted in the browser's local storage, so it will be available even if the user closes the browser.
