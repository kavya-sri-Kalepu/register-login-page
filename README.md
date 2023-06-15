# register-login-page
# React Registration and Login Application
This is a React application that provides a user registration and login system. Users can register with their email, name, and password, and then log in using their email and password. The application utilizes Redux for state management and React Router for routing.

# Features
Registration Page: The application provides a registration page where users can enter their email, name, and password. Upon clicking the "Register" button, the entered data is stored in the Redux Store.

# Login Page: 
The login page allows users to enter their email and password. Upon clicking the "Login" button, the entered values are validated against the data stored in the Redux Store.

# Home Page: 
After a successful login, users are redirected to the home page. The home page displays a table that showcases the details of the user's login information. The data is fetched from the Redux Store.

# Logout Functionality:
The home page includes a logout button. Clicking the logout button removes the user's data from the Redux Store and redirects them back to the login page.

# Installation
Clone the repository or download the source code:
shell
Copy code
git clone (https://github.com/kavya-sri-Kalepu/register-login-page.git)
Install the dependencies using npm or Yarn:
shell
Copy code
npm install
or

# shell
Copy code
yarn install
Usage
Start the development server:
shell
Copy code
npm start
or

# shell
Copy code
yarn start
Open your web browser and navigate to http://localhost:3000 to access the application.
Folder Structure
The project structure is organized as follows:

src: Contains the source code of the application.
components: Contains the React components.
actions: Contains the Redux actions.
reducers: Contains the Redux reducers.
App.js: The main entry point of the application.
public: Contains the public files for the application.
Dependencies
The main dependencies used in this project are:

React
React Router DOM
Redux
React Redux
React Bootstrap
For a complete list of dependencies, please refer to the package.json file.

Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, please feel free to open an issue or submit a pull request.
