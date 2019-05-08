APP_NAME := my-app

css:
	rm -f my-app/src/App.css
	sass ${APP_NAME}/src/scss/main.scss ${APP_NAME}/src/App.css

start: css
	cd my-app && npm start

build: css
	cd my-app && npm run build

.PHONY: css start build
