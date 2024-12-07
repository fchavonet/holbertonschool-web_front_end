<img  height="50px" align="right" src="https://raw.githubusercontent.com/fchavonet/fchavonet/main/resources/images/logo-holberton_school.png" alt="Holberton School logo">

# jQuery Advanced

## 🔖 Table of contents

<details>
        <summary>
        CLICK TO ENLARGE 😇
        </summary>
        📄 <a href="#description">Description</a>
        <br>
        🎓 <a href="#objectives">Objectives</a>
        <br>
        📋 <a href="#requirements">Requirements</a>
        <br>
        📝 <a href="#instructions">Instructions</a>
        <br>
        🔨 <a href="#tech-stack">Tech stack</a>
        <br>
        📂 <a href="#files-description">Files description</a>
        <br>
        💻 <a href="#installation_and_how_to_use">Installation and how to use</a>
        <br>
        ♥️ <a href="#thanks">Thanks</a>
        <br>
        👷 <a href="#authors">Authors</a>
</details>

## 📄 <span id="description">Description</span>

This project focuses on learning advanced features of jQuery, including creating and manipulating DOM elements, handling events, performing `AJAX` queries, and implementing pagination. It also introduces the use of a local JSON` server to simulate API interactions.

## 🎓 <span id="objectives">Objectives</span>

At the end of this project, I had to be able to explain to anyone, **without the help of Google** :

- How to load jQuery from a CDN in a web page.
- Different ways to create and modify DOM elements using jQuery.
- How to handle click events with jQuery.
- How to perform `GET`, `POST`, `DELETE`, and other `AJAX` queries.
- How to implement basic pagination with dynamic content.
- How to use the `wrap`, `unwrap`, `before`, `prepend`, and `val` methods in jQuery.

## 📋 <span id="requirements">Requirements</span>

- All my files should end with a new line.
- A `README.md` file, at the root of the folder of the project, is mandatory.

## 📝 <span id="instructions">Instructions</span>

<details>
    <summary>
        <b>0. Setup your dev environment</b>
    </summary>
    <br>

You are given this starter HTML for this task:

```
<!DOCTYPE html>
<html lang="en" dir="ltr">

    <head>

        <meta charset="utf-8" />
        <title>Task 0</title>

    </head>

    <body>

    </body>

</html>
```

**In a file `0-index.html`:**

- Load the latest version of 

jQuery using their `code.jquery.com` CDN.
- Use the Slim & minified version of jQuery.
- When the page is being loaded, verify that jQuery is loaded correctly.
- If jQuery is ready to be used, log to the console `jQuery has been loaded correctly`.
- If jQuery has not been loaded properly, log to the console `jQuery has not been loaded correctly`.

**Requirements:**

- Make sure your code is in a `script` of type `application/javascript`.

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `JQuery_advanced`.
- File: `0-index.html`.
<hr>
</details>

<details>
    <summary>
        <b>1. Creating a DOM element</b>
    </summary>
    <br>

**In a file `1-index.html`, reuse the template you created previously:**

- Remove the code that verifies jQuery loaded and logs messages to the console
- Create a function named `createTextElement`:
    - Within the function, create a `p` HTML element.
    - The paragraph should display `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in diam risus. Nunc sit amet euismod ipsum. Aenean tempus ex sed est volutpat, sed sodales velit tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin auctor sollicitudin eleifend. Vivamus porta enim vitae mauris commodo, vitae tempor tellus elementum. Quisque sed pellentesque nulla, at eleifend nisi. Phasellus eget tincidunt ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`.
    - Add the paragraph to the `body` of the page.
- Call the `createTextElement` function.

**Requirements:**

- You must use jQuery only to generate the HTML tag and attach it to the page.
- Use the keyword `append` to attach the element to the page.

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `JQuery_advanced`.
- File: `1-index.html`.
<hr>
</details>

<details>
    <summary>
        <b>2. Creating multiple DOM elements at once</b>
    </summary>
    <br>

**In a file `2-index.html`, reuse the template you created previously:**

- Remove the function `createTextElement`.
- Create a function named `createFamilyTree`:
    - It should create a table element:
        - The head of the table should display `Firstname` and `Lastname` in two cells.
        - The body of the table should three rows.
        - The first row should contain two cells with `Guillaume` and `Salva`.
        - The second row should contain two cells with `Paulette` and `Salva`.
        - The third row should contain two cells with `Antoine` and `Salva`.
    - Use the keyword `append` only once to attach all the elements of the table to the page.
- Call the `createFamilyTree` function.

**Requirements:**

- You must use jQuery only to generate the HTML tag and attach it to the page.
- The entire table code should be contained in one string.

**The table created by your script should look like this:**

<p align="left">
    <img src="./assets/images/screenshot-task02.png" alt="Task screenshot">
</p>

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `JQuery_advanced`.
- File: `2-index.html`.
<hr>
</details>

<details>
    <summary>
        <b>3. Chain DOM elements</b>
    </summary>
    <br>

**In a file `3-index.html`, reuse the template you created previously. Reuse also the function named `createFamilyTree`:**

- The table is containing the exact same values as the previous task.
- This time, create each element one by one.
- Use the keywords `append` for each element and `text` for the cells.
- Do not create any intermediate variable.
- Call the `createFamilyTree` function.

**Tips:**

- You can append multiple elements at once, by separating the elements with a comma.

**Requirements:**

You must use jQuery only to generate the HTML tag and attach it to the page.

**The table created by your script should look like this:**

<p align="left">
    <img src="./assets/images/screenshot-task03.png" alt="Task screenshot">
</p>

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `JQuery_advanced`.
- File: `3-index.html`.
<hr>
</details>

<details>
    <summary>
        <b>4. HTML function</b>
    </summary>
    <br>

**In a file `4-index.html`, reuse the template you created in the previous task. Reuse also the function named `createFamilyTree`:**

- Create a new function `replaceFamilyTree`:
    - It should replace the children of the `tbody` elements with a new `tr`.
    - The `tr` element should contain two cells with `Gerard` and `Bonissa` in each.
- Make sure `createFamilyTree` and `replaceFamilyTree` are called

**Requirements:**

- You must use the keyword `html` to replace the content of the table

**The table created by your script should look like this:**

<p align="left">
    <img src="./assets/images/screenshot-task04.png" alt="Task screenshot">
</p>

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `JQuery_advanced`.
- File: `4-index.html`.
<hr>
</details>

<details>
    <summary>
        <b>5. Click attribute and remove function</b>
    </summary>
    <br>

**In a file `5-index.html`, reuse the template you created previously:**

- Remove the `createFamilyTree` and `replaceFamilyTree` functions.
- Create a function `createFamilyTree`:
    - It should append to the `body` an empty table, with `thead` and two cells with text `Firstname` and `Lastname`, respectively.
    - It should append an empty `tbody` element to the `table` after the `thead`.
- Create a function `addNewMember`:
    - It accepts two arguments `firstName` (string) and `lastName` (string).
    - It appends to the body of the `table` a new row with three cells.
    - The first cell displays the `firstName`, the second cell displays the `lastName`.
    - The third cell displays `(x)`.
    - On click on the third cell, it should remove the row.
    - Add CSS to the third cell to have an `orange` background.
- Calls the function `createFamilyTree`.
- Using `addNewMember`, generate a fake table with:
    - The first row `Guillaume`, `Salva`.
    - The second row `Arielle`, `Snizt`.
    - The third row `Fanette`, `Snizt`.
    - The fourth row `Gerard`, `Snizt`.
    - The fifth row `Victor`, `Salva`.

**Requirements:**

- You must use the keywords `click`, `css`, and `remove`.

**The table created by your script should look like this:**

<p align="left">
    <img src="./assets/images/screenshot-task05.png" alt="Task screenshot">
</p>

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `JQuery_advanced`.
- File: `5-index.html`.
<hr>
</details>

<details>
    <summary>
        <b>6. Val, before, and prepend functions</b>
    </summary>
    <br>

**In a file `6-index.html`, reuse the template you created previously:**

- Reuse the function `createFamilyTree` you wrote in the previous task.
- Reuse the function `addNewMember` you wrote in the previous task, and add the following modification:
    - The function should accept a new argument `position` (string).
    - When position is equal to `before`, it should add the row at the top of the table.
    - Otherwise, it should add the row at the bottom of the table.
- Write a function `createForm`:
    - It should add before the table two `input` of type `text`.
    - It should add a `select` with two options as well: `before` and `after` with corresponding `Before` and `After` text.
    - It should add a `input` of type `submit` as well.
        - When the user clicks on the submit, it should call the function `addNewMember` with the value of the two inputs and the value of the select element.
- Call the function `createFamilyTree`.
- Call the function `createForm`.

**Requirements:**

- You must use the keywords `first`, `before`, and `prepend`.
- To select the second input, use the `nth-of-type` selector.

**The form created by your script should look like this:**

<p align="left">
    <img src="./assets/images/screenshot-task06.png" alt="Task screenshot">
</p>

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `JQuery_advanced`.
- File: `6-index.html`.
<hr>
</details>

<details>
    <summary>
        <b>7. Query - Setup your dev environment</b>
    </summary>
    <br>

**In a file `7-index.html`, reuse the template you created in the previous task:**

- Remove the functions from the `script`.
- Import jQuery using the CDN and make sure you can access the ajax methods.

- Create a form:
    - Create a function `createSearchForm`, it should append to the body:
        - An empty `input` of type `text` without ID, name, or class.
        - An `input` of type `submit`:
            - When the user clicks on the submit button, it should query the function `queryWikipedia` that you are going to create with the value of the text `input`.
        - An empty `ul` element.

- Create a function `addNewArticle` to add new items to a list:
    - It accepts three arguments `id` (string), `title` (string), and `snippet` (string).
    - It create an element `li`:
        - Within the `li`, add two `paragraph` elements:
            - The first paragraph contains a `span` tag with the following text: `id -`, then a `b` element with the `title`.
            - The second paragraph, should contain the `snippet`.
    - Appends the `li` to the `ul` element (created by `createSearchForm`).

- Implement a get function: create a function `queryWikipedia`:
    - It accepts one argument `search` (string).
    - Create a data object with attributes required to query a search using the string passed in the argument with Wikipedia.
    - For each result returned by the API, call the function `addNewArticle` with the result’s `pageid`, `title`, and `snippet`.

- Call the function `createSearchForm` when the page loads

**Requirements:**

Look at the documentation from Wikipedia to query the API `https://www.mediawiki.org/wiki/API:Search`.
Use the minified only version of jQuery, so you can access the ajax methods.
When adding the `snippet`, make sure that the HTML coming from Wikipedia is correctly displayed.

**The form created by your script should look like this:**

<p align="left">
    <img src="./assets/images/screenshot-task07-001.png" alt="Task screenshot">
</p>

**Query results should display like this:**

<p align="left">
    <img src="./assets/images/screenshot-task07-002.png" alt="Task screenshot">
</p>

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `JQuery_advanced`.
- File: `7-index.html`.
<hr>
</details>

<details>
    <summary>
        <b>8. Pagination</b>
    </summary>
    <br>

**In a file `8-index.html`, reuse the code from the previous task:**

- Modify the function `createSearchForm`:
    - It should append to the body another list, with the id `pagination`.

- Modify the function `queryWikipedia`:
    - Add a new parameter named `offset` (number).
    - By default, the offset should be set to `0`.
    - Modify the data object to add the `offset`.
    - When you receive the response from the API, call the function `buildPagination` that you are going to create below.

- Create a new function named `buildPagination`:
    - It accepts three arguments `numberOfItems` (number), `itemsPerPage` (number), and `currentOffset` (number).
    - When the function is called, reset the pagination list to an empty tag.
    - Write a loop that will display the pagination (using the total number of items divided by the number of items per page).
    - For each page, create a list item:
        - Add some CSS for each item (`cursor: 'pointer'`, `10px` margin left, and bold when this is the current page).
        - The text of the item should be the page number.
        - When clicking on a page number, it should call the function `queryWikipedia` with the right offset.

**Requirements:**

- Use the `totalhits` value from Wikipedia to define the total number of items.
- Display 10 items per page.
- Make sure your pages are displayed in an horizontal line.

**The form created by your script should look like this:**

<p align="left">
    <img src="./assets/images/screenshot-task08-001.png" alt="Task screenshot">
</p>

**The query results should display like this, notice how the `12` is in bold, because that is the current page:**

<p align="left">
    <img src="./assets/images/screenshot-task08-002.png" alt="Task screenshot">
</p>

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `JQuery_advanced`.
- File: `8-index.html`.
<hr>
</details>

<details>
    <summary>
        <b>9. Wrap/unwrap</b>
    </summary>
    <br>

**In a file `9-index.html`, reuse the code from the previous task:**

- In the header, add some CSS, with the `style` tag:
    - Add a new class named loading:
        - Set the opacity at 0.2 within that class.

- In your `script` with your other functions, create a function named `displayLoading`:
    - It accepts one argument `loading`.
    - It select the first `ul` element of the page.
    - If `loading` is true, it wraps the element with a `div` tag and the class `loading`.
    - If `loading` is false, it unwrap the `ul` from the `div`.

- Modify the `queryWikipedia` function:
    - It should call the function `displayLoading` before querying the API.
    - Once the API returns the value, it should remove the opacity by calling the function again.

**Requirements:**

- You must use the `wrap` and `unwrap` functions of Jquery.

**How the page should look when results are loading:**

<p align="left">
    <img src="./assets/images/screenshot-task09.png" alt="Task screenshot">
</p>

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `JQuery_advanced`.
- File: `9-index.html`.
<hr>
</details>

