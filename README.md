# projectfinal

## Project Title: E-commerce website (ShopMore)

### Description:
  This poject is about an e-commerce website. The project contains front-end, back-end and database. It contains logout,signout,home,products and cart pages. As soon as the user trys using the website the user must signin if the user is new to website else login directly. When a user gives incorrect username a page with user does not exist will be shown also if the password is incorrect then a page with incorrect password opens. The user will be able land onto a home page which contains products, cart, logout and signout. The user will be able to shop under products page, the user can add more produts as well. The user will be able to see the products from cart page. The total price will be shown according to the number of products added. 
  
 ### Pages available :
 - home page
 - products page
 - shop page
 - cart
 - signout
 - logout
 
 * Register page: The user must register by giving user's firstname, lastname, email, password, dob. Since the user is new, the user needs to register by giving the required feilds.
 
 ![Screenshot (1)](https://user-images.githubusercontent.com/63916238/168935343-e4f1d312-28c7-4561-8240-f313a4d5a43d.png)
     
  * Login page: The user will have to login into the page by giving valid credentails according to the registration details. 
  
 ![Screenshot (2)](https://user-images.githubusercontent.com/63916238/168936108-dc692e56-69d2-4649-8e11-0cecaa5257dd.png)

* Home page: After the user logins into the page, the homepage appears. This page contains all the other pages like products, cart, logout and signout. Basically the view of whole website.

![Screenshot (3)](https://user-images.githubusercontent.com/63916238/168936680-11a40075-797a-4df3-93cd-6e02d1c0fea0.png)

* Products page: This page displays the products available on the e-commerce website. The user can add products. We can see the total price according to the number of products added.

![Screenshot (4)](https://user-images.githubusercontent.com/63916238/168937186-3c8530a8-f661-4703-ba6f-2a3a85bcfe02.png)

* Cart page: This page contains all the products selected by the user.The user can delete any products if needed.

![Screenshot (5)](https://user-images.githubusercontent.com/63916238/168937510-7b89bf38-7d51-4bb0-9d4f-3fb9535a4db2.png)

#### Error pages:
    - User does not exist: When the user signouts from the website and later uses to login with the same credentails, a page with "user does not exists" opensup.

![Screenshot (7)](https://user-images.githubusercontent.com/63916238/168938205-53c64a3b-b6a1-4c5f-9583-dd1dee160795.png)


    - Password incorrect: When user enters wrong password, a page with "incorrect password" opensup.
![Screenshot (6)](https://user-images.githubusercontent.com/63916238/168938180-6ae8f455-d580-4fe9-8c81-93f87134d802.png)
- - -
 ### Technologies used:
 #### - Front-end:
 - HTML
 - CSS
 - Javascript
 #### - Back-end and database:
 - Node.js
 - Mysql
- - -
### ERD:

![Screenshot (17)](https://user-images.githubusercontent.com/63916238/168943198-3c3a009c-e6d9-49d8-ab71-70134b081da7.png)
    
#### Brief description:
##### User: 
The user entity contains user_id as a primary key, where the details of user are included.
##### Product: 
This entity contains Product_id as primary key and user_id is foreign key.The product id,name and quatity can be included in this.
##### Cart:
This entity contains Cart_id as primary key and Product_id is foreign key. The cart entity contains the cart details like the number of products added and the amount to be paid, using cart_id, product_id, and cart_quantity and cart_total.
#### Checkout: 
This entity contains Checkout_id as primary key and user_id as primary key.The payment can be proceed according to the number of products added into cart.
- - -
### Issues or bug:
Currently there is no payment page or checkout tab which leaves my project incomplete as of now.
- - -
### Executing the project:
 After downloading the project, open the terminal and give the command npm run dev. If everything goes perfect the server gets started at the port. Then open chrome and open localhost:3000 where 3000 is the server port.
- - -
 ### Future enchancements:
 This project can be futher proceeded by completing the checkout page. After the products are added into cart the users should be navigated into the payments tab where the complete payment can be done. Later tracking the order and return product pages can be added.








 
