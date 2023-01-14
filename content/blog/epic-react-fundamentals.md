---
external: false
title: "01-Fundamentals EpicReact.dev Course by Kent C. Dodds"
description: "You can author content using the familiar markdown syntax you already know. All basic markdown syntax is supported."
date: 2020-12-16
---

# What is it about?

This first Course is all about the basics of React. How does the React API work, how can add elements to the DOM, how does the basic React API looks like and so on. This post will be divided into two parts. The first part consists of a list with all Questions that you should try to solve and answer by yourself. In the second part I'll give you my solution to those question. Try to work through the code and read the links I put into solution to deepen your understanding.

# Questions

1. What is React? Why would we use it over Vanilla-js.
2. Add a h1 with the text 'hello-world' to the DOM with javascript only
3. Add a class name to the h1 tag
4. What is the difference between React and ReactDOM
5. Rewrite the prior example, using the React API
6. Describe the three parameter of the React.createElement function
7. How can we nest Elements inside a div using React.createElement
8. What is JSX - What part plays the Babel Library
9. Rewrite the prior example, using the JSX Syntax
10. How can we use javascript inside JSX. How can we spread props to the JSX element
11. Why does React Components start with a Uppercase Letter?
12. Write a Message Component that takes a message prop and displays it
13. Describe how we can style our React Components
14. Refactor the Message Component, so that it accept a color prop, that will be applied to the message text.
15. What is the difference between a controlled and an uncontrolled Component
16. How to prevent the default behaviour when submitting a form
17. How to access the value of an uncontrolled input - when handling submitting a form. (3 Ways)
18. Why do we use htmlFor in a input label
19. Write a custom Form Component that asks for a username and alerts username: {username} when it gets submitted
20. Rewrite the Form Component to make use of the useRef Hook
21. Rewrite the Form Component to be a controlled Form
22. What happens if you only set the value prop of an input field without setting the onChange prop - Try it!
23. How to render the following list to the DOM using jsx ['milk', 'apple', 'salad']
24. Why do we need a key prop when rendering a dynamic list using Array.map. What Warning do we get in the console at the previous solution?

---

### So there you have it. Before you go on and check out the solutions to those questions i strongly encourage you to solve them by yourself. If you dont know the answer try googling first.

---

## Solutions

### Solution #1 What is React? Why would we use it over Vanilla-js.

> React is a JavaScript library for building user interfaces. It uses a declarative, component-based paradigm and aims to be both efficient and flexible. React is a javascript library for building user interfaces.

### Solution #2 Add a div h1 with the text 'hello-world' to the DOM with javascript only

```html
<body>
  <div id="app"></div>
  <script type="module">
    const root = document.getElementById("app"); //1
    const newElement = document.createElement("h1"); //2
    newElement.textContent = "hello world"; //3
    root.append(newElement); //4
  </script>
</body>
```

1. get the root element
2. create the element
3. set the textContent
4. append the newly created element to the DOM

### Solution #3 How do you add a class to the H1 Element

- Add the following to the code above. Before appending it to the root.

```js
newDiv.classList = "my-class";
```

### Solution #4 What is the difference between React and ReactDOM

- React - is responsible for creating the elements with React.createElement
- ReactDOM - is responsible rendering the created Elements to the page - in case of the web to the DOM with the render method

The seperation of those two allows React to run also in VR and in Native Applications

#### Links:

- https://reactjs.org/docs/react-api.html
- https://reactjs.org/docs/react-dom.html

### Solution #5 Rewrite the prior example, using the React API

- To accomplish this we first need to get access to the React and ReactDOM API
- We can do this by putting the following script tags inside the header of the HTML File

```html
<script src="https://unpkg.com/react@17.0.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js"></script>
```

Now we can access React and ReactDOM.

```html
<body>
  <div id="app"></div>
  <script>
    const root = document.getElementById("app");
    const newElement = React.createElement("h1", {
      //1
      children: "hi",
      className: "my-class",
    });
    ReactDOM.render(newElement, root); //2
  </script>
</body>
```

1. To create HTML Elements we can call the Function React.createElement
2. To render the new Element, we call ReactDOM.render

### Solution #6. Describe the three parameter of the React.createElement Function

1. The First Argument is the type of the element that should be created - like 'div' or 'h1'
2. The second Argument is an object of props that we can apply to the Element - like 'children' or 'id'
3. The third are the children's. We can choose if want to pass the children as a prop as the second argument or to pass it here. There is no difference.

