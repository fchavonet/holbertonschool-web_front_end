<img  height="50px" align="right" src="https://raw.githubusercontent.com/fchavonet/fchavonet/main/resources/images/logo-holberton_school.png" alt="Holberton School logo">

# Bootstrap

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
        ♥️ <a href="#thanks">Thanks</a>
        <br>
        👷 <a href="#authors">Authors</a>
</details>

## 📄 <span id="description">Description</span>

This repository contains the tasks I completed as part of my learning journey with Bootstrap. Each exercise is designed to enhance my understanding of responsive, mobile-first front-end web development using **Bootstrap 4**.4. From basic layouts to more complex components, I applied the knowledge I gained to create and style various web pages using only Bootstrap's CSS framework (except for the last task), adhering strictly to the project requirements.

You can test the results of my work through the following links:

- [0. Reboot styling](https://fchavonet.github.io/holbertonschool-web_front_end/Bootstrap/0-index.html)
- [1. Blocks](https://fchavonet.github.io/holbertonschool-web_front_end/Bootstrap/1-index.html)
- [2. Table of chemical elements](https://fchavonet.github.io/holbertonschool-web_front_end/Bootstrap/2-index.html)
- [3. Cards](https://fchavonet.github.io/holbertonschool-web_front_end/Bootstrap/3-index.html)
- [4. Bob Dylan](https://fchavonet.github.io/holbertonschool-web_front_end/Bootstrap/4-index.html)
- [5. Show/Hide - screen size](https://fchavonet.github.io/holbertonschool-web_front_end/Bootstrap/5-index.html)
- [6. Overwrite CSS](https://fchavonet.github.io/holbertonschool-web_front_end/Bootstrap/6-index.html)

## 🎓 <span id="objectives">Objectives</span>

At the end of this project, I had to be able to explain to anyone, **without the help of Google** :

- Usage of Containers.
- Usage of the Grid system.
- Usage of Components.
- Usage of Utilities.

## 📋 <span id="requirements">Requirements</span>

- A `README.md` file, at the root of the folder of the project, is mandatory.
-  Bootstrap version 4.4.1.

- Use the CDN version:

```
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
```

## 📝 <span id="instructions">Instructions</span>

<details>
    <summary>
        <b>0. Reboot styling</b>
    </summary>
    <br>

From this HTML:

```
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
        <title>Holberton - Web Stack - Bootstrap</title>
        <meta name="description" content="Bootstrap is a free and open-source CSS framework">

        <style>
            .my-container {
                background-color: #FF0000;
            }
        </style>
    </head>
    <body>

        <div class="my-container">
            <h1>Hello</h1>
            <h2>Holberton</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat eleifend nulla, quis imperdiet lacus. Donec tempor lorem enim, sit amet tempus purus euismod sit amet. Nam laoreet quis purus a consequat. Quisque interdum bibendum varius. Praesent lobortis eros sit amet tortor varius elementum. Fusce eget varius ex. Cras id lectus consectetur, bibendum dolor in, hendrerit lacus. Praesent rutrum, odio id tincidunt fringilla, dolor eros condimentum lacus, blandit molestie massa velit hendrerit risus. Nam ex nunc, ultrices id nisi consectetur, mattis imperdiet purus. Sed tempus ullamcorper nisi, vitae pulvinar nunc varius eu. Maecenas ut volutpat lectus.</p>
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Phasellus quis dolor sed ligula porttitor fringilla.</li>
                <li>
                    <ul>
                        <li>Integer vulputate arcu quis luctus condimentum.</li>
                        <li>Integer commodo turpis non ligula viverra, ut sagittis elit ornare.</li>
                    </ul>
                </li>
                <li>Etiam porttitor justo in diam elementum, nec mollis tellus viverra.</li>
                <li>Vivamus non ligula quis dui auctor sagittis.</li>
            </ul>
        </div>

    </body>
</html>
```

Add Bootstrap to reset the CSS styling.

Your final page must look like this:

<img src="./resources/images/task0-reboot_styling.jpg" alt="Reboot styling screenshot">

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `Bootstrap`.
- File: `0-index.html`.
<hr>
</details>

<details>
    <summary>
        <b>1. Blocks</b>
    </summary>
    <br>

From this HTML:

```
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
        <title>Holberton - Web Stack - Bootstrap</title>
        <meta name="description" content="Bootstrap is a free and open-source CSS framework">

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    </head>
    <body>
        <div>
            <div>Primary</div>
            <div>Success</div>
            <div>Danger</div>
            <div>Warning</div>
        </div>

        <hr />

        <div>
            <div>Primary</div>
            <div>Success</div>
            <div>Danger</div>
            <div>Warning</div>
        </div>

        <hr />

        <div>
            <div>Primary</div>
            <div>Success</div>
            <div>Danger</div>
        </div>

        <hr />

        <div>
            <div>Primary</div>
            <div>Success</div>
            <div>Danger</div>
            <div>Warning</div>
        </div>

        <hr/>

        <div>
            <div>Primary</div>
            <div>Success</div>
        </div>

        <hr/>

        <div>
            <div>Primary</div>
            <div>Success</div>
            <div>Danger</div>
        </div>
    </body>
</html>
```

Build this responsive web page:

<img src="./resources/images/task1-blocks.gif" alt="Blocks screenshot">

**Requirements:**

- You are not allow to define any styling in a CSS file, in head or inline - only Bootstrap classes.
- You can not change the HTML structure - only adding classes is allowed.

**Behaviors/styles:**

For all cells of all rows:

- Padding at `.5rem`.
- Background color of the name of the cell.
- Text centered and white.

**First line:**

- Each cell has the same width.
- Screen >= 992px: display like 4 columns in one line.
- Screen < 992px: display like 4 lines in one column.

**Second line:**

- Each cell has the same width.
- Screen >= 576px: display like 4 columns in one line.
- Screen < 576px: display like 4 lines in one column.

**Third line:**

- The last cell is taking 50% of the width screen.
- The middle cell has 2 times the size of the first cell.
- Screen >= 992px: display like 3 columns in one line.
- Screen < 992px: display like 3 lines in one column.

**Fourth line:**

- Different order (from left to right) based on the size.
- Screen >= 1200px: Primary -> Success -> Danger -> Warning.
- Screen between 992px and 1200px: Warning -> Primary -> Success -> Danger.
- Screen between 768px and 992px: Danger -> Warning -> Primary -> Success.
- Screen <= 768px: Success -> Danger -> Warning -> Primary.

**Fifth line:**

- Each cell has the same width (~16% of the screen).
- Screen >= 768px: display like 2 columns on each side of the screen in one line.
- Screen < 768px: display like 2 lines in one column.

**Last line:**

- Each cell has the same width (~16% of the screen).
- Screen >= 768px: display like 3 columns in one line with the space between the first and middle cell 2 times bigger than the space between the middle cell and the last cell.
- Screen < 768px: display like 3 lines in one column.

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `Bootstrap`.
- File: `1-index.html`.
<hr>
</details>

<details>
    <summary>
        <b>2. Table of chemical elements</b>
    </summary>
    <br>

From this HTML:

```
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
        <title>Holberton - Web Stack - Bootstrap</title>
        <meta name="description" content="Bootstrap is a free and open-source CSS framework">

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    </head>
    <body>
        <header>
            <ul>
                <li>
                    <a href="/">
                        <img src="https://via.placeholder.com/150x50" />
                    </a>
                </li>
                <li>
                    <a href="#">Chemical elements</a>
                </li>
                <li>
                    <a href="#">Profile</a>
                </li>
            </ul>
        </header>

        <main>
            <section>
                <div role="alert">
                    <h4>List of chemical elements</h4>
                    <p>This is a list of the 5 first chemical elements which have been identified as of 2019.</p>
                    <hr>
                    <p>A popular visualization of all 118 elements is <a href="https://en.wikipedia.org/wiki/Periodic_table">the periodic table of the elements</a>.</p>
                </div>
            </section>

            <section>
                <h1>Chemical elements <span>only 5</span></h1>

                <div>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Atomic number</th>
                                <th scope="col">Symbol</th>
                                <th scope="col">Element</th>
                                <th scope="col">Origin of name</th>
                                <th scope="col">Group</th>
                                <th scope="col">Period</th>
                                <th scope="col">Atomic weight</th>
                                <th scope="col">Density</th>
                                <th scope="col">Melting point</th>
                                <th scope="col">Boiling point</th>
                                <th scope="col">Specific heat capacity</th>
                                <th scope="col">Electro­negativity</th>
                                <th scope="col">Abundance in Earth's crust</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>H</td>
                                <td>Hydrogen</td>
                                <td>Greek elements <i>hydro-</i> and <i>-gen</i>, meaning 'water-forming'</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1.008</td>
                                <td>0.00008988</td>
                                <td>14.01</td>
                                <td>20.28</td>
                                <td>14.304</td>
                                <td>2.20</td>
                                <td>1400</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>He</td>
                                <td>Helium</td>
                                <td>Greek <i>hḗlios</i>, 'sun'</td>
                                <td>18</td>
                                <td>1</td>
                                <td>4.002602</td>
                                <td>0.0001785</td>
                                <td>—</td>
                                <td>4.22</td>
                                <td>5.193</td>
                                <td>–</td>
                                <td>0.008</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Li</td>
                                <td>Lithium</td>
                                <td>Greek <i>líthos</i>, 'stone'</td>
                                <td>1</td>
                                <td>2</td>
                                <td>6.94</td>
                                <td>0.534</td>
                                <td>453.69</td>
                                <td>1560</td>
                                <td>3.582</td>
                                <td>0.98</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Be</td>
                                <td>Beryllium</td>
                                <td>Beryl, a mineral (ultimately from the name of Belur in southern India)</td>
                                <td>2</td>
                                <td>2</td>
                                <td>9.0121831</td>
                                <td>1.85</td>
                                <td>1560</td>
                                <td>2742</td>
                                <td>1.825</td>
                                <td>1.57</td>
                                <td>2.8</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>B</td>
                                <td>Boron</td>
                                <td>Borax, a mineral (from Arabic <i>bawraq</i>)</td>
                                <td>13</td>
                                <td>2</td>
                                <td>10.81</td>
                                <td>2.34</td>
                                <td>2349</span></td>
                                <td>4200</td>
                                <td>1.026</td>
                                <td>2.04</td>
                                <td>10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    </body>
</html>
```

Build this responsive web page:

<img src="./resources/images/task2-chemical_elements.png" alt="Blocks screenshot">
<img src="./resources/images/task2-chemical_elements.gif" alt="Responsive screenshot">

**Requirements:**

- You are not allow to define any styling in a CSS file, in head or inline - only Bootstrap classes.
- You can not change the HTML structure - only adding classes is allowed.

**Behaviors/styles:**

- Header:
    - With border bottom.
    - Padding `.5rem` and margin bottom `1rem`.
    - Background color “light”.
    - Horizontal listing, no margin bottom:
        - First item aligned on the left with a border rounded image.
        - 2 other items aligned on the right with 2 links (aligned vertically in the middle) with a layout of a button of style “secondary”.
        - The link “Chemical elements” is active.
- The `main` block has full width, spanning the entire width of the viewport (container-fluid).
- The first `section`:
    - The `div` inside is an alert style of “info”:
        - `h4` has an alert heading style.
        - The last paragraph (containing the link) should not have any margin bottom.
- The second section:
    - `h1` has a margin bottom at `1.5rem` and margin top at `3rem`.
    - Inside the `h1`, “only 5” has a badge layout of type “info”.
    - The `div` is able to make the `table` responsive with a break at `992px`.
    - The `table` has “dark” style and hover on rows.

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `Bootstrap`.
- File: `2-index.html`.
<hr>
</details>

<details>
    <summary>
        <b>3. Cards</b>
    </summary>
    <br>

From this HTML:

```
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
        <title>Holberton - Web Stack - Bootstrap</title>
        <meta name="description" content="Bootstrap is a free and open-source CSS framework">

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

        <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    </head>
    <body>
        <div>
            <div>
                <div>
                    <div>
                        <div>Coding</div>
                        <img src="https://via.placeholder.com/450x200" />
                        <div>
                            <h5>HTML</h5>
                            <p>Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.</p>
                            <button data-toggle="modal" data-target="#playModal">Play with</button>
                        </div>
                        <div>40h</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>Coding</div>
                        <img src="https://via.placeholder.com/450x200" />
                        <div>
                            <h5>CSS</h5>
                            <p>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.</p>
                            <button data-toggle="modal" data-target="#playModal">Play with</button>
                        </div>
                        <div>35h</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>Coding</div>
                        <img src="https://via.placeholder.com/450x200" />
                        <div>
                            <h5>Javascript</h5>
                            <p>JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.</p>
                            <button data-toggle="modal" data-target="#playModal">Play with</button>
                        </div>
                        <div>70h</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div id="playModal" tabindex="-1" role="dialog" aria-labelledby="playModal" aria-hidden="true">
            <div role="document">
                <div>
                    <div>
                        <h5 id="exampleModalLabel">Play with CodePen</h5>
                        <button type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div>
                        <p>
                            CodePen is an online community for testing and showcasing user-created HTML, CSS and JavaScript code snippets. 
                            It functions as an online code editor and open-source learning environment, where developers can create code snippets, called "pens," and test them.
                        </p>
                        <p>
                            It was founded in 2012 by full-stack developers Alex Vazquez and Tim Sabat and front-end designer Chris Coyier.
                            Its employees work remotely, rarely all meeting together in person. 
                        </p>
                        <p>
                            CodePen is one of the largest communities for web designers and developers to showcase their coding skills, with an estimated 330,000 registered users and 14.16 million monthly visitors.
                        </p>

                        <form>
                            <div>
                                <h5>Connect</h5>
                            </div>
                            <div>
                                <label for="username">Username</label>
                                <div>
                                    <input type="text" id="username" />
                                </div>
                            </div>
                            <div>
                                <label for="password">Password</label>
                                <div>
                                    <input type="password" id="password" />
                                </div>
                            </div>
                            <div>
                                <button type="submit">Connect</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
```

Build this responsive web page:

<img src="./resources/images/task3-cards.png" alt="Cards screenshot">
<img src="./resources/images/task3-modal.png" alt="Modal screenshot">
<img src="./resources/images/task3-cards.gif" alt="Responsive screenshot">

**Requirements:**

- You are not allow to define any styling in a CSS file, in head or inline - only Bootstrap classes.
- You can not change the HTML structure - only adding classes is allowed.

**Behaviors/styles:**

- The first `div` is a container with a break at `992px` and padding of `3rem`.
    - Inside, card is in row until `576px` where it will switch to column.
    - Each card has a spacing of `1.5rem` on top.
    - The text “Coding” is a card header.
    - Language name (card title) and description (card text) are inside a card body.
    - Duration in hour is a card footer.
    - Also, the button “Play with” has the “danger” layout and should open a modal.
- The second `div` is the modal:
    - Centered vertically and horizontally.
    - The `form` has a border on top and a padding on top of `1rem`:
        - Each items of the `form` are grouped.
        - The final rendering of the form must be the same as the screen (label on the left, color style, etc..).

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `Bootstrap`.
- File: `3-index.html`.
<hr>
</details>

<details>
    <summary>
        <b>4. Bob Dylan</b>
    </summary>
    <br>

From this HTML:

```
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
        <title>Holberton - Web Stack - Bootstrap</title>
        <meta name="description" content="Bootstrap is a free and open-source CSS framework">

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

        <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    </head>
    <body>
        <div>
            <h1>Bob Dylan</h1>

            <ul>
                <li>
                    <a>Introduction</a>
                </li>
                <li>
                    <a>Discography</a>
                </li>
            </ul>
            <div>

                <div>
                    <p>
                        Bob Dylan (born Robert Allen Zimmerman; May 24, 1941) is an American singer-songwriter, author, and visual artist who has been a major figure in popular culture for more than fifty years. 
                    </p>
                    <p>
                        Much of his most celebrated work dates from the 1960s, when songs such as "Blowin' in the Wind" (1963) and "The Times They Are a-Changin'" (1964) became anthems for the civil rights movement and anti-war movement. 
                        His lyrics during this period incorporated a wide range of political, social, philosophical, and literary influences, defied pop-music conventions and appealed to the burgeoning counterculture.
                    </p>
                </div>

                <div>
                    <ul>
                        <li>
                            <a>Bob Dylan <em>(1962)</em></a>
                            <div>
                                <p>
                                    Bob Dylan is the debut studio album by American singer-songwriter Bob Dylan, released on March 19, 1962 by Columbia Records. Produced by Columbia's legendary talent scout John H. Hammond, who signed Dylan to the label, the album features folk standards, plus two original compositions, "Talkin' New York" and "Song to Woody".
                                </p>
                            </div>
                        </li>

                        <li>
                            <a>The Freewheelin' Bob Dylan <em>(1963)</em></a>
                            <div>
                                <p>
                                    The Freewheelin' Bob Dylan is the second studio album by American singer-songwriter Bob Dylan, released on May 27, 1963 by Columbia Records. Whereas his self-titled debut album Bob Dylan had contained only two original songs, Freewheelin' represented the beginning of Dylan's writing contemporary words to traditional melodies. Eleven of the thirteen songs on the album are Dylan's original compositions. The album opens with "Blowin' in the Wind", which became an anthem of the 1960s, and an international hit for folk trio Peter, Paul & Mary soon after the release of Freewheelin'. The album featured several other songs which came to be regarded as among Dylan's best compositions and classics of the 1960s folk scene: "Girl from the North Country", "Masters of War", "A Hard Rain's a-Gonna Fall" and "Don't Think Twice, It's All Right".
                                </p>
                            </div>
                        </li>

                        <li>
                            <a>The Times They Are a-Changin' <em>(1964)</em></a>
                            <div>
                                <p>
                                    The Times They Are a-Changin' is the third studio album by American singer-songwriter Bob Dylan, released on January 13, 1964 by Columbia Records. Whereas his previous albums Bob Dylan and The Freewheelin' Bob Dylan consisted of original material among cover songs, Dylan's third album was the first to feature only original compositions. The album consists mostly of stark, sparsely arranged ballads concerning issues such as racism, poverty, and social change. The title track is one of Dylan's most famous; many feel that it captures the spirit of social and political upheaval that characterized the 1960s.
                                </p>
                            </div>
                        </li>

                        <li>
                            <a>Another Side of Bob Dylan <em>(1964)</em></a>
                            <div>
                                <p>
                                    Another Side of Bob Dylan is the fourth studio album by American singer and songwriter Bob Dylan, released on August 8, 1964 by Columbia Records.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </body>
</html>
```

Build this responsive web page:

<img src="./resources/images/task4-bob_dylan-introduction.png" alt="Introduction screenshot">
<img src="./resources/images/task4-bob_dylen-discography.png" alt="Discography screenshot">
<img src="./resources/images/task4-bob_dylan-listg-roup.png" alt="Group-list screenshot">
<img src="./resources/images/task4-bob_dylan.gif" alt="Responsive screenshot">

**Requirements:**

- You are not allow to define any styling in a CSS file, in head or inline - only Bootstrap classes.
- You can not change the HTML structure - only adding classes is allowed.

**Behaviors/styles:**

- Body background is dark.
- All elements are inside a `div` container with a break at `960px`, background color light and a padding of `1rem`.
- `h1` has a margin bottom and top of `1.5rem`.
- `ul` is a tabs navigation with the first item active by default.
- The `div` after the `ul` is the container of tabs content with a background of color white and padding of `1rem`.
- The switch between tab contents is animated with a fade.
- In the tab “Discography”:
    - The list of discs has a grouped layout.
    - Each disc name has a link that extends or collapses description.

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `Bootstrap`.
- File: `4-index.html`.
<hr>
</details>

<details>
    <summary>
        <b>5. Show/Hide - screen size</b>
    </summary>
    <br>

From this HTML:

```
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
        <title>Holberton - Web Stack - Bootstrap</title>
        <meta name="description" content="Bootstrap is a free and open-source CSS framework">

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    </head>
    <body>
        <h1>Small title</h1>
        <h1>Big title</h1>

        <div>
            <div>Left</div>
            <div>Middle</div>
            <div>Right</div>
        </div>

    </body>
</html>
```

Build this responsive web page:

<img src="./resources/images/task5-show-hide.gif" alt="Responsive screenshot">

**Requirements:**

- You are not allow to define any styling in a CSS file, in head or inline - only Bootstrap classes.
- You can not change the HTML structure - only adding classes is allowed.

**Behaviors/styles:**

- `Big title` is displayed only for width screen > 768px.
- `Small title` is displayed only for width screen <= 768px.
- first `div` should:
    - Be centered as container and take the full width when the width of the screen <= 768px.
    - Have “info color” background.
    - Have some padding on the 4 directions.
    - Have borders of the “info color” and rounded.
- “Left div” should:
    - Be aligned on the left.
    - Have light text color.
    - Have light border on the bottom and right.
    - Have some padding on the 4 directions.
- “Middle div” should:
    - Be aligned in the center.
    - Have light text color.
    - Have light border on the bottom, left and right.
    - Have some padding on the 4 directions.
    - Have shadow.
    - Disappear when the width of the screen <= 768px.
- “Right div” should:
    - Be aligned on the right.
    - Have light text color.
    - Have light border on the bottom and left.
    - Have some padding on the 4 directions.

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `Bootstrap`.
- File: `5-index.html`.
<hr>
</details>

<details>
    <summary>
        <b>6. Overwrite CSS</b>
    </summary>
    <br>

From this HTML:

```
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
        <title>Holberton - Web Stack - Bootstrap</title>
        <meta name="description" content="Bootstrap is a free and open-source CSS framework">

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link rel="stylesheet" href="6-styles.css">
    </head>
    <body>

        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <h5 class="my-0 mr-md-auto font-weight-normal">Company name</h5>
            <nav class="my-2 my-md-0 mr-md-3">
                <a class="p-2 text-dark" href="#">Features</a>
                <a class="p-2 text-dark" href="#">Enterprise</a>
                <a class="p-2 text-dark" href="#">Support</a>
                <a class="p-2 text-dark" href="#">Pricing</a>
            </nav>
            <a class="btn btn-outline-primary" href="#">Sign up</a>
        </div>

        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 class="display-4">Pricing</h1>
            <p class="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
        </div>

        <div class="container">
            <div class="card-deck mb-3 text-center">
                <div class="card mb-4 box-shadow">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal">Free</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>10 users included</li>
                            <li>2 GB of storage</li>
                            <li>Email support</li>
                            <li>Help center access</li>
                        </ul>
                        <button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
                    </div>
                </div>
                <div class="card mb-4 box-shadow">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal">Pro</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">$15 <small class="text-muted">/ mo</small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>20 users included</li>
                            <li>10 GB of storage</li>
                            <li>Priority email support</li>
                            <li>Help center access</li>
                        </ul>
                        <button type="button" class="btn btn-lg btn-block btn-primary">Get started</button>
                    </div>
                </div>
                <div class="card mb-4 box-shadow">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal">Enterprise</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">$29 <small class="text-muted">/ mo</small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>30 users included</li>
                            <li>15 GB of storage</li>
                            <li>Phone and email support</li>
                            <li>Help center access</li>
                        </ul>
                        <button type="button" class="btn btn-lg btn-block btn-primary">Contact us</button>
                    </div>
                </div>
            </div>

            <footer class="pt-4 my-md-5 pt-md-5 border-top">
                <div class="row">
                    <div class="col-12 col-md">
                        <img class="mb-2" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24">
                        <small class="d-block mb-3 text-muted">© 2017-2018</small>
                    </div>
                    <div class="col-6 col-md">
                        <h5>Features</h5>
                        <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">Cool stuff</a></li>
                            <li><a class="text-muted" href="#">Random feature</a></li>
                            <li><a class="text-muted" href="#">Team feature</a></li>
                            <li><a class="text-muted" href="#">Stuff for developers</a></li>
                            <li><a class="text-muted" href="#">Another one</a></li>
                            <li><a class="text-muted" href="#">Last time</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md">
                        <h5>Resources</h5>
                        <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">Resource</a></li>
                            <li><a class="text-muted" href="#">Resource name</a></li>
                            <li><a class="text-muted" href="#">Another resource</a></li>
                            <li><a class="text-muted" href="#">Final resource</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md">
                        <h5>About</h5>
                        <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">Team</a></li>
                            <li><a class="text-muted" href="#">Locations</a></li>
                            <li><a class="text-muted" href="#">Privacy</a></li>
                            <li><a class="text-muted" href="#">Terms</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    </body>
</html>
```

Create the custom stylesheet `6-styles.css` to match this layout:

<img src="./resources/images/task6-overwrite-large.png" alt="Overwrite large">
<img src="./resources/images/task6-overwrite-small.png" alt="Overwrite small">
<img src="./resources/images/task6-overwrite.gif" alt="Overwrite responsive">

**Requirements:**

- You are not allow to define any styling in the head or inline of the HTML.
- You can not change the HTML.

**New styles:**

- `btn-primary` has as background color set to `#E0003C` and `#BC1340` for hover/focus/active.
- `btn-outline-primary` has text and border color set to `#E0003C`.
- `a` link (no matter which color forced) has text color set to `#E0003C` normally, in hover and in focus.
- Card (card container, but also header/footer) has border color set to `#E0003C` and radius to `1rem`.
- `.text-muted` has text color set to `#8C8C8C`.

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `Bootstrap`.
- File: `6-index.html`, `6-styles.css`.
<hr>
</details>

## 🔨 <span id="tech-stack">Tech stack</span>

<p align="left">
    <img src="https://img.shields.io/badge/HTML5-e34f26?logo=html5&logoColor=white&style=for-the-badge" alt="HTML5 badge">
    <img src="https://img.shields.io/badge/CSS3-1572b6?logo=css3&logoColor=white&style=for-the-badge" alt="CSS3 badge">
    <img src="https://img.shields.io/badge/BOOTSTRAP-7952b3?logo=bootstrap&logoColor=white&style=for-the-badge" alt="Bootstrap badge">
</p>

## 📂 <span id="files-description">File description</span>

| **FILE**       | **DESCRIPTION**                                          |
| :------------: | -------------------------------------------------------- |
| `resources`    | Contains the resources required for the project.         |
| `0-index.html` | Index page for the task `0. Reboot styling`.             |
| `1-index.html` | Index page for the task `1. Blocks`.                     |
| `2-index.html` | Index page for the task `2. Table of chemical elements`. |
| `3-index.html` | Index page for the task `3. Cards`.                      |
| `4-index.html` | Index page for the task `4. Bob Dylan`.                  |
| `5-index.html` | Index page for the task `5. Show/Hide - screen size`.    |
| `6-index.html` | Index page for the task `6. Overwrite CSS`.              |
| `6-styles.css` | CSS style sheet for the task `6. Overwrite CSS`.         |
| `README.md`    | The readme file you are currently reading 😉.           |

## ♥️ <span id="thanks">Thanks</span>

A big thank you to all my Holberton School peers for their help and support throughout these projects.

## 👷 <span id="authors">Authors</span>

**Fabien CHAVONET**
- Github: [@fchavonet](https://github.com/fchavonet)
