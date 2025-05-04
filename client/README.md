# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Application Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000).

## Build Process

To create a production build of the application, run:
```bash
npm run build
```

This will generate a `build` folder containing the optimized production-ready files.

## Usage Instructions

- **Development Mode**: Use `npm start` to run the application locally.
- **Production Mode**: Deploy the contents of the `build` folder to a web server.
- **Testing**: Run tests using:
  ```bash
  npm test
  ```

## API Endpoints

The following API endpoints are used in this project:

1. **Fetch all countries**  
   `GET https://restcountries.com/v3.1/all`  
   Retrieves a list of all countries with their details.

2. **Search countries by name**  
   `GET https://restcountries.com/v3.1/name/{name}`  
   Searches for countries matching the specified name.

3. **Search country by code**  
   `GET https://restcountries.com/v3.1/alpha/{code}`  
   Retrieves details of a country using its code.

4. **Fetch countries by region**  
   `GET https://restcountries.com/v3.1/region/{region}`  
   Retrieves a list of countries in the specified region.

5. **Fetch multiple countries by codes**  
   `GET https://restcountries.com/v3.1/alpha?codes={codes}`  
   Retrieves details of multiple countries using their codes.

6. **User registration**  
   `POST http://localhost:5000/api/auth/register`  
   Registers a new user with the provided details.

## API Report

### Chosen APIs
The project utilizes the [REST Countries API](https://restcountries.com/) to fetch detailed information about countries, including their names, codes, regions, populations, and more. Additionally, a custom API endpoint (`http://localhost:5000/api/auth/register`) is used for user registration.

### Challenges Faced
1. **Handling API Errors**  
   Some API requests failed due to invalid inputs or network issues. For example, searching for a non-existent country name or code resulted in errors.  
   **Resolution:** Implemented error handling using `try-catch` blocks and displayed user-friendly error messages in the UI.

2. **Performance with Large Data**  
   Fetching all countries (`GET /v3.1/all`) returned a large dataset, which caused performance issues when rendering the data.  
   **Resolution:** Added search and filter functionalities to reduce the number of displayed countries and improve performance.

3. **Cross-Origin Resource Sharing (CORS)**  
   During development, CORS issues were encountered when making API requests from the frontend.  
   **Resolution:** Configured a proxy in the development server or used browser extensions to bypass CORS restrictions.

4. **Data Consistency**  
   Some countries lacked certain fields (e.g., `languages` or `capital`), leading to undefined values in the UI.  
   **Resolution:** Added fallback values (e.g., "N/A") for missing data to ensure a consistent user experience.

### Conclusion
The chosen APIs provided comprehensive and reliable data for the project. By addressing the challenges through robust error handling, performance optimizations, and fallback mechanisms, the application delivers a seamless and user-friendly experience.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
