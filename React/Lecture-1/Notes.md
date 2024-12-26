# Lecture-1 :<i> `Inception`

<!-- Coding , notes and Assignment -->

## <i>Coding:

<!-- Requirement -->
<details>
<summary><b> Requirements </b></summary>

- VS Code Editor
- Google Chrome
- Google Chrome Extensions

</details>

<!-- Creating Hello World page  using HTML -->
<details>
 <summary><b> Creating Hello World page using HTML: </b></summary>

- Try to create a Html Hello Page :

#### HTML :

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Namaste React</title>
  </head>
  <body>
    <div id="root">
      <h1>Hello World!</h1>
    </div>
  </body>
</html>
```

</details>

<!-- Creating Hello World page  using Javascript DOM -->

<details> 
<summary><b> Creating Hello page with JavaScript DOM </b></summary>

- Try to create a JavaScript Hello Page using DOM :

#### HTML :

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Namaste React</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="./app.js"></script>
  </body>
</html>
```

#### app.js:

```javascript
const root = document.getElementById("root");
const header = document.createElement("h1");
header.innerHtml = "Hello World!";
root.appendChild(header);
```

</details>

<!-- Creating Hello page with React(Using CDN links) -->

<details>
<Summary><b> Creating Hello page with React(Using CDN links)</b></Summary>

- Try to create a React Hello Page using CDN Links :

#### CDN Links :

