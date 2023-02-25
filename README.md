# Task Manager - A Simple Todo Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Task Manager is a simple ToDo application built with React and Firebase. It allows you to create, and delete tasks, and marks them as complete when you're done. The application is easy to use and provides a clean and simple interface.

## Built with

- ReactJS
- Firebase

## Demo

Check out the [project](https://www.appname.netlify.app) and see it in action!

## Getting Started

### Prerequisites

To run Task Manager, you'll need to have the following software installed on your machine:

- Node.js
- NPM

### Installing

To get started, follow these steps:

1.  Clone the repository:

```node
git clone https://github.com/dboatengg/task-manager.git
```

2.  Install the dependencies:

```node
npm install
```

3.  Set up Firebase:

- Create a new Firebase project and enable Firestore.
- Copy Firebase configuration settings into a JavaScript file `firebase.js` within the `src` directory of the project:

```env
REACT_APP_FIREBASE_API_KEY=<your_api_key> REACT_APP_FIREBASE_AUTH_DOMAIN=<your_auth_domain> REACT_APP_FIREBASE_PROJECT_ID=<your_project_id> REACT_APP_FIREBASE_STORAGE_BUCKET=<your_storage_bucket> REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<your_messaging_sender_id> REACT_APP_FIREBASE_APP_ID=<your_app_id>
```

4.  Start the application:

```node
npm run dev
```

The application should now be running on [http://localhost:3000](http://localhost:3000/).

## Contributing

If you'd like to contribute to Task Manager, feel free to fork the repository and submit a pull request.

## Author

- GitHub: [dboatengg](https://www.github.com/dboatengg)
- Twitter: [alege_dev](https://www.twitter.com/alege_dev)
- Instagram: [alege_dev](https://www.instagram.com/alege_dev)

## License

This project is licensed under the MIT License - see the [LICENSE](https://chat.openai.com/LICENSE) file for details.
