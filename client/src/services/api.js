/**
 * API Service - Flask Backend Integration
 * 
 * This file is prepared for future Flask backend integration.
 * Currently using localStorage for authentication, but ready to connect
 * to Flask API endpoints.
 * 
 * FUTURE FLASK SETUP:
 * 1. Install Flask and required dependencies:
 *    pip install flask flask-cors python-dotenv
 * 
 * 2. Create Flask app with routes:
 *    - POST /api/auth/login - User login
 *    - POST /api/auth/signup - User registration
 *    - GET /api/kolam/generate - Generate Kolam from image
 *    - POST /api/kolam/save - Save user's Kolam design
 *    - GET /api/kolam/gallery - Fetch gallery images
 *    - GET /api/kolam/user/:userId - Get user's saved designs
 * 
 * 3. Enable CORS in Flask:
 *    from flask_cors import CORS
 *    CORS(app, resources={r"/api/*": {"origins": "*"}})
 * 
 * 4. Connect this frontend:
 *    - Uncomment the API calls below
 *    - Update BASE_URL to your Flask server
 *    - Replace localStorage auth with API calls
 */

const BASE_URL = "http://127.0.0.1:5000/api";

/**
 * Generic GET request helper
 * @param {string} endpoint - API endpoint (e.g., '/kolam/gallery')
 * @returns {Promise<any>} - JSON response from API
 */
export async function apiGet(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Add auth token when implemented:
        // "Authorization": `Bearer ${localStorage.getItem("auth_token")}`
      },
    });
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("API GET Error:", error);
    throw error;
  }
}

/**
 * Generic POST request helper
 * @param {string} endpoint - API endpoint
 * @param {object} data - Request body data
 * @returns {Promise<any>} - JSON response from API
 */
export async function apiPost(endpoint, data) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add auth token when implemented:
        // "Authorization": `Bearer ${localStorage.getItem("auth_token")}`
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("API POST Error:", error);
    throw error;
  }
}

/**
 * Upload file (image) to Flask backend
 * @param {string} endpoint - API endpoint
 * @param {File} file - File to upload
 * @returns {Promise<any>} - JSON response from API
 */
export async function apiUpload(endpoint, file) {
  try {
    const formData = new FormData();
    formData.append("file", file);
    
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        // Don't set Content-Type for FormData - browser sets it automatically
        // "Authorization": `Bearer ${localStorage.getItem("auth_token")}`
      },
      body: formData,
    });
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("API Upload Error:", error);
    throw error;
  }
}

/**
 * EXAMPLE USAGE:
 * 
 * // Login user
 * const loginData = await apiPost('/auth/login', {
 *   email: 'user@example.com',
 *   password: 'password123'
 * });
 * 
 * // Generate Kolam from image
 * const kolamResults = await apiUpload('/kolam/generate', imageFile);
 * 
 * // Fetch gallery
 * const gallery = await apiGet('/kolam/gallery');
 */

export default {
  get: apiGet,
  post: apiPost,
  upload: apiUpload,
};
