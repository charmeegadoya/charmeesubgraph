A JavaScript Library is a pre-written JavaScript file with some extremely useful code-snippets, objects, and functions so that we can reuse the functions, objects, and code-snippets to perform a common task. ReactJS itself is an example of a JavaScript library. But the file structure and coding syntax are a little bit different in ReactJS than in normal vanilla JavaScript. So in this article, we are going to learn how to add an external JavaScript library to a ReactJS Project.

We are going to create a react application and include an external JavaScript library to ReactJS in three approaches. These are:



Using react-script-tag Package.
Using react-helmet Package.
Using JavaScript DOM Methods.
Creating React Application:

Step 1: Create a React application using the following command inside your terminal or command prompt:

npx create-react-app name_of_the_app
 

Step 2: After creating the react application move to the directory as per your app name using the following command:

cd name_of_the_app
Project Structure: Our project structure will look like this.



Now modify the default App.js file inside your source code directory according to any of the following approaches. 

Approach 1:  Using react-script-tag Package

This is the first method and the method with the least complexity as well. The react-script-tag is a package that comes up with a <script> tag that supports universal rendering. With the help of this library, we can directly append the <script> tag to our document. And inside the ‘src’ attribute of the script tag, we can include the URL of the external JavaScript library. 

Installation: Open a terminal inside your ReactJS project folder and write the following code to install react-script-tag Package.

npm install --save react-script-tag
 

Import ‘ScriptTag’ component: Import the built-in ‘ScriptTag’ component from the react-script-tag library at the top of the file where we want to add the script tag.

import ScriptTag from 'react-script-tag';
Call the <ScriptTag> component inside our App.js

Now call the <ScriptTag> component inside our App component. This is a self-closing JSX component.
Now parse the URL of our desired library with the help of ‘src’ attribute.
The hydrating attribute takes a boolean input. Make it true if the client is hydrating the server render. The default value is false.
import React from 'react';
import './App.css';
import ScriptTag from 'react-script-tag';
  
function App() {
  
  return (
    <div className='App'>
      <h1>Geeksforgeeks : How to include an external 
      JavaScript library to ReactJS?</h1>
      <ScriptTag isHydrating={true} type="text/javascript" 
      src=
"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" />
    </div>
  );
}
  
export default App;
Run the Application: Open the terminal and write the following command in your terminal.

npm start
Output: Inspect the output to check that our library is properly added or not.



Approach  2: Using react-helmet Package

The react-helmet is also a well-known npm package mostly used for adding an element at the head of a react document. We can add a script tag inside the head of the document using this package. Parsing the CDN of the library as a source of the script tag will eventually add this script to our document.

Installation: Open the terminal inside your ReactJS project folder and write the following code to install react-helmet Package.

npm install --save react-helmet
 

Import ‘Helmet’ component: Import the ‘Helmet’ component from react-helmet package at the top of the source code file.

import {Helmet} from "react-helmet";
Call the <Helmet> component inside our App.js file:

Helmet is a non-self closing component. It is basically used to add HTML code inside the <head> of the document. It takes the HTML tags which are desired to remain inside <head> and outputs them.
The Helmet package supports both server-side and client-side rendering.
Call this component inside our JSX component named ‘App’ and create a basic HTML <script> tag inside it. Into the <script> tag add the URL of the jQuery library with the ‘src’ attribute.
import React from 'react';
import './App.css';
import {Helmet} from "react-helmet";
  
function App() {
  
  return (
    <div className='App'>
    <h1>Geeksforgeeks : How to include an external 
    JavaScript library to ReactJS?</h1>
    <Helmet>
    <script src=
"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" 
    type="text/javascript" />
    </Helmet>
    </div>
  );
}
  
export default App;
Run the application: Open the terminal and write the following command in your terminal.

npm start
Output: Inspect the output to check that our library is properly added or not.



Approach 3: Using JavaScript DOM Methods

Installing that many packages can make our application heavy and slow as well. So using JavaScript DOM methods is best. We have no need to install any external packages in this method. The steps of this method are:

Create the function:

Create a function that takes the URL of the desired library as a parameter.
Using the document.createElement method creates an empty script tag.
Set its ‘src‘ attribute as the parsed URL of our library.
Set ‘async‘ as true, so that allows the program to be executed immediately where the synchronous code will block further execution of the remaining code until it finishes the current one.
Append the created script tag using document.body.appendChild method.
Export the function and call it whenever we want to add a custom library in our JSX code.
Call the function: Call the function inside the App component enclosing it inside curly brackets. Pass the URL of our desired library as a string.

import React from 'react';
import './App.css';
  
// Create the function
export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement('script');
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}
  
function App() {
  return (
    <div className="App">
      <h1>Geeksforgeeks : How to include an external 
      JavaScript library to ReactJS?</h1>
  
  {/* Call the function to add a library */}
  {AddLibrary(
  'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')}
    </div>
  );
}
  
export default App;
Run the Application: Open the terminal and write the following command in your terminal.

npm start
Output: Inspect the output to check that our library is properly added or not