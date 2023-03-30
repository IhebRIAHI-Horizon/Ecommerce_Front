# Ecommerce Project

This full-stack ecommerce application was developed by Iheb Riahi using Angular and Spring Boot.
Although some features are not yet implemented or fully functional, the application serves as a small project completed as part of the Angular curriculum at Horizon School University.

## Ecommerce_Front
This Github repository hosts the frontend code for my 'Ecommerce Project', which was built using Angular 13.1.3 and authored by Iheb Riahi.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- Angular CLI (13.1.3)

### Installing

1. Clone the repository to your local machine

    $ git clone https://github.com/IhebRIAHI-Horizon/Ecommerce_Front.git


2. Navigate to the frontend directory and install the required packages

    $ npm i (or 'npm install')

    If you have an error "npm ERR! code ERESOLVE", use this command instead:

    $ npm i --force

3. Start the frontend server

    $ ng s (or 'ng serve')

The application should now be running on http://localhost:4200

Admin credentials : email: admin@admin.com / pwd : Admin

## Overview

### Features

1. Home Page: Displaying new added products (last 6/ last 15)
2. Products: List products by gender, men or women, pageable with fixed size 6
3. Cart: Add , edit quantity and delete products from the cart.
4. Admin Dashboard: Charts(static for now), Edit products page: CRUD operations
5. Login page: Admins only can login for now

Minor features: scroll to top, navbar, sidebar, snackbar, products list dynamically refresh after isertion/deletion/update

### Notes

1. If you run the frontend on a different port instead of 4200,
you need to change the ' allowedOrigins("http://localhost:4200") ' in WebConfig.java

## Contributing

Feel free to submit pull requests and open issues for any bugs or feature requests.

## Contact

LinkedIn : https://www.linkedin.com/in/ihebriahi
