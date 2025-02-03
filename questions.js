const javascriptQuestions = [
  {
    id: 1,
    question: "What will be the output of: typeof undefined?",
    options: [
      "undefined",
      "object",
      "null",
      "string"
    ],
    answer: "undefined",
    explanation: "typeof undefined returns the string 'undefined'"
  },
  {
    id: 2,
    question: "Which of these is a proper way to declare a variable in modern JavaScript?",
    options: [
      "variable x = 5",
      "var x = 5",
      "let x = 5",
      "int x = 5"
    ],
    answer: "let x = 5",
    explanation: "let is the modern way to declare variables in JavaScript, introduced in ES6"
  },
  {
    id: 3,
    question: "What is the result of '2' + 2?",
    options: [
      "4",
      "22",
      "NaN",
      "Error"
    ],
    answer: "22",
    explanation: "When using the + operator with a string, JavaScript performs string concatenation"
  },
  {
    id: 4,
    question: "Which method removes the last element from an array?",
    options: [
      "shift()",
      "unshift()",
      "pop()",
      "push()"
    ],
    answer: "pop()",
    explanation: "pop() removes and returns the last element of an array"
  },
  {
    id: 5,
    question: "What is the correct way to write a function in JavaScript?",
    options: [
      "function = myFunction()",
      "function myFunction()",
      "function:myFunction()",
      "function myFunction() {}"
    ],
    answer: "function myFunction() {}",
    explanation: "The correct syntax includes function keyword, name, parentheses, and curly braces"
  },
  {
    id: 6,
    question: "What is the result of Boolean('')?",
    options: [
      "true",
      "false",
      "undefined",
      "null"
    ],
    answer: "false",
    explanation: "An empty string is a falsy value in JavaScript"
  },
  {
    id: 7,
    question: "What is the correct way to check if a variable is an array?",
    options: [
      "typeof arr === 'array'",
      "arr.isArray()",
      "Array.isArray(arr)",
      "arr instanceof Array"
    ],
    answer: "Array.isArray(arr)",
    explanation: "Array.isArray() is the most reliable way to check if a value is an array"
  },
  {
    id: 8,
    question: "How do you add a comment in JavaScript?",
    options: [
      " <!-- comment --> ",
      "# comment",
      "// comment",
      "% comment %"
    ],
    answer: "// comment",
    explanation: "Single-line comments in JavaScript start with //"
  },
  {
    id: 9,
    question: "What is the output of: null == undefined?",
    options: [
      "true",
      "false",
      "TypeError",
      "undefined"
    ],
    answer: "true",
    explanation: "null and undefined are equal when using loose equality (==)"
  },
  {
    id: 10,
    question: "Which operator is used for strict equality comparison?",
    options: [
      "==",
      "===",
      "=",
      "!="
    ],
    answer: "===",
    explanation: "=== checks both value and type equality"
  },
  {
    id: 11,
    question: "What is closure in JavaScript?",
    options: [
      "A way to close browser windows",
      "A function with access to its outer scope variables",
      "A method to end function execution",
      "A way to clear variables"
    ],
    answer: "A function with access to its outer scope variables",
    explanation: "A closure is a function that can access variables from its outer scope even after the outer function has returned"
  },
  {
    id: 12,
    question: "What is the purpose of the 'use strict' directive?",
    options: [
      "To make code run faster",
      "To enable new JavaScript features",
      "To enforce stricter parsing and error handling",
      "To allow global variables"
    ],
    answer:  "To enforce stricter parsing and error handling",
    explanation: "'use strict' enables strict mode which catches common coding mistakes and prevents the use of certain error-prone features"
  },
  {
    id: 13,
    question: "What will console.log(typeof []) output?",
    options: [
      "array",
      "object",
      "undefined",
      "null"
    ],
    answer: "object",
    explanation: "Arrays are objects in JavaScript, so typeof [] returns 'object'"
  },
  {
    id: 14,
    question: "What is the difference between let and var?",
    options: [
      "let is faster than var",
      "var is block-scoped, let is function-scoped",
      "let is block-scoped, var is function-scoped",
      "There is no difference"
    ],
    answer: "let is block-scoped, var is function-scoped",
    explanation: "let provides block scope while var is function-scoped and can be hoisted"
  },
  {
    id: 15,
    question: "What is the output of: 0.1 + 0.2 === 0.3?",
    options: [
      "true",
      "false",
      "undefined",
      "Error"
    ],
    answer: "false",
    explanation: "Due to floating-point precision in JavaScript, 0.1 + 0.2 is not exactly equal to 0.3"
  },
  {
    id: 16,
    question: "What is event bubbling?",
    options: [
      "When an event triggers from parent to child",
      "When an event triggers from child to parent",
      "When multiple events occur simultaneously",
      "When an event occurs repeatedly"
    ],
    answer: "When an event triggers from child to parent",
    explanation: "Event bubbling is when an event triggered on a child element propagates up through its ancestors"
  },
  {
    id: 17,
    question: "What does the map() method do?",
    options: [
      "Modifies the original array",
      "Creates a new array with transformed elements",
      "Sorts the array",
      "Removes elements from the array"
    ],
    answer:  "Creates a new array with transformed elements",
    explanation: "map() creates a new array with the results of calling a provided function on every element"
  },
  {
    id: 18,
    question: "What is the purpose of Promise.all()?",
    options: [
      "To execute promises sequentially",
      "To execute promises in parallel and wait for all to complete",
      "To cancel all running promises",
      "To find the fastest resolving promise"
    ],
    answer: "To execute promises in parallel and wait for all to complete",
    explanation: "Promise.all() waits for all promises to resolve and returns their results as an array"
  },
  {
    id: 19,
    question: "What is the output of: typeof NaN?",
    options: [
      "NaN",
      "undefined",
      "number",
      "object"
    ],
    answer: "number",
    explanation: "NaN is a special numeric value, so typeof NaN returns 'number'"
  },
  {
    id: 20,
    question: "What does the bind() method do?",
    options: [
      "Joins two arrays",
      "Creates a new function with a fixed this value",
      "Binds event listeners",
      "Connects to a database"
    ],
    answer: "Creates a new function with a fixed this value",
    explanation: "bind() creates a new function with a fixed this value regardless of how it's called"
  },
  {
    id: 21,
    question: "How do you check if a property exists in an object?",
    options: [
      "object.hasProperty(prop)",
      "object.contains(prop)",
      "object.hasOwnProperty(prop)",
      "object.exists(prop)"
    ],
    answer: "object.hasOwnProperty(prop)",
    explanation: "hasOwnProperty() method returns true if the object has the specified property as its own property"
  },
  {
    id: 22,
    question: "What is the purpose of the async keyword?",
    options: [
      "To make code run faster",
      "To declare an asynchronous function that returns a promise",
      "To create a new thread",
      "To prevent function execution"
    ],
    answer: "To declare an asynchronous function that returns a promise",
    explanation: "async declares a function that automatically returns a promise and allows the use of await"
  },
  {
    id: 23,
    question: "What will be the output of: '5' - 3?",
    options: [
      "2",
      "'2'",
      "NaN",
      "'53'"
    ],
    answer: "2",
    explanation: "The - operator converts strings to numbers, so '5' becomes 5 and the subtraction is performed"
  },
  {
    id: 24,
    question: "What is the purpose of the Set object?",
    options: [
      "To store key-value pairs",
      "To store unique values of any type",
      "To create arrays with better performance",
      "To sort elements automatically"
    ],
    answer: "To store unique values of any type",
    explanation: "Set is a collection that can store any unique values, whether primitive values or object references"
  },
  {
    id: 25,
    question: "What is destructuring in JavaScript?",
    options: [
      "A way to delete object properties",
      "A way to extract values from objects or arrays",
      "A way to destroy variables",
      "A way to clear memory"
    ],
    answer:  "A way to extract values from objects or arrays",
    explanation: "Destructuring is a JavaScript expression that allows us to extract data from arrays, objects, and maps into their own variable"
  },
  {
    id: 26,
    question: "What is the spread operator (...)?",
    options: [
      "It creates a new array",
      "It combines multiple arrays",
      "It expands an array into its elements",
      "It removes array elements"
    ],
    answer: "It expands an array into its elements",
    explanation: "The spread operator allows an array or string to be expanded where multiple elements are expected"
  },
  {
    id: 27,
    question: "What is a callback function?",
    options: [
      "A function that calls itself",
      "A function passed as an argument to another function",
      "A function that returns another function",
      "A function that calls back to the server"
    ],
    answer: "A function passed as an argument to another function",
    explanation: "A callback function is a function passed into another function as an argument to be executed later"
  },
  {
    id: 28,
    question: "What does JSON.stringify() do?",
    options: [
      "Parses JSON to JavaScript object",
      "Converts JavaScript value to JSON string",
      "Validates JSON data",
      "Formats JSON data"
    ],
    answer: "Converts JavaScript value to JSON string",
    explanation: "JSON.stringify() converts a JavaScript object or value to a JSON string"
  },
  {
    id: 29,
    question: "What is the purpose of try...catch?",
    options: [
      "To try different code variations",
      "To handle errors in code",
      "To improve code performance",
      "To debug code"
    ],
    answer: "To handle errors in code",
    explanation: "try...catch statements are used to handle exceptions (errors) in JavaScript code"
  },
  {
    id: 30,
    question: "What is the purpose of localStorage?",
    options: [
      "To store data temporarily in memory",
      "To store data permanently in browser",
      "To store data on the server",
      "To store cookies"
    ],
    answer: "To store data permanently in browser",
    explanation: "localStorage allows you to store key-value pairs in the browser with no expiration time"
  },
  {
      "id": 31,
      "question": "What is the purpose of the async/await keywords?",
      "options": [
        "To make code run faster",
        "To handle promises more elegantly",
        "To create loops",
        "To define variables"
      ],
      answer: "To handle promises more elegantly",
      explanation: "async/await provides a more readable and synchronous-looking way to work with Promises in JavaScript"
    },
    {
      id: 32,
      question: "What is the difference between null and undefined?",
      options: [
        "They are exactly the same",
        "undefined is assigned by JavaScript, null is assigned by programmers",
        "null is an object, undefined is not",
        "There is no difference"
      ],
      answer: "undefined is assigned by JavaScript, null is assigned by programmers",
      explanation: "undefined typically means a variable has been declared but not assigned, while null is an explicit assignment by programmers to indicate no value"
    },
    {
      id: 33,
      question: "What is the purpose of the this keyword in JavaScript?",
      options: [
        "To reference the current function",
        "To reference the global object",
        "To reference the current execution context",
        "To reference the parent object"
      ],
      answer: "To reference the current execution context",
      explanation: "this refers to the current execution context and its value depends on how and where the function is called"
    },
    {
      id: 34,
      question: "What is event delegation?",
      options: [
        "Creating multiple event listeners",
        "Handling events on parent elements for child elements",
        "Removing event listeners",
        "Preventing event propagation"
      ],
      answer: "Handling events on parent elements for child elements",
      explanation: "Event delegation is a technique of delegating event handling to a parent element instead of attaching events to individual child elements"
    },
    {
      id: 35,
      question: "What is the purpose of the Map object?",
      options: [
        "To transform arrays",
        "To store key-value pairs with any type of key",
        "To create maps for navigation",
        "To store only string keys"
      ],
      answer: "To store key-value pairs with any type of key",
      explanation: "Map is a collection of keyed data items where both keys and values can be of any type"
    },
    {
      id: 36,
      question: "What is the purpose of the reduce method?",
      options: [
        "To filter array elements",
        "To transform array elements",
        "To accumulate array elements into a single value",
        "To sort array elements"
      ],
      answer: "To accumulate array elements into a single value",
      explanation: "reduce executes a reducer function on each element of the array, resulting in a single output value"
    },
    {
      id: 37,
      question: "What is a Promise in JavaScript?",
      options: [
        "A guarantee of future payment",
        "An object representing eventual completion of an async operation",
        "A function that returns immediately",
        "A way to store data"
      ],
      answer: "An object representing eventual completion of an async operation",
      explanation: "A Promise represents an asynchronous operation that will complete at some point and produce a value"
    },
    {
      id: 38,
      question: "What is the purpose of the Object.freeze() method?",
      options: [
        "To prevent object modifications",
        "To convert object to JSON",
        "To delete object properties",
        "To copy objects"
      ],
      answer: "To prevent object modifications",
      explanation: "Object.freeze() makes an object immutable - properties cannot be added, deleted, or modified"
    },
    {
      id: 39,
      question: "What is the purpose of the typeof operator?",
      options: [
        "To compare values",
        "To determine the type of a JavaScript value",
        "To convert types",
        "To check if a value exists"
      ],
      answer: "To determine the type of a JavaScript value",
      explanation: "typeof returns a string indicating the type of the unevaluated operand"
    },
    {
      id: 40,
      question: "What is the purpose of the fetch API?",
      options: [
        "To fetch local files",
        "To make HTTP requests to servers",
        "To fetch variables",
        "To fetch DOM elements"
      ],
      answer: "To make HTTP requests to servers",
      explanation: "fetch provides an interface for making HTTP requests to servers and handling responses"
    },
    {
      id: 41,
      question: "What is a callback hell?",
      options: [
        "A programming error",
        "Deeply nested callbacks making code hard to read",
        "A type of infinite loop",
        "A memory leak"
      ],
      answer: "Deeply nested callbacks making code hard to read",
      explanation: "Callback hell occurs when multiple nested callbacks make code difficult to read and maintain"
    },
    {
      id: 42,
      question: "What is the purpose of the classList API?",
      options: [
        "To list all classes in JavaScript",
        "To manipulate element's classes",
        "To create class definitions",
        "To list all HTML elements"
      ],
      answer: "To manipulate element's classes",
      explanation: "classList provides methods to add, remove, toggle, and check for classes on HTML elements"
    },
    {
      id: 43,
      question: "What is the purpose of sessionStorage?",
      options: [
        "To store permanent data",
        "To store temporary data for a session",
        "To store server data",
        "To store cookies"
      ],
      answer: "To store temporary data for a session",
      explanation: "sessionStorage maintains a separate storage area for each session that lasts as long as the browser is open"
    },
    {
      id: 44,
      question: "What is the purpose of the debugger statement?",
      options: [
        "To remove bugs automatically",
        "To pause code execution in debugging tools",
        "To log errors",
        "To prevent errors"
      ],
      answer: "To pause code execution in debugging tools",
      explanation: "The debugger statement stops code execution and calls the debugging function if available"
    },
    {
      id: 45,
      question: "What is the purpose of the Array.from() method?",
      options: [
        "To create arrays only from numbers",
        "To convert array-like objects to arrays",
        "To remove elements from arrays",
        "To sort arrays"
      ],
      answer: "To convert array-like objects to arrays",
      "explanation": "Array.from() creates a new Array instance from an array-like or iterable object"
    },
    {
      id: 46,
      question: "What is a pure function?",
      options: [
        "A function without parameters",
        "A function that always returns the same output for same input",
        "A function with no return value",
        "A function that uses pure JavaScript"
      ],
      answer: "A function that always returns the same output for same input",
      "explanation": "A pure function always produces the same output for the same inputs and has no side effects"
    },
    {
      id: 47,
      question: "What is the purpose of the preventDefault() method?",
      options: [
        "To prevent JavaScript errors",
        "To stop default browser behavior",
        "To prevent function execution",
        "To prevent variable declaration"
      ],
      answer: "To stop default browser behavior",
      explanation: "preventDefault() stops the default action of an element from happening"
    },
    {
      id: 48,
      question: "What is the purpose of the template literals?",
      options: [
        "To create HTML templates",
        "To create multiline strings and interpolate values",
        "To define templates for classes",
        "To create CSS templates"
      ],
      answer: "To create multiline strings and interpolate values",
      explanation: "Template literals allow multiline strings and embedding expressions using ${expression} syntax"
    },
    {
      id: 49,
      question: "What is the purpose of the Set object?",
      options: [
        "To set variable values",
        "To store unique values of any type",
        "To set object properties",
        "To set array elements"
      ],
      answer: "To store unique values of any type",
      explanation: "Set is a collection that lets you store unique values of any type, whether primitive values or object references"
    },
    {
      id: 50,
      question: "What is the purpose of the rest parameter?",
      options: [
        "To give functions a break",
        "To handle remaining function parameters",
        "To restrict parameter access",
        "To reset parameters"
      ],
      answer: "To handle remaining function parameters",
      explanation: "The rest parameter syntax allows a function to accept an indefinite number of arguments as an array"
    }
]