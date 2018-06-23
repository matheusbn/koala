TIMEOUT = 3000

test:
	./node_modules/mocha/bin/mocha tests/*.test.js \
		--timeout $(TIMEOUT)

start:
	@NODE_ENV=development node app.js