- [React](https://unpkg.com/react@18/umd/react.development.jsb)
- [React-DOM](https://unpkg.com/react-dom@18/umd/react-dom.development.js)

**Note:** Change the version number to latest one for new features to work

- For more info refer to [React](https://react.dev/)!

#### HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Namaste React</title>
  </head>
  <body>
    <h1>I am above</h1>
    <div id="root">
      <h1>I am already here!</h1>
    </div>
    <h1>I am below</h1>
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script src="./app.js"></script>
  </body>
</html>
```

#### app.js:

```javascript
const heading = React.createElement("h1", {}, "Hello World from React1 !");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```

</details>
<br><br>

## <i>Theory:

<!-- What is Emmet? -->
<details>
<summary><b>What is Emmet?</b></summary>
Ans):  

Emmet is a plugin for popular code editors like Visual Studio Code, Sublime Text, and Atom that helps developers write HTML and CSS code more quickly and efficiently. It allows you to use shorthand syntax to generate large chunks of code with just a few keystrokes. For example, typing `div.container>ul>li*5` and pressing the Emmet expansion key (usually Tab or Enter) will generate the following HTML:

```html
<div class="container">
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>
```
This can significantly speed up the coding process and reduce the likelihood of errors.

</details>


<!-- Difference between a library and framework? -->
<details>
<summary><b>Difference between a library and framework?</b></summary>
Ans):

- **Library**:

  - A library is a collection of pre-written code that developers can use to optimize tasks.
  - It provides specific functionality that you can call when needed.
  - You are in control of the flow of the application.
  - Example: react, jQuery, Lodash.

- **Framework**:
  - A framework is a comprehensive platform for building applications.
  - It provides a structure and dictates the architecture of your application.
  - The framework is in control and calls your code when needed.
  - Example: Angular, Vue.js.

</details>

<!-- What is CDN? Why do we use it? -->
<details>
<summary><b>What is CDN? Why do we use it?</b></summary>
Ans): 

- **CDN (Content Delivery Network)**:
  - A CDN is a network of distributed servers that deliver web content to users based on their geographic location.
  - It helps to reduce latency and improve the loading speed of websites by serving content from a server that is geographically closer to the user.

- **Why do we use it?**:
  - **Improved Performance**: By caching content closer to the end-users, CDNs reduce the distance data must travel, resulting in faster load times.
  - **Scalability**: CDNs can handle large amounts of traffic and distribute the load across multiple servers, preventing server overload.
  - **Reliability**: CDNs provide redundancy and failover options, ensuring content is always available even if one server goes down.
  - **Security**: CDNs offer security features such as DDoS protection and secure content delivery.

</details>

<!-- Why is React known as React? -->
<details>
<summary><b>Why is React known as React?</b></summary>
Ans): 

React is known as React because it is designed to create interactive user interfaces that "react" to changes in data. The name reflects the library's core concept of building UI components that automatically update and render efficiently in response to changes in application state. This reactive approach allows for a more dynamic and responsive user experience.

</details>

<!-- What is crossorigin in script tag? -->
<details>
<summary><b>What is crossorigin in script tag?</b></summary>
Ans): 

The `crossorigin` attribute in the `<script>` tag is used to handle the CORS (Cross-Origin Resource Sharing) settings for the script. It specifies how the script should be fetched when it is loaded from a different origin (domain) than the one serving the web page.

- **Values**:
  - `anonymous`: This value ensures that the browser does not send credentials (cookies, HTTP authentication, and client-side SSL certificates) with the request for the script.
  - `use-credentials`: This value ensures that the browser sends credentials with the request for the script.

- **Why do we use it?**:
  - To enable cross-origin requests for scripts while maintaining security.
  - To ensure that the browser handles the script's CORS policy correctly, especially when dealing with third-party scripts or CDNs.

Example:
```html
<script crossorigin="anonymous" src="https://example.com/script.js"></script>
```
</details>
<!-- What is the difference between React and ReactDOM? -->
<details>
<summary><b>What is the difference between React and ReactDOM?</b></summary>
Ans): 

- **React**:
  - React is a JavaScript library for building user interfaces.
  - It allows developers to create reusable UI components.
  - React is responsible for defining and managing the component lifecycle, state, and props.
  - It provides the core functionality for building and rendering components.

- **ReactDOM**:
  - ReactDOM is a package that provides DOM-specific methods.
  - It is used to render React components to the DOM.
  - ReactDOM handles the interaction between React components and the browser's DOM.
  - It provides methods like `ReactDOM.render()` and `ReactDOM.createRoot()`.

Example:
```javascript
// Using React to create a component
const element = React.createElement('h1', {}, 'Hello, world!');

// Using ReactDOM to render the component to the DOM
ReactDOM.render(element, document.getElementById('root'));
```
</details>

<!-- What is the difference between react.development.js and react.production.js files via CDN? -->
<details>
<summary><b>What is the difference between react.development.js and react.production.js files via CDN?</b></summary>
Ans): 

- **react.development.js**:
  - This is the development version of React.
  - It includes helpful warnings and error messages to aid in debugging.
  - It is not optimized for performance and is larger in size.
  - It is intended to be used during the development phase.

- **react.production.js**:
  - This is the production version of React.
  - It is optimized for performance and is smaller in size.
  - It does not include development-specific warnings and error messages.
  - It is intended to be used in the production environment where performance is critical.

Example usage:
```html
<!-- Development version -->
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>

<!-- Production version -->
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
```
</details>

<!-- What is async and defer? -->
<details>
<summary><b>What is async and defer?</b></summary>
Ans): 

- **async**:
  - The `async` attribute is used in the `<script>` tag to load the script asynchronously.
  - When a script is loaded with `async`, the browser will continue to parse the HTML while the script is being fetched.
  - Once the script is downloaded, it will be executed immediately, potentially interrupting the HTML parsing.
  - Suitable for scripts that do not depend on other scripts or the DOM.

- **defer**:
  - The `defer` attribute is used in the `<script>` tag to load the script asynchronously but ensures that the script is executed only after the HTML parsing is complete.
  - Scripts with `defer` are executed in the order they appear in the document.
  - Suitable for scripts that need to be executed after the DOM is fully parsed.

Example usage:
```html
<!-- Async script -->
<script src="https://example.com/script.js" async></script>

<!-- Defer script -->
<script src="https://example.com/script.js" defer></script>
```

### Note: 
video reference: [Akshay Saini](https://www.youtube.com/watch?v=IrHmpdORLu8)
</details>

## <i>Extra Notes: