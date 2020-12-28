# React Fetch API Project

**Note: .env file is shared in public repository because of the requirements of this project but normally, never share your .env file containing information like credentials in public repositories!**

This is a project built to address requirements of a predefined project, which is touching many building blocks of React development i.e. Redux, React-Router, API Consuming, state management and so on. I've bootstrapped the project with `create-react-app`.

If you can't receive any data from the API, the reason might be because Bearer token is no longer valid.

## Requirements of the project

1. Place two buttons (Button A and Button B, respectively with certain styling) into the screen vertically and horizontally centered.
2. Clicking on Button A should open a modal. Opening modal should contain three buttons. All Contacts (should do the same thing with Button A), US Contacts (should do the same thing with Button B) and Close button, which closes the modal.
3. When Button A is clicked, an API request with an Auth Bearer token should be made to a specific end point with certain parameters. Results should be displayed within this modal.
4. Clicking on Button A should change URL of the page.
5. API endpoint supports pagination as a parameter. Modal should support infinite scrolling. When scrolled to the bottom of the modal, new API request should be made to the endpoint for the next page and results should be displayed under previous results.
6. Clicking in Button B should open the same modal as Button A. This time, same endpoint should be fetched with different parameters. All of the other requirements for Button A are also valid for Button B.
7. Clicking on the results in the modal should open a new modal, giving extra detail about the item clicked on the list, however, displaying this modal should not change URL of the page. This modal should only contain a Close button.
8. Users should be able to filter results by typing into an input field. When they type, filtering should be completed with a small delay. IF they hit enter after typing, filtering should be completed immediately.
9. For displaying ids with even numbers, a check box should be present and while checked, should only display results having even ids.
10. Bootstrap CSS should be used.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
