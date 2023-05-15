Histogram Generator
This is a React application that generates a histogram from a text file. The top 20 most frequently occurring words in the text file are displayed in the histogram. The application also provides the option to export the histogram data as a CSV file.


Dependencies
The following dependencies are used in this application:
React
whatwg-fetch
lodash
recharts


How to Run the ApplicationClone the repository.
Open the command prompt and navigate to the project directory.
Run npm install to install the dependencies.
Run npm start to start the application.
Open the web browser and go to http://localhost:3000/ to view the application.


How to Use the Application
Click the "Submit" button to fetch the text data from the provided URL.
The top 20 most frequently occurring words will be displayed in the histogram.
Click the "Export" button to download the histogram data as a CSV file.


Components
App
The main component of the application that fetches the text data and generates the histogram. It uses the useState hook to manage the state of the histogram data.

fetchData
A function that fetches the text data from the provided URL using whatwg-fetch and processes it using lodash.

exportData
A function that exports the histogram data as a CSV file.

BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
Components from recharts library used to display the histogram.
