DOCKER_IMAGE:=server

build:
	docker build --tag ${DOCKER_IMAGE} .

run_local:
	node server.js


test:
	docker run --rm ${DOCKER_IMAGE}


	///DEBUG=myapp:* npm start