<details>
    <summary>
        <b>10. Another Get API</b>
    </summary>
    <br>

**Setup your dev environment:**

- Install `json-server` locally within your projects using `npm`.
- Run the server using `node_modules/.bin/json-server --watch db.json`.

**You are provided with this `db.json`, don’t forget to push it, you can change the values of the `id`, `title`, `author`, `postId`, `name` as you like:**

```
{
  "posts": [
    {
      "id": 1,
      "title": "json-server",
      "author": "typicode"
    },
    {
      "title": "fd",
      "author": "fffff",
      "id": 2
    },
    {
      "title": "fd",
      "author": "fffff",
      "id": 3
    },
    {
      "title": "f",
      "author": "f",
      "id": 4
    },
    {
      "title": "",
      "author": "",
      "id": 5
    },
    {
      "title": "",
      "author": "",
      "id": 6
    },
    {
      "title": "",
      "author": "",
      "id": 7
    },
    {
      "title": "",
      "author": "",
      "id": 8
    },
    {
      "title": "",
      "author": "",
      "id": 9
    },
    {
      "title": "",
      "author": "",
      "id": 10
    }
  ],
  "comments": [
    {
      "id": 1,
      "body": "some comment",
      "postId": 1
    }
  ],
  "profile": {
    "name": "typicode"
  }
}
```

**In a file `10-index.html`:**

- Reuse your template from the previous task, remove the functions in your `script` and the `style` in the head.
- Make sure you import jQuery using the CDN and make sure you can access the ajax methods.

- Create a function `addPostRow`:
    - It takes into argument `data` (object).
    - It append to the body a paragraph.
    - The paragraph should contain a span element with the text `Post created with id ID, title: TITLE, author: AUTHOR`:
        - Each variable is contained in the `data` object.

- Create a function named `listPosts`:
    - It should query your local server on the `posts` endpoint.
    - When the server return a 200 response, it should call the function `addPostRow` for each element in the response.
    - When the server is unavailable, display an alert with the message `Server Error`.

- Call the function `listPosts` when your page loads.

**Requirements:**

- You must use the `get` function from jQuery.

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `JQuery_advanced`.
- File: `10-index.html`.
<hr>
</details>

<details>
    <summary>
        <b>11. Post query</b>
    </summary>
    <br>

**In a file `11-index.html`, reuse the code you previously wrote:**

- Create a new function `buildForm`:
    - It appends to the body a `form` element.
    - Inside the form, add a `div` element, with a `label` for author with text `Author` and an `input` of type `text` with id `author`.
    - Inside the form, add a `div` element, with a `label` for `title` with text `Title` and a `textarea` with id `title`.
    - Inside the form, add an `input` of type `submit`.
    - When clicking on the submit button, call the function `sendForm` detailed below.

- Create a new function `sendForm`:
    - It should add after the `form`, the text `About to send the query to the API`.
    - It should create a data object, with the `title` and `author` attributes. The values are the ones within the inputs.
    - It should send a POST query to your server endpoint `posts` with the data.
    - If the query succeed, call the function `addPostRow` with the data coming back from the API.
    - If the query does not succeed, it should display an alert with the message `Error sending the POST query`.

- Call the functions `listPosts` and `buildForm` when your page loads.

**Requirements:**

- When clicking on the label, the input text should be selected by the browser.
- When pressing enter on the input text, the form should be submitted without reloading the page.
- You must use the `after` function from jQuery.

**With the JSON server running, your `11-index.html` should look something like this in your browser (does not have to be exactly the same, rows and values depend on what’s in your `db.json`):**

<p align="left">
    <img src="./assets/images/screenshot-task11.png" alt="Task screenshot">
</p>

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `JQuery_advanced`.
- File: `11-index.html`.
<hr>
</details>

<details>
    <summary>
        <b>12. Delete query</b>
    </summary>
    <br>

**In a file `12-index.html`, reuse your code from the previous task:**

- Modify the function `addPostRow`:
    - Add an id attribute to the paragraph with `row-ID` (the ID being the one of the post).
    - Append a `span` element with the text (`delete`) to the `p`, this `span` should come before the `span` with the post information.
        - On click, call the function `deletePost` with the post id.

- Create a function `deletePost`:
    - It accepts one argument `id` (number).
    - Send a `DELETE` query to the `posts` endpoint with the id of the post.
    - If the query is successful, remove the row from the body.
    - If the query is not successful, display an alert with the message `Post was not deleted`.

**Requirements:**

- You must use the function `remove` from jQuery.

**With your JSON server running, `12-index.html` should look like this in your browser, actual rows and values depend on what’s in your `db.json`:**

