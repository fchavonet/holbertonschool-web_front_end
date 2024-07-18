<img  height="50px" align="right" src="https://raw.githubusercontent.com/fchavonet/holbertonschool-web-development/main/resources/images/holberton_school_logo.png" alt="Holberton School logo">

# Developer tools

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

In this project, I explored various features and functionalities of browser developer tools, focusing primarily on Chrome DevTools. The goal was to gain proficiency in using these tools to inspect, debug, and enhance web pages. The tasks included using the elements tab to modify HTML and CSS, auditing the page with Lighthouse, creating and running code snippets, blocking requests, and analyzing network activities. Through these exercises, I developed a deeper understanding of how to effectively utilize developer tools to improve web development practices.

## 🎓 <span id="objectives">Objectives</span>

At the end of this project, I had to be able to explain to anyone, **without the help of Google** :

- What Developer Tools in your browser are?
- How to open the Developer Tools on Chrome, Firefox, Safari, and Edge.
- How to use the elements tab to edit HTML and CSS.
- How to audit a page according to the tips suggested by Lighthouse.
- How to create and run snippets on a page.
- How to get information about files and server configurations.
- How to block requests.
- How to know how much JavaScript or CSS is used on a page.
- How to detect 404 issues.
- How to move elements on a webpage.

## 📋 <span id="requirements">Requirements</span>

- A `README.md` file, at the root of the folder of the project, is mandatory.
- Use the newest version of Google Chrome browser (78.0.3904.70 or later).
- Screenshots can be taken via the OS, not necessary via the DevTools. These screenshots are used to see how and where you are doing/playing with the DevTools.

## 📝 <span id="instructions">Instructions</span>

<details>
	<summary>
		<b>0. Responsive device</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

Take a screenshot of the website using the device toolbar Choose iPhone X and show the size in your screenshot (selected device or size in pixel of the rendering)

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `0-responsive_device.png`.
<hr>
</details>

<details>
	<summary>
		<b>1. Change the background color</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

Change the background-color of the body to use `#4233bd` Take a screenshot of the `PORTFOLIO` section.

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `1-change_bg_color.png`.
<hr>
</details>

<details>
	<summary>
		<b>2. Force element state</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

Force the hover state of the “cake” block in the section Portfolio Take a screenshot of it.

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `2-pathways_menu.png`.
<hr>
</details>

<details>
	<summary>
		<b>3. Copy all the styles of the button</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

Select the `Download me!` and copy all the CSS styling that is applied on this button.

Your answer file must contain all CSS styling one per line like this example:

```
$ head -2 3-button_styles
border-radius: 1px;
color: #FF00FF;
$
```

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `3-button_styles`.
<hr>
</details>

<details>
	<summary>
		<b>4. Change button styles</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

Select the `Download me!` and copy all the CSS styling that is applied on this button.

- All primary buttons (btn-primary) should have the #0080ee color as a background color.
- All outlined buttons light (btn-outline-light) should have #0020aa for the text color.
- Screenshot all buttons that changed and merge it to one image.

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `4-new_buttons.png`.
<hr>
</details>

<details>
	<summary>
		<b>5. Remove part of the website</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

Remove the div of the “cake” box in the section Portfolio.

Take a screenshot of it.

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `5-deleted_elements.png`.
<hr>
</details>

<details>
	<summary>
		<b>6. Where is it coming from?</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

- On the right panel, click on the `Computed tab`.
- Then, select the `h2` with the text `ABOUT`.
- Search for `margin-bottom`.

Which file is that declaration coming from?

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `6-declaration_file`.
<hr>
</details>

<details>
	<summary>
		<b>7. How many listeners</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

How many times click events are referenced in JavaScript files?

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `7-number_of_listeners`.
<hr>
</details>

<details>
	<summary>
		<b>8. What is the HSL code</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

Select the primary button “Send”.

What is the equivalent value of the hexadecimal background-color, in HSL?

(format of your answer should be: `hsl(<VALUES>);`, example: `hsl(241, 23%, 24%);` following by a new line)

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `8-hsl`.
<hr>
</details>

<details>
	<summary>
		<b>9. The max-width of the container</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

What is the `max-width` for the first `.container` in the section “About”? (your browser width must be between 1250px and 1440px and with a zoom at 100%).

(format of your answer should be `max-width: <VALUE>;`, example: `max-width: 670px;`)

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `9-max_width`.
<hr>
</details>

<details>
	<summary>
		<b>10. Moving around</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

Switch the sections of “About” and “Portfolio”.

Take a screenshot of it.

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `10-moved_around.png`.
<hr>
</details>

<details>
	<summary>
		<b>11. Coverage</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

How big, in bytes, is the `freelancer.css` file?

Answer file must contain the value in Byte (example: `6144` for 6KB)

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `11-coverage`.
<hr>
</details>

<details>
	<summary>
		<b>12. Emulate the print version of the webpage</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

Under Rendering, change the CSS media type emulation to “print” and take a screenshot of the home page.

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: ` 12-print_version.png`.
<hr>
</details>

<details>
	<summary>
		<b>13. Using the console</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

Select the Avatar image in the header and type $0 in the console. Enter.

What does it return?

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `13-logo_dollar0`.
<hr>
</details>

<details>
	<summary>
		<b>14. Write code in the console</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

Write in the console `console.log(document.title)`, what is returned?

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `14-doc_title`.
<hr>
</details>

<details>
	<summary>
		<b>15. Holberton web framework</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

Which front-end framework could we guess this page is using?

In your answer file only put the letter of the multiple choice answer from below:

- A. React JS.
- B. Material Design.
- C. Bootstrap.
- D. Angular JS.

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `15-hbtn_framework`.
<hr>
</details>

<details>
	<summary>
		<b>16. Homepage weight</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

What is the total weight of the page (with all the elements)?

Take a screenshot of it.

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `16-weight.png`.
<hr>
</details>

<details>
	<summary>
		<b>17. Number of requests</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

What is the number of requests done when accessing this page?

Take a screenshot of it.

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `17-requests.png`.
<hr>
</details>

<details>
	<summary>
		<b>18. Number of CSS files</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

How many CSS resources are loaded on this page?

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `18-css_loaded`.
<hr>
</details>

<details>
	<summary>
		<b>19. Number of images</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

How many image resources are loaded on this page?

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `19-images_loaded`.
<hr>
</details>

<details>
	<summary>
		<b>20. Favicon image type</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

What is the `type` value of the favicon image?

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `20-favicon_type`.
<hr>
</details>

<details>
	<summary>
		<b>21. Font library</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

Holberton School website uses a font library for their icons, which one is it?

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `21-hbtn_font_lib`.
<hr>
</details>

<details>
	<summary>
		<b>22. XHR calls</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

What is the name of the resource that generates 1 XHR calls?

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `22-xhr_calls`.
<hr>
</details>

<details>
	<summary>
		<b>23. Audits panel</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

What is the notation for `Performance` (for desktop mode and no throttling - also called Lighthouse)?

Take a screenshot of it.

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `23-performance_audit.png`.
<hr>
</details>

<details>
	<summary>
		<b>24. Static assets</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

How many static assets need a better cache policy?

Take a screenshot of it.

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `24-static_assets_audit.png`.
<hr>
</details>

<details>
	<summary>
		<b>25. Accessibility</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

When you run an accessibility audit, what is the contrast issue?

In your answer file only put the letter of the multiple choice answer from below:

- A. Image elements do not have [alt] attributes.
- B. Links do not have a discernible name.
- C. Background and foreground colors do not have a sufficient contrast ratio.

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `25-contrast_issue`.
<hr>
</details>

<details>
	<summary>
		<b>26. No alt</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

Which classes are on the images that have no `alt` attribute?

Your answer file must contains all classes, example: `.my_class.my_second` if 2 classes.

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `26-no_alt`.
<hr>
</details>

<details>
	<summary>
		<b>27. Best practices</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

Which attribute is missing on all the links with the target `_blank`?

In your answer file only put the letter of the multiple choice answer from below:

- A. `rel="noopener"`.
- B. `rel="noreferrer"`.
- C. A and B.

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `27-missing_attr`.
<hr>
</details>

<details>
	<summary>
		<b>28. SEO</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

Which `<a>` links don’t have enough text description?

Take a screenshot of it.

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `28-unclear_desc.png`.
<hr>
</details>

<details>
	<summary>
		<b>29. Sources</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

The sources panel allow you to edit files, add breakpoints to analyse your JavaScript code and create snippets.

