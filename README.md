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
  <h4 align="center">Canterbury, CT1 1PL, UK.</h4>
  <h5 align="center">Module Leaders: Allan Callaghan @caladees , Gordon Aiken</h5>
  <h5>January, 2022</h5>

  <a align="center" href="https://github.com/mm1089/frameworks_and_languages_module"><strong>» View Code »</strong></a>
  <br />
  <a align="center" href="https://github.com/mm1089/frameworks_and_languages_module/commits/main"><strong>➥ [View Commit History] </strong></a>
</div>

<!-- ABOUT THE PROJECT -->
## About

  <p align="center"> The aim of this assignment is to produce a working server and client implementation to a provided specification.
  <p align="center">(I have chosen the frameworks React and Express)</p>
  <p align="center"> The business requirements are captured in the provided automated test suites for both server and client.</p>
  <p align="center"> The server requirements are also detailed in an OpenAPI3 specification.</p>


<div align="left">

## Requirements

</div>

<div align="center">

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

1. Example of storing Items
```javascript
const items = {
  1: {
      "id": 1,
      "user_id": "mm1089",
      "keywords": ["car", "bus", "train"],
      "description": "assignment",
      "latitude": 1,
      "longitude": 1,
  }
}
```
2. Example of CORS
```javascript
var corsDefault = {
    origin: '*',
    methods:'GET, POST, OPTIONS',
    allowedHeaders: 'Content-Type'
}
```
3. Example of Server Implementation
4. Example of Client Implementation

![image](https://user-images.githubusercontent.com/72493335/145279617-1fc89085-61e1-4d0e-8ae1-5be04e147bed.png)

<p align="right">(<a href="#top">▲</a>)</p>

# Server Features/Roadmap

- [ ] Complete Implementation 
- [ ] Pass all tests
- [ ] Communicate with Client
- [ ] CORS
- [x] Install Express
- [x] GET, PUT, POST, DELETE

# Client Features/Roadmap

- [ ] Complete Implementation
- [ ] Pass all tests
- [x] Create README.md
- [x] Create React UI
- [x] Style with Tailwind CSS


<div align="left">

## Built Using

* [React.js](https://reactjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Express.JS](https://expressjs.com/)
* [GitPod IDE](https://gitpod.io)
</div>

<p align="right">(<a href="#top">▲</a>)</p>

<div id="bottom"></div>
