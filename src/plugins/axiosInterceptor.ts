import axios from 'axios';

export default () => {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

  axios.interceptors.request.use(
    (config) => {
      let params = {
        apikey: process.env.REACT_APP_API_KEY,
      };

      if (config.params) {
        params = {
          ...params,
          ...config.params,
        };
      }

      config.params = params;

      if (process.env.NODE_ENV !== 'production') {
        console.log('%c REQUEST ', 'background: #222; color: #bada55');
        console.log({ request: config });
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  axios.interceptors.response.use(
    (response) => {
      if (process.env.NODE_ENV !== 'production') {
        console.log('%c RESPONSE ', 'background: #222; color: #bada55');
        console.log({ response });
      }
      return response;
    },
    (error) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    },
  );
};
