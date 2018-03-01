# README

This is what is available for so far. Built with a Rails back end, using React and React/Redux to handle client-side behavior. Database is PosgreSQL accessed through ActiveRecord (Rails).

Logic for the survey is contained in the folder named `app`. Client-side code is contained in `./app/javascript` folder.

The database schema is contained in `db` folder.

Required technologies: `yarn`, and `bundler` from homebrew.

Build to run with OSX development platform

To start in development, run the following commands in terminal:
1) `bundle install`
2) `rails db:create`
3) `rails db:migrate`
4) `rails db:seed`
5) `yarn install`
6) `rails s`
7) `./bin/webpack-dev-server`

Once the above commands are run, visit `localhost:3000` to view current application.
