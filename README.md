## Cooking book

## Setup

###1. System Requirements

* Globally installed [node](https://nodejs.org/en/) >= 4.0

* Globally installed [npm](https://www.npmjs.org/) >= 3.0

* Globally installed [rnpm](https://github.com/rnpm/rnpm) *(only if React Native version < 0.29)*

* Globally installed [react-native CLI](https://facebook.github.io/react-native/docs/getting-started.html)

* Install [CodePush](https://microsoft.github.io/code-push/) globally and get keys for your app.


###2. Installation

On the command prompt run the following commands

```sh
$ git clone https://github.com/DuyBui1993/cooking-book.git

$ cd cooking-book/

$ npm install
```

If React Native < 0.29

```sh
$rnpm link
```

If React Native >= 0.29

```sh
$ react-native link
```

[CodePush](https://github.com/Microsoft/react-native-code-push) plugin installation and key deployment.


###3. Simulate for iOS

**Method One**

*	Open the project in XCode from **ios/NativeStarterKit.xcodeproj**

*	Hit the play button.


**Method Two**

*	Run the following command in your terminal

```sh
$ react-native run-ios
```

###4. Simulate for Android

*	Make sure you have an **Android emulator** installed and running.

*	Run the following command in your terminal

```sh
$ react-native run-android
```
