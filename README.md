# Book Nest 📚 - A Book Buying E-commerce Platform

Discover, buy, and dive deep into the world of books with Book Nest, an intuitive and modern book e-commerce platform.

---

## Table of Contents

- [Design Decisions](#design-decisions)
- [Technologies Used](#technologies-used)
- [Additional Features](#additional-features)
- [Deployment](#deployment)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

---

## Design Decisions

- **Responsive Design**: Built with a mobile-first approach ensuring accessibility and user-friendliness on all devices.

- **Performance First**: We use Next.js to ensure optimal loading speeds by utilizing Server-Side Rendering. This approach boosts the performance and provides instant feedback to users.

- **State Management**: Using Redux Toolkit for efficient state management, making the app scalable and the state predictable.

- **Form Handling**: Implemented React Hook Form for efficient form validations, improving user experience by providing immediate feedback.

---

## Technologies Used

- **Next.js**: A React framework that ensures optimal page loading by using Hybrid Static & Server Rendering.

- **Axios**: Promise-based HTTP client for making asynchronous requests.

- **TailwindCSS**: Utility-first CSS framework for rapid UI development.

- **Redux Toolkit**: The official, opinionated, batteries-included toolset for efficient Redux development.

- **Redux Persist**: Used for persisting the Redux store to manage the application state even after browser refreshes.

- **React Hook Form**: A performant, flexible, and extensible form solution.

---

## Additional Features

- **Advanced Sorting Filters**: Sort books by various criteria: price, ratings, or publication date.

- **Dynamic Checkout Process**:
    - **Checkout Page**: Displays the total cost, takes address, and handles payment details.
    - **Order Confirmation Page**: Confirms the successful placement of orders and provides order details.

- **My Orders Section**: View order history, and view detailed purchase information.

---

## Deployment

The application is deployed [here](https://book-nest-mocha.vercel.app/).  <!-- Replace 'your_deployment_link' with your actual deployment link -->

---

## Setup and Installation

1. Clone the repository:

```sh
git clone https://github.com/prashantpaddune/BookNest.git
```

2. Navigate to the project directory:
```sh   
cd BookNest
```

3. Install dependencies:
```sh 
pnpm install
```

4. Start the development server:
```sh 
pnpm dev
```
---


## License

This project is licensed under [MIT License](path_to_license).

