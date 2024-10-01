WeatherApp

Overview
The WeatherApp is a simple, responsive web application built using React.js and Material UI that allows users to search for and view the weather information of any city. The app displays key weather details, including temperature, humidity, and more, based on data fetched from an external weather API.

The application consists of three main components:

InfoBox - Displays the weather information.
SearchBox - A search form to input the city name.
WeatherApp - The main component that ties everything together.
Features
Weather Search: Users can search for weather data by entering a city name.
Dynamic Weather Display: Depending on the temperature and humidity, the application displays different weather conditions with corresponding icons and background images.
Error Handling: Displays an error message if an invalid city is searched.
Material UI Integration: Utilizes Material UI components for styling and icons for a sleek design.
Components
1. InfoBox.jsx
This component is responsible for rendering the weather information of the searched city.

It uses Card, CardContent, and CardMedia from Material UI to display weather details in a clean card format.

The weather conditions (like hot, cold, or rainy) are represented visually by images and corresponding icons:

Temperature > 26°C: Displays a sunny weather icon and a warm image.

Humidity > 80%: Displays a storm icon and a rainy image.

Else: Displays a cold weather icon and a cool weather image.

2. SearchBox.jsx
This component handles the search functionality. It allows users to input the name of a city and fetches weather data using an external API.

The component features a form with a text field (for the city name) and a submit button.

Upon submitting, it fetches the weather data from the API and updates the parent component (WeatherApp) with the fetched information.
It also displays an error message if the API does not find the entered city.

3. WeatherApp.jsx
This is the main component that renders both SearchBox and InfoBox. It maintains the state for weather information and passes data between the child components.

The state weatherInfo holds the weather data for the searched city.
It updates weatherInfo based on the results from the search query in SearchBox

###Getting Started

Prerequisites
To run this application, you will need:

Node.js (>=14.x.x)

npm (>=6.x.x) or yarn (>=1.x.x)

A free API key from OpenWeatherMap

###Usage

Enter the name of the city in the search box.

View the weather details, including temperature, humidity, and weather conditions.

If the city is invalid, an error message will be displayed.

###API Integration

The app fetches weather data from the OpenWeatherMap API. The API response provides the following key data:

City: Name of the city.

Temperature: Current temperature in Celsius.

Humidity: Current humidity percentage.

TempMax: Maximum recorded temperature for the day.

TempMin: Minimum recorded temperature for the day.

Weather: Description of the weather (e.g., cloudy, clear sky).

###License
This project is licensed under the MIT License - see the LICENSE file for details.
