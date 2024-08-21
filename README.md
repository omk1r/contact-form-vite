# Frontend Mentor - Contact Form Solution

This is my solution to the [Contact Form Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). This challenge helped me enhance my skills in building accessible and user-friendly forms in React.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

Users should be able to:

- Complete the form and see a success message upon successful submission.
- Receive validation messages if:
  - A required field is missed.
  - The email address is not formatted correctly.
- Navigate and complete the form using only the keyboard.
- Have inputs, error messages, and the success message announced by their screen reader.
- View an optimized layout for their device's screen size.
- See hover and focus states for all interactive elements on the page.

### Screenshots

![Desktop View](./src/assets/screenshot.pngscreenshot.png)

### Links

- Live Site URL: [Live Demo](https://your-live-site-url.com)

## My Process

### Built With

- Semantic HTML5 markup
- Tailwind CSS for styling
- React for the interactive form functionality
- Mobile-first workflow

### What I Learned

While building this project, I reinforced my understanding of form validation in React, handling form data using `useState`, and dynamically rendering error messages. I also learned how to create accessible forms that are usable with a keyboard and screen readers.

Example of form validation logic:

```javascript
const validate = () => {
  let error = {};
  if (!formData.firstName) error.firstName = 'This field is required';
  if (!formData.lastName) error.lastName = 'This field is required';
  if (!formData.email) {
    error.email = 'Please enter a valid email address';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    error.email = 'Email address is invalid';
  }
  if (!formData.queryType) error.queryType = 'Please select a query type';
  if (!formData.message) error.message = 'This field is required';
  if (!formData.consent)
    error.consent = 'To submit this form, please consent to being contacted';
  return error;
};
```

### Continued Development

I plan to continue improving my skills in accessibility and form validation, particularly in larger forms with more complex validation logic. Additionally, I aim to explore more advanced styling techniques using Tailwind CSS and experiment with form handling in Next.js.

### Useful Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html) - A great resource for understanding React fundamentals and best practices.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Helped me quickly style the form with utility-first classes.

## Author

- Frontend Mentor - [@omk1r](https://www.frontendmentor.io/profile/omk1r)
- Twitter - [@omk1rJ](https://twitter.com/omk1rJ)

## Acknowledgments

I would like to thank the Frontend Mentor community for their continuous support and inspiration. Special thanks to the creators of the challenge for providing a great opportunity to learn and grow.

---
