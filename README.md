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


How to Use
Search for Images:

Enter a keyword in the search bar and click the "Search" button.
The gallery will display the first group of 15 images related to the keyword.
Load More Images:

Click the Load More button to fetch and display the next group of 15 images.
This continues until all results are loaded.
End of Results:

When all images are loaded, a dismissible popup will notify the user that they’ve reached the end of the search results.
View Images in Lightbox:

Click on any image to view it in a lightbox for better visibility.
API Details
This project uses the Pixabay API. You will need a valid API key to fetch images.

Endpoint: https://pixabay.com/api/
Parameters Used:
q: Search query.
image_type: Fetches photos only.
orientation: Horizontal images.
safesearch: Ensures safe search.
page: Current page number.
per_page: Number of results per page (15).

Demo
You can see a live demo of the application here: Live Demo Link

Screenshots
Search Results

End of Results Popup

Contributing
Contributions are welcome! If you have any suggestions or feature requests, feel free to create an issue or submit a pull request.

License
This project is open-source and available under the MIT License.
