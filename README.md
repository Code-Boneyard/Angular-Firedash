# Angular 9 Material Firestarter 
## Client-Dashboard

Client dashboard starter project using Angular 9, Firestore and Material

Live Demo: https://www.angular-firestarter.netlify.com

## Features
Angular 9.x + Firebase
OAuth and Email/Password Signup with Firebase
Drag & drop Kanban demo with Firestore

        if (isAwesome){
          return true
        }

## Usage
Rund
git clone https://github.com/max-geller/angular-9-material-firestarter-client-dashboard.git firestarter
cd firestarter
npm install
Create a project at https://firebase.google.com/ and grab your web config:


Add the config to your Angular environment

src/environments/
Update the environment.prod.ts and environment.ts files.

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
Run ng serve