### Solution #7. How can we nest Elements inside a div using React.createElement

- We can pass an array of React.createElement to the children prop
- or an array of strings as the children prop

like the following:

```js
const newElement = React.createElement("h1", {
  children: [
    React.createElement("span", null, "Hello"),
    " ",
    React.createElement("span", null, "World"),
  ],
  className: "my-class",
});
```

or this:

```js
const newElement = React.createElement("h1", {
  children: ["hello", " ", "world"],
  className: "my-class",
});
```

### Solution #8. What is JSX - What part plays the Babel Library

- JSX is syntactic sugar
- JSX has a HTML similiar syntax
- JSX helps to write React code
- JSX allows us to combine HTML Elements with Javscript code
- JSX will be compiled (transformed) by the Babel Compiler to regular React.createElement calls

#### Links

- JSX - https://reactjs.org/docs/introducing-jsx.html
- Babel has a playground where you can see to what the JSX is compiled to. see https://babeljs.io/repl

### Solution #9. Create the h1 tag with the text hello world and the class 'my-class' using jsx

- To use JSX we need to add script tag with a link to the source of the babel compiler to our HTML file.

```html
<body>
  <div id="app"></div>
  <script src="https://unpkg.com/@babel/standalone@7.12.4/babel.js"></script>
  <script src="https://unpkg.com/react@17.0.0/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js"></script>

  <script type="text/babel">
    const root = document.getElementById("app");

    const element = <div className="my-class">hello world</div>; // 1

    ReactDOM.render(element, document.getElementById("app"));
  </script>
</body>
```

1. Now we can use almost normal HTML Syntax to create new Elements. One difference, to normal HTML Syntax is the usage of className instead of class, since class is a reserved word in js.

### Solution #10. How can we use javascript inside JSX. How can we spread props to the jsx element.

- To use javascript, we need to wrap it inside curly braces - {}
- You can only put valid Javascript Expressions inside the curly braces
- You cant use any kind of declarations like: var x = 1;
- To spread, we can use the spread operator inside the curly braces

Example 1: JS inside JSX

```jsx
const myClass = "my-class";
const newElement = <h1 className={myClass}>hello world</h1>;
```

Example 2: Spread the Props

```jsx
const myClass = "my-class";
const children = "hello world";
const props = { className: myClass, children: children };
const newElement = <h1 {...props}></h1>;
```

### Solution #11. Why does React Components start with a Uppercase Letter?

- Components that start with a lower-case letter, are considered html tags
- For a Component to be considered a React Component, it has to fulfill one of the following criteria
  - Start with a Uppercase letter - e.g Message
  - be a lower case name with a dot (property accessor) - e.g. obj.message

### Solution #12. Write a Message Component that takes a message prop and displays it

```js
const Message = (props) => {
  return <h1>{props.message}</h1>; //1
};

const root = document.getElementById("app");
ReactDOM.render(<Message message={"hello world"} />, root); //2
```

