# A complete Jenkinsfile example for frontend applications

## About

After working on developing the build pipelines for my company, I noticed how
modern building tools can help with the automation of important tasks in
frontend development

Frontend development works currently with the following technologies:
*   NodeJs
*   NPM
*   Eslint
*   Prettier

## Install dependencies

It is a common *but wrong* practice to install practices in CI pipelines using
the command:

  npm install

This is actually wrong, since npm install _may_ install a newer minor release
for either your dependencies and/or sub-dependencies. The best part is that
it also depends on the existing `package-lock.json`, if the packages will get
a minor release version upgrade or not.

In a nutshell: This ways it is possible that your build works on your developer
laptop but it fails to compile in jenkins, simply because `npm install` installed
a minor sub-dependency that had a breaking change.

In order to avoid this issue simple use

  npm ci

and add `package-lock.json` in GIT. Believe me, this is a life savior!

## Audit dependencies

There is no need for anything else than:

  npm audit --parseable --production

This way we are sure that main dependencies have no security issues


## Check linting

_Eslint is my favorite option for lint and format checks, since the
integration with IDEs and console command is _almost perfect_! 

