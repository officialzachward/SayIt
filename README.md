# 'SayIt' Prototype

This project is by Zachary Ward.

This project was started with the intention of exploring Angular. At my last internship,
I was exposed to Angular for the first time; naturally, I wanted to apply what I learned.
If you are interested in trying out this app, it should be currently deployed at:
`https://chatapp-39851.web.app/signup`

## Running this app locally

*NOTE*: You may notice a `firebase-config.js` mentioned in this codebase, even though it does
not exist in the repo. This is because I don't want you to have my firebase info!! If you
want to play with this locally, just note that you'll need to set up firebase *yourself*.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Building

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Deploying
Run `firebase init` to tell firebase what to deploy for you. Then, run `firebase deploy` to
deploy the relevant code to firebase! Note, you have to pay a few cents for this (Blaze pay as you go).

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
