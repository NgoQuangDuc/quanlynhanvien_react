import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8081'
  });
  instance.defaults.withCredentials = true;

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('3')
return response;
  }, function (error) {
    console.log(error);
    
    const status = error.response.status || 500;
    // we can handle global errors here
    switch (status) {
      case 401: {
        alert(error)
      console.log('1')
        return Promise.reject(error);
      }

      // forbidden (permission related issues)
      case 403: {
        alert('Het cookies roi')
        sessionStorage.removeItem("SessionName")
        return Promise.reject(error);
      }

      // bad request
      case 400: {
        return Promise.reject(error);
      }

      // not found
      case 404: {
        return Promise.reject(error);
      }

      // conflict
      case 409: {
        return Promise.reject(error);
      }

      // unprocessable
      case 422: {
        return Promise.reject(error);
      }

      // generic api error (server related) unexpected
      default: {
        return Promise.reject(error);
      }
    }
  });
  export default instance