- Create a new snippet called `allcolors.js`.
- Copy-paste the code on this [page](https://github.com/bgrins/devtools-snippets/blob/master/snippets/allcolors/allcolors.js).
- Run the code.
- Take a screenshot of the result in your console.

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `29-how_many_colors.png`.
<hr>
</details>

<details>
	<summary>
		<b>30. Block CSS files</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

Block all CSS requests.

Take a screenshot of it.

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `30-no_css.png`.
<hr>
</details>

<details>
	<summary>
		<b>31. Application panel</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

The `application` panel gives you access to the storage (cookies, sessions, cache…) and some other options as Services Workers and more recently, notifications.

What is the only key present in the session storage for this page?

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `31-session_storage_key`.
<hr>
</details>

<details>
	<summary>
		<b>32. Service workers</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

Does this page have any service workers? `Yes` or `No`?

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `32-service_workers`.
<hr>
</details>

<details>
	<summary>
		<b>33. Security</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

The `security` panel allows you to make sure HTTS is properly implement on a webpage.

Which organization issued the SSL certificate for this page?

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `33-ssl_cert`.
<hr>
</details>

<details>
	<summary>
		<b>34. Expiration date</b>
	</summary>
	<br>

Go to [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/).

When does the SSL certificate expire?

Take a screenshot of it.

#
**Repo:**
- GitHub repository: `holbertonschool-web_front_end`.
- Directory: `developer_tools`.
- File: `34-ssl_expiration.png`.
<hr>
</details>

## 🔨 <span id="tech-stack">Tech stack</span>

<p align="left">
    <img src="https://img.shields.io/badge/GOOGLE CHROME-4285f4?logo=googlechrome&logoColor=white&style=for-the-badge" alt="JavaScript badge">
<p>

## 📂 <span id="files-description">File description</span>

| **FILE**                     | **DESCRIPTION**                                                               |
| :--------------------------: | ----------------------------------------------------------------------------- |
| `0-responsive_device.png`    | Screenshot for the first task `0. Responsive device`.                         |
| `1-change_bg_color.png`      | Screenshot for the first task `1. Change the background color`.               |
| `2-pathways_menu.png`        | Screenshot for the first task `2. Force element state`.                       |
| `3-button_styles`            | Answer for the task `3. Copy all the styles of the button`.                   |
| `4-new_buttons.png`          | Screenshot for the first task `4. Change button styles`.                      |
| `5-deleted_elements.png`     | Screenshot for the first task `5. Remove part of the website`.                |
| `6-declaration_file`         | Answer for the task `6. Where is it coming from?`.                            |
| `7-number_of_listeners`      | Answer for the task `7. How many listeners`.                                  |
| `8-hsl`                      | Answer for the task `8. What is the HSL code`.                                |
| `9-max_width`                | Answer for the task `9. The max-width of the container`.                      |
| `10-moved_around.png`        | Screenshot for the first task `10. Moving around`.                            |
| `11-coverage`                | Answer for the task `11. Coverage`.                                           |
| `12-print_version.png`       | Screenshot for the first task `12. Emulate the print version of the webpage`. |
| `13-logo_dollar0`            | Answer for the task `13. Using the console`.                                  |
| `14-doc_title`               | Answer for the task `14. Write code in the console`.                          |
| `15-hbtn_framework`          | Answer for the task `15. Holberton web framework`.                            |
| `16-weight.png`              | Screenshot for the first task `16. Homepage weight`.                          |
| `17-requests.png`            | Screenshot for the first task `17. Number of requests`.                       |
| `18-css_loaded`              | Answer for the task `18. Number of CSS files`.                                |
| `19-images_loaded`           | Answer for the task `19. Number of images`.                                   |
| `20-favicon_type`            | Answer for the task `20. Favicon image type`.                                 |
| `21-hbtn_font_lib`           | Answer for the task `21. Font library`.                                       |
| `22-xhr_calls`               | Answer for the task `22. XHR calls`.                                          |
| `23-performance_audit.png`   | Screenshot for the first task `23. Audits panel`.                             |
| `24-static_assets_audit.png` | Screenshot for the first task `24. Static assets`.                            |
| `25-contrast_issue`          | Answer for the task `25. Accessibility`.                                      |
| `26-no_alt`                  | Answer for the task `26. No alt`.                                             |
| `27-missing_attr`            | Answer for the task `27. Best practices`.                                     |
| `28-unclear_desc.png`        | Screenshot for the first task `28. SEO`.                                      |
| `29-how_many_colors.png`     | Screenshot for the first task `29. Sources`.                                  |
| `30-no_css.png`              | Screenshot for the first task `30. Block CSS files`.                          |
| `31-session_storage_key`     | Answer for the task `31. Application panel`.                                  |
| `32-service_workers`         | Answer for the task `32. Service workers`.                                    |
| `33-ssl_cert`                | Answer for the task `33. Security`.                                           |
| `34-ssl_expiration.png`      | Screenshot for the first task `34. Expiration date`.                          |
| `README.md`                  | The readme file you are currently reading 😉.                                 |  

## ♥️ <span id="thanks">Thanks</span>

A big thank you to all my Holberton School peers for their help and support throughout these projects.

## 👷 <span id="authors">Authors</span>

**Fabien CHAVONET**
- Github: [@fchavonet](https://github.com/fchavonet)