<div id="top"></div>

<!-- Allan's module -->
<br />
<div align="center">
  <a href="https://github.com/mm1089/frameworks_and_languages_module">
  </a>

<h2 align="center">Frameworks and Languages Module</h2>
  <h4 align="center">Michael J. McLain</h4>
  <h4 align="center">Software Engineering</h4>
  <h4 align="center">S21U14465</h4>
  <h4 align="center">Canterbury Christ Church University</h4>
  <h5 align="center">Module Leaders: Allan Callaghan @caladees , Gordon Aiken</h5>
  <h5>January 14, 2022</h5>

  <a align="center" href="https://github.com/mm1089/frameworks_and_languages_module"><strong>» View Code »</strong></a>
  <br />
  <a align="center" href="https://github.com/mm1089/frameworks_and_languages_module/commits/main"><strong>➥ [View Commit History] </strong></a>
</div>

<!-- ABOUT THE PROJECT -->
## About

  <p align="left"> The aim of this assignment is to produce a working server and client implementation to a provided specification.
  <p align="left"> The business requirements are captured in the provided automated test suites for both server and client.</p>
  <p align="left"> The server requirements are also detailed in an OpenAPI3 specification.</p>
  
  <div align="left">

## Built Using

* [React.js](https://reactjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Express.JS](https://expressjs.com/)
* [GitPod IDE](https://gitpod.io)
* [cors](https://www.npmjs.com/package/cors)
</div>


<div align="left">

## Requirements

</div>

<div align="left">

<h5>• You must replace the example implementations with new ones that pass the **automated tests**<h5>
<h5>• Your solutions **must run in containers on CI**</h5>
<h5>• Your solutions must use the frameworks you researched and justified in assignment 1</h5>

The [Example Repo](https://github.com/calaldees/frameworks_and_languages_module/) provides:
<h5>• An OpenAPI3 Specification for server </h5>
<h5>• A reference server implementation that runs in a container</h5>
<h5>• An automated test container that tests the server implementation’s conformance to the OpenAPI3 spec. </h5>
<h5>• The Tests run as GitHub actions as part of Continuous Integration (CI) </h5>
<h5>• A reference client implementation (that uses the OpenAPI3 service server container) </h5>
<h5>• A set of browser tests (cypress), to document the expected client/user flows </h5>
</div>



## How to run Server and Client Implementation

This is an example of how you deploy my project.
To get a local copy up and running follow these simple example steps.

0. Allow popups for `https://gitpod.io`
1. [Clone the repository](https://github.com/mm1089/frameworks_and_languages_module)
2. `cd client/`
3. `make client` for client
4. `cd ..`
5. `cd server/`
6. `make server` for server
7. `cd ..`
8.  `make client`
9.  `make server`
10. Run PyTests
11. <a href="#tests">PyTests</a>
  
  
0. https://github.com/calaldees/teachingWorkshops/blob/master/schoolOfETD/programming_frameworks_and_languages/web-service.md CURL TEST

## How to Test Server and Client vs. Specification
<div id="tests"></div>

This is an example of how you run the tests against the specification
To run the tests follow these simple example steps.

1.  `cd server_test/`
2.  `pytest test_api.py`
3.  `pip install pytest` {Only needed once}
4.  `pytest test_api.py`
5.  `pytest test_api.py --pdb`

<p align="right">(<a href="#top">▲</a>)</p>
  
  

## Examples
<div align="center">  
  
1. Responsive design, built for Mobile, small, large, xl and 2xl screens
  
  ![ezgif-3-44f678c0bb](https://user-images.githubusercontent.com/72493335/147995251-84b0a27c-3b91-4551-b394-c039960deab5.gif)
  </div>
  

  <p align="right">(<a href="#top">▲</a>)</p>
  
<div align="left">
  
Storing Items in a hardcoded dictionary
  
```javascript
const items = {
  1: {
      "id": 1,
      "user_id": "Example",
      "keywords": ["Software", "Engineering", "Class"],
      "description": "Assignment",
      "latitude": 1,
      "longitude": 1,
  }
}
```
Cross Origin Resource Sharing
  
```javascript
var corsDefault = {
    origin: '*',
    methods:'GET, POST, OPTIONS',
    allowedHeaders: 'Content-Type'
}
```
  </div>
<p align="right">(<a href="#top">▲</a>)</p>

# Roadmap

- [ ] Complete Implementation 
- [ ] Pass tests
- [ ] POST
- [ ] DELETE
- [x] GET
- [x] CORS
- [x] Install Express
- [x] Create README.md
- [x] Create React UI
- [x] Style with Tailwind CSS


<p align="right">(<a href="#top">▲</a>)</p>

<div id="bottom"></div>
