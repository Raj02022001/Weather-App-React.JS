Weather App
This is a simple Weather Application built using React. The app allows users to search for weather information by city name. It fetches data from a weather API and displays the city's current temperature, humidity, and other weather details.

Features
City-based Weather Search: Users can search for the weather by entering a city name.
Dynamic Display: The application dynamically updates weather details such as temperature, humidity, max/min temperature, and general weather conditions.
Icon Representation: Weather icons change based on the weather conditions (e.g., sunny, rainy, or cold).
Error Handling: Displays a warning message if the searched city is not found in the weather API database.
Components

1. WeatherApp.jsx
The main component of the application that coordinates the search functionality and displays the weather information using the SearchBox and InfoBox components.

State Management: Manages the state of the weather information using the useState hook.
Update Function: The updateInfo function is passed to the SearchBox component to update the weather information once it is fetched.

2. SearchBox.jsx
A form component where users can input the city name and trigger the weather search.

Fetch Weather Data: Calls the weather API using the city name, retrieves weather details, and sends them back to the parent component (WeatherApp).
Form Handling: Manages input change and form submission using controlled components and event handlers.
Error Message: Displays an error message if no data is found for the entered city.

3. InfoBox.jsx
A display component that shows the weather information in a card format using Material UI.

Dynamic Content: The component dynamically updates the content such as temperature, humidity, and weather conditions based on the info prop passed by the parent.
Weather Icons: Displays different weather icons for hot, cold, and rainy conditions.
Images: Background images change based on weather conditions, providing a visual representation (e.g., sunny, rainy, or cold weather images).
Technologies Used
React: Frontend framework for building user interfaces.
Material UI: React component library for styling and layout.
OpenWeather API: External API for retrieving real-time weather data.
CSS: Custom styles applied for better UI/UX.
Getting Started
Prerequisites:
Before running this project, ensure that you have the following installed:

Node.js (v14 or higher)
npm (v6 or higher)

Usage:
Enter the name of the city you want to search for in the input field.
Click on the "Search City" button.
The weather details for the searched city will be displayed below, including temperature, humidity, and weather icons.

API Reference:
OpenWeather API: https://openweathermap.org/

Contributing:
If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

License:
This project is licensed under the MIT License. See the LICENSE file for details.
