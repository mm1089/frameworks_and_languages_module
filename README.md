<div id="top"></div>

<!-- Allan's module -->
<br />
<div align="center">
  <a href="https://github.com/mm1089/frameworks_and_languages_module">
  </a>

<h2 align="center">Frameworks and Languages Module</h3>
<br />
  <h2 align="center">Michael J. McLain</h2>
  <h3 align="center">Software Engineering</h3>
  <h4 align="center">S21U14465</h4>
  <br />
  <h3 align="center">Canterbury Christ Church University</h3>
  <h3 align="center">Canterbury, CT1 1PL, UK.</h3>
  <br />
  <h5 align="center">Module Leaders: Allan Callaghan, Gordon Aiken</h5>
  <h5>January, 2022</h5>

  <p align="center">
    The goal is to create a server and client implementation to a provided specification and ensure it meets the required tests.
	FreeCycle with lat/lon?</p>
    <br />
    <br />
    <br />
    <a align="center" href="https://github.com/mm1089/frameworks_and_languages_module"><strong>View Code »</strong></a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About

The aim of this assignment is to produce a working server and client implementation to a provided specification. (I have chosen the frameworks React and Express)
The business requirements are captured in the provided automated test suites for both server and client.
The server requirements are also detailed in an OpenAPI3 specification.

• You are to replace the example server and client implementations with new implementations that pass the server and client automated test suites
• Your solutions must run in containers on CI
• Your solutions must use the frameworks you researched and justified in assignment 1

[The repository](https://github.com/calaldees/frameworks_and_languages_module) provides:
• An OpenAPI3 Specification for the server service
• A reference server implementation that runs in a container (I have replaced this implementation)
• An automated test container that tests the server implementation’s conformance to the OpenAPI3 spec.
• These tests run as GitHub actions as part of Continuous Integration (CI)
• A reference client implementation (that uses the OpenAPI3 service server container)
• A set of browser tests (cypress), to document the expected client/user flows


### Built With

**[Client Framework and Libraries.]**

* [React.js](https://reactjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)


**[Server Framework and Libraries]**

* [Express.JS](https://expressjs.com/)

*[Built Using]*

* [GitPod IDE](https://gitpod.io)

<p align="right">(<a href="#top">▲</a>)</p>
<p align="right">(<a href="#bottom">▼</a>)</p>


<!-- GETTING STARTED -->
## Getting Started


TODO:
* openapi spec for service
* stub server and frontend containers serving empty pages and null endpoints
* api tests (pytest? container)
* frontend tests (cypress container)
	* define class's id's of components


* https://oai.github.io/Documentation/start-here.html
* https://openapi.tools/
* https://swagger.io/specification/
* https://redocly.github.io/redoc/


Consider OpenAPI testing with
https://schemathesis.readthedocs.io/en/stable/python.html

This is an example of how you deploy my project locally.
To get a local copy up and running follow these simple example steps.

1. `Clone my repository`
2. `Ensure port 3000/3001 are clear`
3. `make client` for client 
4. `make server` for server

<p align="right">(<a href="#top">▲</a>)</p>

### Clone the repo

   ```sh
   
   git clone https://github.com/mm1089/frameworks_and_languages_module
   
   ```

<!-- INSTALL -->
### Install

* This is an example of how to start the development build.
 ```sh
  make client
  ```

   ```sh
  make server
  ``` 
  
  * Browser
	* Allow popups for `https://gitpod.io`

  <p align="right">(<a href="#top">▲</a>)</p>


<!-- ROADMAP -->

## Roadmap

- Server Implementation
- [ ] Pass all tests
- [ ] Communicate with Client
- [x] Install Express
- [x] GET, PUT, POST, DELETE



- Client Implementation
- [ ] Complete Implementation
- [ ] Pass all tests
- [x] Create README.md
- [x] Create React UI
- [x] Style with Tailwind CSS


See the [open issues](https://github.com/mm1089/airbnb/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">▲</a>)</p>


<!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used.
Additional screenshots, code examples and demos work well in this space.
You may also link to more resources.

Screenshots of finished implementation


```javascript
const items = {
  1: {
      "id": 1,
      "user_id": "mm1089",
      "keywords": ["car", "bus", "train"],
      "description": "what a cool assignment",
      "lat": 1,
      "lon": 1,
      "date_from": "2021-11-22T08:22:39.067408",
  }
}
NEXT_ID = max(ITEMS.keys()) + 1
```

<p align="right">(<a href="#top">▲</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">▲</a>)</p>

<div id="bottom"></div>
