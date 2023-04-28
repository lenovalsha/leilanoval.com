import helpdesk from "../../assets/helpdesk/helpdesk.png";
import shoppingcart from "../../assets/shoppingcart/shoppingcart.png";
import weatherapp from "../../assets/weatherapp/weather.png";
import booking from "../../assets/hotelbookingsystem/booking.png";

const projectEntry = [
  {
    id: 5,
    name: "Shopping Cart",
    info: [
      "Developed a shopping cart application using ASP.NET Razor Pages and C# for the backend",
      "Created a Local Server database to store product information, user profiles, and order history",
      "Implemented CRUD functionality to manage products, users, and orders",
      "Designed and integrated responsive user interface using HTML, CSS, Bootstrap and jQuery",
      "Ensured data security and user authentication using ASP.NET Identity Framework",
    ],
    image: shoppingcart,
    skill: [
      "C#",
      "Entity Framework core",
      "ASP.NET Razor Pages",
      "Database",
      "ASP.Net Identity Framework",
      "HTML5",
      "CSS3",
      "BOOTSTRAP",
      "jQuery",
    ],
    git: "https://github.com/lenovalsha/e-commerce",
    site: "",
    state: "",
  },
  {
    id: 4,
    name: "Help Desk",
    info: [
      "Utilized C#, Entity Framework, and MySQL to develop a Help Desk API",
      "Ensured passwords were hashed for security",
      "Demonstrated its functionality by building a ReactJS application to showcase to the audience",
    ],
    image: helpdesk,
    skill: [
      "C#",
      "Entity Framework core",
      "MySQL",
      "ASP.NET Web API",
      "HTML5",
      "CSS3",
      "React.JS",
    ],
    git: "https://github.com/lenovalsha/HelpDeskCLient",
    site: "",
    state: "(In development)",
  },
  {
    id: 3,
    name: "Online Hotel Booking System",
    info: [
      "Developed a hotel booking system using React for the frontend and C#, Entity Framework, and ASP.NET for the backend",
      "Implemented user registration and authentication for guests, staff members, and admins",
      "Enabled guests to search for available rooms by location, date, and other criteria, and make reservations online",
      "Enabled staff members to check-in and check-out guests, as well as make reservations for guests",
      "Enabled admins to register their hotels and manage staff members, rooms, and other details",
    ],
    image: booking,
    skill: [
      "C#",
      "Entity Framework core",
      "MySQL",
      "ASP.NET Web API",
      "HTML5",
      "CSS3",
      "React.JS",
    ],
    git: "https://github.com/lenovalsha/HotelBookingSystemClient-Side",
    site: "",
    state: "(In development)",
  },
  {
    id: 2,
    name: "WeatherApp",
    info: [
      "Developed a Node.js weather application that integrates with OpenWeatherMap API",
      "Allows users to search for a city and view its corresponding weather conditions, including temperature, humidity, and wind speed",
      "Implemented error handling and user input validation to improve user experience",
    ],
    image: weatherapp,
    skill: ["HTML5", "CSS3", "Node.js", "JavaScript"],
    git: "https://github.com/lenovalsha/WeatherApp.git",
    site: "",
  },
];

export default projectEntry;
