APP_NAME := my-app

css:
	rm -f my-app/src/App.css
	sass ${APP_NAME}/src/scss/main.scss ${APP_NAME}/src/App.css

start: css
	cd my-app && npm start

build: css
	cd my-app && npm run build

deploy: build
	aws s3 rm s3://victoriaywong.com --recursive --profile=aseaman
	aws s3 cp --recursive my-app/build/ s3://victoriaywong.com --profile=aseaman --acl=public-read

.PHONY: css start build deploy