<p align="left">
    <img src="./assets/images/screenshot-task12.png" alt="Task screenshot">
</p>

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `JQuery_advanced`.
- File: `12-index.html`.
<hr>
</details>

## 🔨 <span id="tech-stack">Tech stack</span>

<p align="left">
    <img src="https://img.shields.io/badge/HTML5-e34f26?logo=html5&logoColor=white&style=for-the-badge" alt="HTML5 badge">
    <img src="https://img.shields.io/badge/JQUERY-0769AD?logo=jquery&logoColor=white&style=for-the-badge" alt="jQuery badge">
    <img src="https://img.shields.io/badge/JSON-000000?logo=json&logoColor=white&style=for-the-badge" alt="JSON badge">
</p>

## 📂 <span id="files-description">File description</span>

| **FILE**        | **DESCRIPTION**                                           |
| :-------------: | --------------------------------------------------------- |
| `assets`        | Contains the assets required for the repository.          |
| `0-index.html`  | Setup environment to load jQuery from the CDN.            |
| `1-index.html`  | Create and append a paragraph to the DOM using jQuery.    |
| `2-index.html`  | Generate a complete table with rows in a single append.   |
| `3-index.html`  | Chain multiple DOM operations to create the table.        |
| `4-index.html`  | Replace table content dynamically using `.html()`.        |
| `5-index.html`  | Add rows with delete functionality using `.click()`.      |
| `6-index.html`  | Form-based row insertion with `.before()` and `.prepend`. |
| `7-index.html`  | Query Wikipedia API and display results dynamically.      |
| `8-index.html`  | Add pagination functionality to Wikipedia query results.  |
| `9-index.html`  | Display loading animations using `.wrap()` and `.unwrap`. |
| `10-index.html` | Query a local JSON server to display posts dynamically.   |
| `11-index.html` | Add form functionality to POST data to the server.        |
| `12-index.html` |Add DELETE functionality for server-side posts.            |
| `db.json`       | JSON file used to simulate API endpoints for tasks 10-12. |
| `README.md`     | The readme file you are currently reading 😉.             |

## 💻 <span id="installation_and_how_to_use">Installation and how to use</span>

**Installation:**

1. Clone this repository:
    - Open your preferred Terminal.
    - Navigate to the directory where you want to clone the repository.
    - Run the following command:

```
git clone https://github.com/fchavonet/holbertonschool-web_front_end.git
```

2. Open the repository you've just cloned.

3. Navigate to the `JQuery_advanced` directory:

```
cd JQuery_advanced
```

**How to use:**

1. Open the HTML files `0-index.html` to `9-index.html` in your browser to test their functionality (or click on one of the links below to test them directly online).

- [0-index.html](https://fchavonet.github.io/holbertonschool-web_front_end/JQuery_advanced/0-index.html)
- [1-index.html](https://fchavonet.github.io/holbertonschool-web_front_end/JQuery_advanced/1-index.html)
- [2-index.html](https://fchavonet.github.io/holbertonschool-web_front_end/JQuery_advanced/2-index.html)
- [3-index.html](https://fchavonet.github.io/holbertonschool-web_front_end/JQuery_advanced/3-index.html)
- [4-index.html](https://fchavonet.github.io/holbertonschool-web_front_end/JQuery_advanced/4-index.html)
- [5-index.html](https://fchavonet.github.io/holbertonschool-web_front_end/JQuery_advanced/5-index.html)
- [6-index.html](https://fchavonet.github.io/holbertonschool-web_front_end/JQuery_advanced/6-index.html)
- [7-index.html](https://fchavonet.github.io/holbertonschool-web_front_end/JQuery_advanced/7-index.html)
- [8-index.html](https://fchavonet.github.io/holbertonschool-web_front_end/JQuery_advanced/8-index.html)
- [9-index.html](https://fchavonet.github.io/holbertonschool-web_front_end/JQuery_advanced/9-index.html)

2. For the tasks 10 to 12, make sure Node.js and npm are installed on your machine.

3. Run the following command to install `json-server` in your project:

```
npm install json-server
```

4. Start the JSON server:

```
node_modules/.bin/json-server --watch db.json
```

The API will be accessible at: [http://localhost:3000/posts](http://localhost:3000/posts).

5. Open the HTML files `10-index.html`, `11-index.html`, `and 12-index.html` in your browser to test their functionality.

## ♥️ <span id="thanks">Thanks</span>

A big thank you to all my Holberton School peers for their help and support throughout these projects.

## 👷 <span id="authors">Authors</span>

**Fabien CHAVONET**
- Github: [@fchavonet](https://github.com/fchavonet)
