#To start the project: 1.yarn 2.yarn dev

Why did i do things this way? Since I wasn't sure how complex the form needed to be, I kept it as simple as possible to avoid unnecessary customization. Because I'm familiar with Formik and Yup from previous projects, I decided to use them to build a stateless form that doesn't require local storage, a global store, or other state management solutions. Material UI (MUI) was chosen for its clean and customizable components.

Trade-offs: When considering trade-offs, I primarily focused on the form's current needs. If the form becomes more complex in the future, I might need to manage state myself using a global store.

More time: If I had more time and wasn't so tired, I probably would have made several improvements: creating separate components for everything to improve organization, adding more customization options for a better user experience, incorporating local storage functionality for future features, and mocking data for testing purposes.

How would keep a feature like this bug free in production? In the future, I would thoroughly test the form by running it myself several times and requesting feedback from my team.

How would you handle actual storing the user credentials? Think about the storage choice, the actual schema How would you manage the application sessions so users remain authenticated?

there are several options, cokie based and token based. also theres a combination of too, using a jwt token, but im storing it in a http only cookie. But it's also ok to store it in localstorage(the jwt token), but it's not reccomended.
