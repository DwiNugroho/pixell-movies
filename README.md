<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">PixellMovies - Find movies info here</h3>

  <p align="center">
    <a href="https://brave-sinoussi-046b47.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/DwiNugroho/pixell-movies/issues">Report Bug</a>
    ·
    <a href="https://github.com/DwiNugroho/pixell-movies/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

PixellMovies is a website that I built from scratch using [typescript](https://www.typescriptlang.org/) as the language and [ReactJs](https://reactjs.org/) as the framework. The main feature of this website is to find out info about movies. I built this website 100% using functional components and also React-Hook. For Test Driven Development I use [Jest](https://jestjs.io/) and [@testing-library/react](@testing-library/react).

### Built With

* [Typescript](https://www.typescriptlang.org/)
* [ReactJs](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Redux-thunk](https://github.com/reduxjs/redux-thunk)
* [Axios](https://github.com/axios/axios)
* [SASS](https://sass-lang.com/)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* Install NodeJs and NPM. NodeJs version that I'm using is `v14.16.1`

### Installation

1. Get a free API Key at [https://www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx)
2. Clone the repo
   ```sh
   git clone https://github.com/DwiNugroho/pixell-movies.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. create a file named .env in the root directory, and paste your API key like this
   ```
   REACT_APP_API_BASE_URL=http://www.omdbapi.com/
   REACT_APP_API_KEY=your_api_key
   ```
5. If you don't want to use env you can hardcode your api key to /src/plugins/axiosInterceptor.ts file as below. (Optional)
    ```ts
    // your base url api
   axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL || 'http://www.omdbapi.com/';

    axios.interceptors.request.use(
      (config) => {
        let params = {
          // your api key here
          apikey: process.env.REACT_APP_API_KEY || 'your_api_key',
          type: 'movie',
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
   ```
   
### How to run the Test Driven
   ```sh
   npm run test
   ```


<!-- CONTACT -->
## Contact

Dwi Nugroho - [Dwi Nugroho](https://www.linkedin.com/in/dwi-nugroho) - adwinugroho1@gmail.com

Another Projects: [dwi-nugroho.com](https://dwi-nugroho.com/projects)
