import axios from "axios";

const API_KEY = "47762529-1a7b8a79f7a4ffe66ef18cb56"; // Replace with your valid API key
const BASE_URL = "https://pixabay.com/api/";

export const fetchImages = async (query, page = 1, perPage = 15) => {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
