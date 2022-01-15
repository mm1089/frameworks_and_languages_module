<div id="top"></div>

<!-- Allan's module -->
<br />
<div align="center">
  <a href="https://github.com/mm1089/frameworks_and_languages_module">
  </a>

<h2 align="center">Frameworks and Languages Module</h2>
  <h4 align="center">Michael J. McLain</h4>
  <h4 align="center">Software Engineering</h4>
  <h5 align="center">Module Leaders: Allan Callaghan @caladees , Gordon Aiken</h5>
  <h5>January 14, 2022</h5>

  <a align="center" href="https://github.com/mm1089/frameworks_and_languages_module"><strong>[View Code]</strong></a>
  <br/>
  <a align="center" href="https://github.com/mm1089/frameworks_and_languages_module/commits/main"><strong>[View Commit History] </strong></a>
</div>


<!-- TOC start -->

#### Table of Contents

- [Requirements](#requirements)
- [How to Run](#how-to-run)
- [How to Test](#how-to-test)
- [Roadmap](#roadmap)
- [Examples](#examples)
<!-- TOC end -->



## Requirements

</div>

<div align="left">

The [Repo](https://github.com/calaldees/frameworks_and_languages_module/) provides:
<h5>• A reference server implementation that runs in a container.</h5>
<h5>• An automated test container that tests the server implementation.</h5>
<h5>• The Tests run as GitHub actions as part of Continuous Integration (CI).</h5>
<h5>• A reference client implementation (that uses the OpenAPI3 service server container).</h5>
<h5>• A set of cypress tests, to document the expected client/user flows.</h5>
</div>




## How to Run

This is an example of how you deploy my project.
To get a local copy up and running follow these simple example steps.

1. [Clone the repo](https://github.com/mm1089/frameworks_and_languages_module)
2. `cd client/`
3. `make client` for client
4. `cd ..`
5. `cd server/`
6. `make server` for server
7. `cd ..`
8.  `make client`
9.  `make server`

## How to Test

This is an example of how you run the tests against the specification
To run the tests follow these simple example steps.

1.  `cd server_test/`
2.  `pip install pytest` [Only needed once]
3.  `pytest test_api.py`
4.  `pytest test_api.py --pdb`

<p align="right">(<a href="#top">▲</a>)</p>

### Built Using

* [React.js](https://reactjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Express.JS](https://expressjs.com/)
* [Cors](https://www.npmjs.com/package/cors)
* [GitPod IDE](https://gitpod.io)
* [VSCode](https://vscode.com)


### Roadmap

- [ ] DELETE ITEM
- [x] GET ALL ITEMS
- [x] GET SINGLE ITEM
- [x] POST ITEM
- [x] Fetch Request
- [x] Client UI


### Examples

Fully responsive design built with user accessibility in mind

![Hnet-image](https://user-images.githubusercontent.com/72493335/149628764-7c414e09-dfac-44d4-82f6-796b5440188f.gif)

Successful fetch request from Express Server, as demonstrated by the array of Items.Js in the client side Console

<img src="https://user-images.githubusercontent.com/72493335/148648492-e4539696-acda-49a3-a75f-5b25e1b8352d.png" width=75% height=75%/>

Demonstration of Item Object Cards that are fully responsive

<img src="https://user-images.githubusercontent.com/72493335/149628169-b63063c3-a3ad-4ae1-b24e-93b2ec5db9e7.png" width=50% height=50%/>


<p align="right">(<a href="#top">▲</a>)</p>

<div id="bottom"></div>
