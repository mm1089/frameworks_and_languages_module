DOCKER_IMAGE:=server


run_local: node_modules
	node app.js
node_modules:
	npm install

build:
	docker build --tag ${DOCKER_IMAGE} .
run:
	docker run --rm -it --publish 8000:8000 ${DOCKER_IMAGE}
run_shell:
	docker run --rm -it --publish 8000:8000 --entrypoint /bin/sh ${DOCKER_IMAGE}

clean:
	rm -rf \
		node_modules \
		package-lock.json