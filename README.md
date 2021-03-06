# ATSeedWorld

## Background
[ATSeedWorld](https://atseedworld.herokuapp.com/#/) is the site where the customers can purchase seeds. The customer can add seed to the cart, edit and delete the items in their cart. The customer can also review and rate the seeds. They also can search for the seeds they want to purchase. The customer can login, create account and also there is a demo user button that allows the customer to access functions such as reviewing, rating the products and adding, editing or deleting the items in the bucket without having to login or create account. 

## Technologies

🥬 Ruby on Rails

🥬 React/Redux

🥬 PostgreSQL - Database

🥬 JavaScript/AJAX/JBuilder

🥬 HTML/CSS

🥬 AWS / AMAZON S3-Image Storage

## Features

* ### The Home Page

The home page shows all the listings for the seed that the user can purchase. There is add to cart button below each listing and the user wont be able to add items to cart unless they are logged in. Ones the user is logged in and clicks on add to cart button, it will take the user to basket page. If the user clicks on the image on the homepage, it will take the user to the show page of the listing. The home page also shows average review for each listing below the listing image. 

![Home Page](app/assets/images/home.png)
 
* ### User account create and login

User is able to create account, login and login as demo user.

![Login](app/assets/images/login.gif)

* ### Listing Show Page

On show page, there is picture of the product and information about the product. Here the logged-in user can add items to cart and review the items. The reviewer can delete their own review. The review form is in bottom of the show page but there is a links (Add your review and write review button)that will take user to review form ones clicked.   


* ### Review and Rate the products

![Review](app/assets/images/review.gif)


* ### Add items to the basket

Ones the item is added to basket, the number next to the basket in navbar increases to indicate number of items in the basket. In the basket page, you can update the basket and delete the items in the basket. There is also the summary that show the total cost of the items. 

![Basket](app/assets/images/basket.gif)


* ### Search for items via search bar

Ones the user starts typing on the search bar, the drop down menu will show the possible options. If the user clicks on one of the option from the drop down menu, it will take them to the listing show page.  

![Search](app/assets/images/search.gif)

* ### Please check out the app for additional functionality.

#Future Features
* Mobile-friendly - make the website responsive for small screen sizes and for mobile
* Possibly add the filter the function so it can filter the data based on price


# Lesson Learned
## Time management 
* I learned to stick with schedule and follow through the time line. Although it took long time to plan everything out, it helped me keep myself in track and forced me to completely focus on one functionality at a time. It is extremely important to follow through your plans especially if you have limited time to work on the project. 

## Search Bar
* Sometimes although you are passing same component to different pages, it might lose some functionality so it is important to test out the functionality in each page. I had same search bar component in the show page and the home page but it was not clearing out the input field when the search bar was used in the show page. As a solution, I created a function to clear out the input which is implemented ones the user clicks on the items in the drop down menu. 

 











