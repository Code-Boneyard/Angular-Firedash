# :fire: Angular FireDash
Multi-Tenancy SaaS starter project using **Angular 9**, **Firestore** and **Material Design**.  This project aims to help Angular developers kickstart modern multi-tenancy SaaS applications using the latest development techniques with Firebase and Cloud Firestore.

Live Demo: :computer:  https://angular-firedash.netlify.com

![](https://firebasestorage.googleapis.com/v0/b/angular-material-firestarter.appspot.com/o/demo.PNG?alt=media&token=2a379f4d-e73d-40dc-ac39-00d8792a49af)

## Goals
* Modern Multi-Tenancy with Firestore
* Monorepo Workspace Management
* Full Authentication Workflow
* Typescript 
* Netlify JAM-Stack Approach
* Monorepo Workspace Management
* Modern User Experience :zap:



## Getting started

* Check out the [live demo][demo].
* Read through [the documentation][docs].
* Review the [wiki] for links to tutorials, articles and sample projects.
* Become a [Contributor][contributing]!
* Join the [Slack Team][slack]!

## Useful Commands

- `nx serve client` - starts a dev server and opens browser with running app

## Contributing
Want to start contributing to open source with Angular?

Leave your mark and join the growing team of contributors!

## Need help?

### Slack Channel

Please use [StackOverflow][stackoverflow] for help requests and how-to questions.

Please open GitHub issues for bugs and enhancements only, not general help requests.
Please search previous issues (and Google and StackOverflow) before creating a new issue.

## Want to contribute?

If you want to contribute through code or documentation, the [Contributing
guide is the best place to start][contributing] :pray:. If you have questions, feel free
to ask.


## Dependencies

We try not to reinvent the wheel, so Active Admin is built with other open source projects:

Tool / Version :floppy_disk:      | Description
--------------------- | -----------
NodeJS                | Ruby -> HTML, just like that.
NPM                   | Powerful, extensible user authentication
Angular CLI           | A Rails form builder plugin with semantically rich and accessible markup
AngularFire v5.5      | Simplifies controllers with pre-built RESTful controller actions
Material Design       | Elegant pagination for any sort of collection

Fork, Clone to Local Machine, 

## Features
- [x] Angular 9
- [x] Nrwl Monorepo Workspace Management
- [x] Firebase Firestore
- [x] Material Design
- [x] Flex Layout
- [x] NgRx State Management
- [x] SaaS Landing & Support Pages (HUGO)
- [x] Flex Layout
- [x] In-App Badge Notifications
- [x] SMS Push Notifications
- [x] Google Charts
- [x] Billing and Payments with Stripe





## Usage
1. Clone from Git and install dependencies
        git clone https://github.com/max-geller/angular-9-material-firestarter-firedash.git firestarter
        cd firestarter
        npm install

2. Create a project at https://firebase.google.com/ and grab your web config.  

3. Add the config :key: to your Angular environment in 'src/environments/' and update the environment.prod.ts and environment.ts files.

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


#### Continuous Integration

Starter project is using [Travis CI](https://travis-ci.org/) for running linters and tests on every commit.
Based on your preferences and needs you can either:

- not use / use other CI server and delete both `.travis.yml` and `.travis-deploy.sh`
- create Travis CI account and link it to your projects Github repo and [configure build](https://medium.com/@tomastrajan/continuous-deployment-of-client-side-apps-with-github-pages-travis-ci-10e9d641a889)
  with `GH_REF` and `GH_TOKEN` environment variables for automatic deployment of releases to Github Pages

## Make It Your Own

When using this starter project to build your own app you might consider some of the following steps:

- use `search and replace` functionality of your favourite IDE to replace `anms` with `<your-app-prefix>`
- rename project in `package.json` `name` property and set appropriate version (eg `0.0.0` or `1.0.0`)
- remove / rename context path config `-- --deploy-url /angular-ngrx-material-starter/ --base-href /angular-ngrx-material-starter` in `package.json`, this is used to configure url (context path) on which the application will be available (eg. `https://www.something.com/<context-path>/`)
- rename app in `/environments/` files (will be shown in browser tab)
- delete pre-existing `CHANGELOG.md` (you will generate your own with future releases of your features)
- delete `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md` and `BUILT_WITH.md` files as they are relevant only if project is open sourced on Github
- edit the title and Open Graph metadata properties in `index.html`
- remove or adjust links in the [footer](https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/src/app/app.component.html#L79)
- replace logo in `/assets` folder ( currently 128 x 128 pixel `png` file )
- adjust colors in `/themes/default-theme.scss`
- create a pull request in the [original repository](https://github.com/tomastrajan/angular-ngrx-material-starter/) to update `BUILT_WITH.md` [file](https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/BUILT_WITH.md) with a link and short description of your project



## To Do :calendar:
- [ ] 'User Registration' Workflow
- [ ] 'Reset Password' Workflow
- [ ] 'Email Verification' Workflow
- [ ] Implement AuthGuard
- [ ] Dynamic Notification/Icon Badge Service
- [ ] Messaging Service
- [ ] SMS Push Notifications


[demo]: http://angular-firedash.netlify.com
[docs]: http://activeadmin.info/0-installation.html
[wiki]: https://github.com/max-geller/Angular-Firedash/wiki
[stackoverflow]: http://stackoverflow.com/questions/tagged/angular-firedash
[slack]: https://angularfiredash.slack.com
[contributing]: CONTRIBUTING.md

