# Frontend Mentor - Tip calculator app solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#tip-calculator-app)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person


### Links

- Solution URL: [Github](https://github.com/EricAguayo90/FRM-tip-calculator-app)
- Live Site URL: [Vercel](https://frm-tip-calculator-app.vercel.app/)

## My process
Completed the project with the following steps:
1. Built the HTML structure for the tip calculator app.
2. Styled the app using CSS to ensure it looks good on all devices.
3. Added interactivity with JavaScript to handle tip calculations and updates.
4. Tested the app to ensure it works as expected.

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- Mobile-first workflow

### What I learned

Learned how to create a tip calculator app with HTML, CSS, and JavaScript. Core concepts such as event handling, form validation, and dynamic DOM manipulation were reinforced. Using logic for the tip calculations and updates was a fun challenge.

To see how you can add code snippets, see below:

```html
 <div class="select-amount">
              <div>
                <h2>Tip Amount</h2>
                <p>/ person</p>
              </div>
              <div>
                <input type="number" name="tipamount" class="" id="tipAmount" placeholder="$4.27">
              </div>
            </div>
```
```css
.box__select-custom {
    border: none;
    border-radius: 5px;
    background-color: hsl(180, 26%, 95%);
    color: var(--very-dark-cyan);
    cursor: pointer;
    width: 147px;
    height: 48px;
    text-align: center;
    padding-top: 5px;
    font-size: var(--form-inputs);
    font-weight: 700;
}

```
```js
tipButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Remove active class from all buttons
    tipButtons.forEach((btn) => btn.classList.remove("active"));

    // Add active class to clicked button
    e.target.classList.add("active");
  });
});
```

### Continued development

Continue down the learning path of JavaScript and continue to build more complex projects to enhance skills.

### Useful resources

- [codepen.io](Forgot name of the dev- lost link) - Resource used to help with the JavaScript logic. Come up with the syntax and functions to make the calculations work.

## Author

- Website - [Eric Aguayo](https://www.your-site.com)
- Frontend Mentor - [@EricAguayo90](https://www.frontendmentor.io/profile/EricAguayo90)
- Twitter - [@DevEric90](https://www.twitter.com/DevEric90)