1. A React Component is a Function that returns JSX
2. Such a Function can be written as a regular Function or as an arrow Function
3. It receives an object (usually called props) which contains all props that we pass it directly, like I did here, or that gets passed by Providers (as we'll learn in future)
4. We can use desctructuring to access the message prop directly like this:

```js
const Message = ({ message }) => {
  return <h1>{props.message}</h1>; //1
};
```

### Solution #13. Describe how we can style our React Components

- We can use styling by either using a stylesheet and add classes and ids to the element like we do in regular HTML
- We also can add inline styles to our elements by adding an object with the styles to the style prop of the HTML Element like this:

  ```js
  const Message = ({ message }) => {
    return <h1 style={{ color: "red" }}>{message}</h1>; //1
  };
  ```

1. We need to remeber to add double curly braces!
   - one for the object itself
   - and one for telling JSX that we using Javascript
   - The style parameter must be all be written as one word
     - background-color -> backgroundColor
     - font-size -> fontSize
     - ...

### Solution #14. Refactor the Message Component, so that it accept a color prop, that will be applied to the message text.

```js
const Message = ({ message, color }) => {
  //1
  return <h1 style={{ color }}>{message}</h1>; //2
};

const root = document.getElementById("app");
ReactDOM.render(<Message color="red" message={"hello world"} />, root); //3
```

1. We now accept 2 props: color and message (using destructuring)
2. Instead of passing {color: 'red'} - we use the color prop and use the es6 feature Object Property Value Shorthand to say {color} instead of {color: color}
3. We pass a color prop to the Message Component with the value 'red'

#### Links

- About Components and Props: https://reactjs.org/docs/components-and-props.html
- About object-property=shortand: https://alligator.io/js/object-property-shorthand-es6/

### Solution #15. What is the difference between a controlled and an uncontrolled Component

- Controlled Components: The Browser is responsible for managing the state of the Component
- Uncontrolled: The user of the Component (the programmer) is responsible for the state of the Component

Example: You are using a form with plain HTML. You enter the value in the form and press the button to submit.
You do not need care about how to set the value of the form. The Browser does it for you (Uncontrolled). But imagine, you want to check every letter before setting the value of the username. Now, you have to be the one who manages the state, so that you can run some validation functions that check whether the letter the user types was valid (e.g user types 1 but you only accepts letters from a-z) (Controlled)

#### Links

- Blog Post https://stackoverflow.com/questions/42522515/what-are-react-controlled-components-and-uncontrolled-components

### Solution #16. How to prevent the default behaviour when submitting a form.

- When you click the submit button of a form, you will see that the page refreshes.
- This happens because the default behaviour of a traditional form it to make a post request when we click the submit button.
- To stop this behaviour we have to call the preventDefault function on the event object that we get from the onSubmit handler

### Solution #17. How to access the value of an uncontrolled input - when handling the submitting of a form

- There a three ways two access the value of an uncontrolled input
  1. using React.useRef
  2. using event.target.elements.usernameInput.value
  3. using event.target.elements[0].value

1. See Solution 20 for an example.
2. When using this appraoch we need to add an id prop to the input element (in this case usernameInput).
3. We can also access the value of the input using indexing on the elements array. But we should always prefer accessing it, using an id. When using the index of the array, it can easily lead to errors (e.g. we switch the order of the form input elements)

### Solution #18. Why use htmlFor in a input label

- screen readers need those for identififcation
- allow to focus the input field when pressing the label
- allow for better accessibility - e.g. when testing the component

### Solution #19. Write a Custom Form Component that asks for a username and alerts with username: {username} when it gets submitted

- In this example we firstly using a javascript file to render our react components, instead of writing inline javascript inside a html file

```js
function UsernameForm() {
  //1

  function handleSubmit(event) {
    //2
    event.preventDefault(); //3
    const username = event.target.elements.username.value; //4
    alert(`username: ${username}`); //5
  }

  return (
    <form onSubmit={handleSubmit}>
      {" "}
      //6
      <div>
        <label htmlFor="username">Username:</label> //7
        <input id="username" type="text" /> //8
      </div>
      <button type="submit">Submit</button> //9
    </form>
  );
}

function App() {
  return <UsernameForm />; //10
}
```

1. UsernameForm is our custom component that renders the form
2. handleSubmit is our function that handles the event that is triggered when the submit button is clicked
3. We need to prevent the browser from trying to make a post request
4. We access the form input value by its id - username
5. we call the alert function with our username
6. onSubmit - we call our onSubmit handler - handleSubmit
7. We are using a label with the htmlFor prop (in regular html, its called just for)
8. The input has an id of username, so that we can access its value later
9. We have a button with the type 'submit' that triggers our onSubmit event
10. In our App Component, we render the UsernameForm without any arguments

#### Links:

- Full Solution: https://codesandbox.io/s/react-fundamentals-basic-form-dg7qo?file=/src/App.js

### Solution #20. Rewrite the Form Component to make use of the useRef Hook

- For this solution we are using the useRef Hook
- We'll cover it in more depth in the third workshop - Advanced React Hooks
- useRef returns a object with a current property
- We can assign this object to any html element ref property -> This will assign its value to the current property
- See Solution below:

```js
function UsernameFormUncontrolledUseRef() {
  const inputRef = React.useRef(); //1

  function handleSubmit(event) {
    event.preventDefault();
    const username = inputRef.current.value; //2
    alert(`username: ${username}`);
  }

  return (
    <>
      <h2>I am Uncontrolled - useRef</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usernameInput">Username:</label>
          <input ref={inputRef} id="username" type="text" /> //3
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
```

1. We are calling the useRef from React and return a object with the current property that we call inputRef
2. when handling the submit we can get the username from inputRef.current.value
3. We assign the inputRef to the ref of the username input element
   1. This will assign the inputRef.current to the input element

#### Links

- React.useRef: https://reactjs.org/docs/hooks-reference.html#useref
- Full Solution: https://codesandbox.io/s/react-fundamentals-basic-form-dg7qo?file=/src/App.js

### Solution #21. Rewrite the Form Component to be a Controlled Form

- In this Solution we want the Form to be Controlled
- We are controlling and setting the state of the form
- we can do this by adding the following two props to the input element
  - value prop - sets the value of the input field
  - onChange prop - is called whenever the user types something inside the input field

```js
function UsernameFormControlled() {
  const [username, setUsername] = React.useState(""); //1

  function handleSubmit(event) {
    event.preventDefault();
    alert(`username: ${username}`);
  }

  const handleInputChange = (event) => {
    //2
    setUsername(event.target.value); //3
  };

  return (
    <>
      <h2>I Controlled</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usernameInput">Username:</label>
          <input
            value={username} //4
            onChange={handleInputChange} //5
            id="username"
            type="text"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
```

1. We are using the React.useState hook to save the state of the username
   1. This hook returns an array with two elements
      1. the current state - we call it username
      2. a function to update the state - we call it setUsername
2. We define a function - handleInputChange - that is called whenever a change to the input element happens
3. We getting the current value from the input field from - event.target.value. Further, we call the updater function - setUsername - to update the username
4. We set the value of the field to the username
5. We set the onChange prop to the function - handleInputChange

#### Links

- React.useState: https://reactjs.org/docs/hooks-reference.html#usestate
- Full Solution: https://codesandbox.io/s/react-fundamentals-basic-form-dg7qo?file=/src/App.js

### Solution #22. What happens if you only set the value prop of an input field without setting the onChange prop - Try it

- You will get the following Warning:
  > Warning: You provided a `value` prop to a form field without an `onChange` handler.
- The reason for this is that we tell the Browser that we are responsible for the state of the input field - by setting the value prop
- But because we did not set a onChange prop of the input field - there is no way that the input field can change its value state. The user cannot type anything inside the input field!
- So if we want to have a controlled input we have to set BOTH props of the input

### Solution #23. How to render the following list to the DOM using jsx ['milk', 'apple', 'salad']

```js
const MY_SHOPPING_LIST = ["milk", "apple", "salad"]; //1
export default function App() {
  return (
    <div className="App">
      <h1>React Fundamenals - Arrays</h1>
      <ul>
        {MY_SHOPPING_LIST.map(
          (
            item //2
          ) => (
            <li>{item}</li>
          )
        )}
      </ul>
    </div>
  );
}
```

1. We define our list - MY_SHOPPING_LIST
2. We map over the list and return a <li> element for each item

### Solution #24. Why do we need a key prop when rendering a dynamic list using Array.map. What Warning do we get in the console at the previous solution?

- We get the following warning:
  > Warning: Each child in a list should have a unique "key" prop.
- So we have to pass a key prop to our <li> element
- When upating / deleting a item of an array, React only knows that something inside the array has changed, and therefore rerenders the component. However, React does not exactly know which of the item in the array has been updated / deleted. With the key Prop, React understands those changes and therefore works how to update the DOM.
- Also React knows that it needs to only rerender the updated item, and not the whole list -> Perfomance is better
- We should not use the index as key. Using the index is the default behaviour and will only silence the warning, but does not solve the problems stated before. A good id in out case is the item itself.
  - However if we have duplicates in our list, we can't use the items anymore.
  - Normally, we should something like the id for the key prop

---

So that's all for this Workshop. I hope you have enjoyed to work through the questions and that you picked up some new information. The next workshop will be React Hooks where we work through the basic hooks such as useState and useEffect and learn more about state management in React in general. The content will become more complex and advanced with each Workshop we'll do.

_All this material is based on the epicReact.dev Course by Kent. C. Dodds, which I can highly recommend to do. It taught me a lot even though I have been programming in React for 2 years. See my post where I review the whole course. https://dev.to/jannikwienecke/intro-epicreact-dev-review-3pe6 ._

The next workshop will be available within the next 10 days. So stay tuned.

And if you have any questions, recommendations or corrections, please feel free to leave a comment.

Happy Coding to Everyone :)
