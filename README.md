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
