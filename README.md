# Angular FireDash
Featherweight administrative dashboard starter project using **Angular 9**, **Firestore** and **Material Design**.

Live Demo: https://www.angular-firedash.netlify.com

## Goals

* Enable developers to quickly create good-looking administration interfaces.
* Build a DSL for developers and an interface for businesses.
* Ensure that developers can easily customize every nook and cranny.

## To DO
- [ ] 'Reset Password' Workflow
- [ ] 'Email Verification' Workflow
- [ ] Implement AuthGuard
- [ ] Dynamic Notification Service
- [ ] Messaging Service


## Getting started

* Check out [the docs][docs].
* Try the [live demo][demo].
* The [wiki] includes links to tutorials, articles and sample projects.

## For enterprise

Active Admin for enterprise is available via the Tidelift subscription. [Learn
More][tidelift_enterprise].

## Need help?

## Slack Channel


Please use [StackOverflow][stackoverflow] for help requests and how-to questions.

Please open GitHub issues for bugs and enhancements only, not general help requests.
Please search previous issues (and Google and StackOverflow) before creating a new issue.

Google Groups, IRC #activeadmin and Gitter are not actively monitored.

## Want to contribute?

If you want to contribute through code or documentation, the [Contributing
guide is the best place to start][contributing]. If you have questions, feel free
to ask.

## Want to support us?

If you want to support us financially, you can [help fund the project
through a Tidelift subscription][tidelift_support]. By buying a Tidelift subscription
you make sure your whole dependency stack is properly maintained, while also
getting a comprehensive view of outdated dependencies, new releases, security
alerts, and licensing compatibility issues.

You can also support us with a weekly tip via [Liberapay].

Finally, we have an [Open Collective][opencollective page] where you can become a backer or
sponsor for the project, and also submit expenses to it.

## Dependencies

We try not to reinvent the wheel, so Active Admin is built with other open source projects:

Tool                  | Description
--------------------- | -----------
[Arbre]               | Ruby -> HTML, just like that.
[Devise]              | Powerful, extensible user authentication
[Formtastic]          | A Rails form builder plugin with semantically rich and accessible markup
[Inherited Resources] | Simplifies controllers with pre-built RESTful controller actions
[Kaminari]            | Elegant pagination for any sort of collection
[Ransack]             | Provides a simple search API to query your data

## Features
- [x] Angular 9
- [x] Google Firebase / Firestore / Cloud Functions
- [x] Material Design + Flex Layout
- [x] Google Charts

- What does this project do?
- Why is this project useful?
- How do I get started?
- Where can I get more help, if I need it?

## Usage
1. Clone from Git and install dependencies
        git clone https://github.com/max-geller/angular-9-material-firestarter-firedash.git firestarter
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

5. Feel free to contribute!

*2020 Max Geller*


[Arbre]: https://github.com/activeadmin/arbre
[Devise]: https://github.com/plataformatec/devise
[Formtastic]: https://github.com/justinfrench/formtastic
[Inherited Resources]: https://github.com/activeadmin/inherited_resources
[Kaminari]: https://github.com/kaminari/kaminari
[Ransack]: https://github.com/activerecord-hackery/ransack
[docs]: http://activeadmin.info/0-installation.html

[demo]: http://demo.activeadmin.info/admin
[wiki]: https://github.com/activeadmin/activeadmin/wiki
[stackoverflow]: http://stackoverflow.com/questions/tagged/activeadmin
[contributing]: https://github.com/activeadmin/activeadmin/blob/master/CONTRIBUTING.md
[Liberapay]: https://liberapay.com/Active-Admin/donate
[Tidelift security contact]: https://tidelift.com/security
[Greg]: https://github.com/gregbell
[contributors]: https://github.com/activeadmin/activeadmin/graphs/contributors
[opencollective page]: https://opencollective.com/activeadmin
[opencollective contributors]: https://opencollective.com/activeadmin#contributors
