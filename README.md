# EAT-DA_BURGER
CRUD operations using Express-Handlebars-ORM-MySQL and hosted on Heroku

## ABOUT ##
-----
In this assignment, I created a hamburger logger with MySQL, Node, Express, Handlebars and a homemade ORM. The frameworked used was a Model View Controller(MVC) design pattern; usingin Node and MySQL to query and route data in the Burger app, while using Handlebars to generate the HTML. The final step was to use Heroku to deploy the application. 


## FUNCTIONALITY ##
--------------

* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, the EAT-DA-BURGER  app will display the burger name on the left side of the page -- waiting to be devoured. Pressing the button named "Devour" to the right of individual burgers, "devours" that burger. 

* When the user clicks the "Devour" button, the burger will move to the right side of the page.

* The application will store every burger submited, into the MySQL database, whether devoured or not.


## DESIGN ##
-----------
The application listens to port 8000 for an incoming connection. Therefore to run the application, first execute the application by typing "node server.js"  to run the server application, and then type "localhost:8000" in the browers window. (The listening port of the application can be changed in line 23 of server.js). A MySQL instance is also required to be running in order to store the newly created hamburgers as well as interacting with the application. 

The user primarily interacts with the html produced by the index.handlebars file. This file is constantly being updated by the database as the user creates new burgers and devours existing burgers. 

The application is designed in such a way that the user is "routed" to specific webpages in order to accomplish certain actions:
* Routes are contained in the file "routes.js".  
* User starts at the home page which is "localhost:8000". Being directed to the homepage invokes a call to the database (using routes.js and orm.js) to return all burger data , either devoured or not. The returned data is used to populate the main homepage (index.handlebars). 
* The user enters a new burger name they would like to eat in the input text box,  and presses the "Submit" button. This action causes a PUT request into the database which creates the new burger in the database with an initial state of false(i.e. not-devoured). 
* The user devours a burger by pressing the "Devour" button to the right of the burger they wish to devour. The burger ID is passed back to the database using the UPDATE route. The database then sets the Devoured flag to true. If successful, the user is redirected back to the home page at which point the database is queried again for status on all the burgers. 
* The style.css file is responsible for styling a few of the buttons and layout of the html used in index.handlebars file. 
* The mySQL database named burger_DB contains a single table named burgers, whose columns are ID(PK), burger_name(CHAR), devoured(BOOLEAN). devoured if TRUE(1) means the burger has been devoured else its FALSE(0) meaning undevoured.


## USER INTERFACE ##
-------------------

 ![Intial Eat Da Burger UI](/public/initialScreen.png)

Initial screen - No burgers entered in the database so we are going to create a Ham and Cheese burger, as well as a few more burgers.


 ![Enter First Burger](/public/enterFirstBurger.png)
Entering our first burger- Ham and Cheese by typing the name of the burger in the input box and pressing Submit button.

 ![Going To Devour](/public/goingToDevour.png)
Several burgers have been entered and ready to devoured,  we are going to choose Ham and Cheese to be devoured by pressing the Devour It! button to it's right. 


 ![Ham and Cheese Devoured](/public/hamAndCheeseDevoured.png)
 Ham and Cheese devoured after pressing Devour It!

FYI
---

Here are additional documentation links to technologies used in this application

* [Heroku’s Account Verification Information](https://devcenter.heroku.com/articles/account-verification) for more details

* [Axios](https://www.npmjs.com/package/axios)
*  Axios is used to grab data from the [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)
* [Postman](https://www.getpostman.com/)
* [Codeschool's Express Course](https://www.codeschool.com/courses/building-blocks-of-express-js).
* [Stack Overflow Ports Explanation](http://stackoverflow.com/questions/10182798/why-are-ports-below-1024-privileged)
* [Heroku Deployment Guide for MySQL Projects](./Supplemental/MySQLHerokuDeploymentProcess.pdf)
* [Understand JavaScript Callbacks](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)
* [Handlebars Website](http://handlebarsjs.com/)
* [Express](http://expressjs.com/)





