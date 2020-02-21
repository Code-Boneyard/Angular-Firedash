# Angular 9 Material Firestarter 
## Client-Dashboard

Client dashboard starter project using **Angular 9, Firestore** and **Material**

Live Demo: https://www.angular-firestarter.netlify.com

## Features
- [x] Angular 9.x + Firebase
- [x] OAuth and Email/Password Signup with Firebase
- [x] Drag & drop Kanban demo with Firestore


## Usage
1. Clone from Git and install dependencies
        git clone https://github.com/max-geller/angular-9-material-firestarter-client-dashboard.git firestarter
        cd firestarter
        npm install

2. Create a project at https://firebase.google.com/ and grab your web config.  

3. Add the config to your Angular environment in 'src/environments/' and update the environment.prod.ts and environment.ts files.

        export const environment = {
          production: false,
          firebase: {
            apiKey: 'APIKEY',
            authDomain: 'DEV-APP.firebaseapp.com',
            databaseURL: 'https://DEV-APP.firebaseio.com',
            projectId: 'DEV-APP',
            storageBucket: 'DEV-APP.appspot.com',
            messagingSenderId: '...',
            appId: '...',
          }
        };
4. Serve project and navigate to localhost:4200
        ng serve -o


*2020 Max Geller*


