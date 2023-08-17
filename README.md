# Firnas Aero - Garbage Removal Location Tracker

![Firnas AeroLogo](https://res.cloudinary.com/dvvzlzude/image/upload/v1692266220/logo_fgr41s.png)


Firnas Aero is a web application designed to track and manage garbage removal locations using OpenStreetMap integration. With the ability to upload images and select precise locations on the map, this app aims to facilitate efficient garbage disposal operations.

## Features

- **OpenStreetMap Integration**: The app utilizes OpenStreetMap to provide a detailed and interactive map interface for selecting locations.

- **Firebase Authentication**: User authentication is handled through Firebase Authentication, ensuring secure access to the platform.

- **Firestore Database**: Firebase Firestore is employed as the database solution, allowing seamless storage and retrieval of garbage disposal location data.

- **Firebase Storage for Images**: Images associated with each garbage disposal location are stored using Firebase Storage, ensuring reliable and scalable image storage.

## How to Use

1. **Sign Up/Log In**: Users need to sign up or log in to their accounts using Firebase Authentication credentials.

2. **Upload an Image**: Once logged in, users can upload images of the garbage disposal sites along with relevant details.

3. **Select Location**: Users can select the exact disposal site location on the OpenStreetMap by clicking on the map interface.

4. **Submit**: After selecting the location and uploading the image, users can submit the information.

5. **View and Manage**: Users can view all submitted garbage disposal locations on the map. They can also edit or remove their submissions as needed.

## Screenshots

![Screenshot 1](https://res.cloudinary.com/dvvzlzude/image/upload/v1692265979/firnas1_yyba5k.png)
*Home page login page integrated with Firebase auth*

![Screenshot 2](https://res.cloudinary.com/dvvzlzude/image/upload/v1692265943/firnas2_nbbzkl.png)
*Upload area photo section using Firebase Storage solution*

![Screenshot 3](https://res.cloudinary.com/dvvzlzude/image/upload/v1692265942/firnas3_tfvrv4.png)
*Track location using OpenStreetMap centered at Al-Madina, Saudi Arabia*

## Getting Started

Follow these steps to get the project up and running locally:

1. Clone this repository.
2. Set up your Firebase project and obtain the necessary configuration.
3. Replace the Firebase configuration in the `src/firebase.js` file.
4. Install dependencies using `npm install`.
5. Run the development server with `npm start`.

## Technologies Used

- HTML, CSS, JavaScript
- React
- Firebase Authentication
- Firebase Firestore
- Firebase Storage
- OpenStreetMap API

## License

This project is licensed under the MIT License

## Acknowledgements

- OpenStreetMap for providing map data.
- Firebase for authentication, database, and storage solutions.

---

**Note:** This project was built as a prototype within a short timeframe of 4 hours. It may have limitations and areas for further enhancement.

---

Feel free to contact the author at [pandeysandeep1190@gmail.com](mailto:your.email@example.com) for any questions or feedback.
