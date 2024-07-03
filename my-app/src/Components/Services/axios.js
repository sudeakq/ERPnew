// frontend/src/services/axios.js
import axios from 'axios';
import Cookies from 'js-cookie';

// Set the base URL for Axios requests
axios.defaults.baseURL = 'http://localhost:3003';

// Allow Axios to send cookies with requests
axios.defaults.withCredentials = true;

// Optionally, set common headers if needed
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Get the CSRF token from cookies (if not handled automatically)
const csrfToken = Cookies.get('XSRF-TOKEN');
if (csrfToken) {
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
}

export default axios;
