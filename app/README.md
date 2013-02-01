# Asha Web App with Brunch

## What's this?

S40 web apps are a lightweight application development framework for creating 
apps for low end Nokia devices (Asha series etc.). This provides an alternative workflow from editing raw html and javascript in the eclipse based IDE. 

Precompiled Jade templates and static .html assets, in addition to built in CoffeeScript support (and maybe sass/stylus soon?) can make Asha web app development faster and more fun (if you like this sort of thing).

## Caveat

This is an unfinished product and technology demo. It's only recommended for experienced developers that are comfortable with rough edges.

## Workflow 

- Run 'npm install' to get started
- Run "brunch watch"
- Import public/config.xml as project in Nokia Web Tools.
- Edit files under app/ directory (.jade, .coffee files get compiled automatically)
- When you want to test it out, allow NWT to refresh project files and run in local or cloud simulator
- You can also preview the project in normal browser ("brunch watch --server")


## Other resources

- See https://github.com/vivainio/webappuivisualization for ideas how to 
use Jade in S40 web apps

