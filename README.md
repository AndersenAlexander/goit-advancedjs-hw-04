# goit-advancedjs-hw-04
Image Search Application with Pagination
This project is an image search application built with JavaScript and Vite. It uses the Pixabay API to fetch high-quality images and display them in a user-friendly gallery. The app includes features like pagination, smooth scrolling, a "Load More" button, and a dismissible popup message when the end of the search results is reached.

Features
Responsive Design: The application is styled with CSS and is fully responsive for different screen sizes.
Search Functionality: Users can search for images by keywords.
Pagination: Displays images in groups of 15. The Load More button fetches the next group of images.
Smooth Scrolling: After each new group of images is loaded, the page scrolls down smoothly to the new content.
End of Results Popup: When the user reaches the end of the available results, a dismissible popup appears with a message.
Error Handling: Displays error messages when the API request fails or no images are found.
Lightbox View: Clicking an image opens a modal view for better visibility using the SimpleLightbox library.
Asynchronous Requests with Axios: All API requests are handled using async/await and the Axios library.
Technologies Used
JavaScript (ES6+)
CSS
Vite (Development environment)
Axios (For API requests)
SimpleLightbox (For the modal image viewer)
Pixabay API (For fetching image data)
