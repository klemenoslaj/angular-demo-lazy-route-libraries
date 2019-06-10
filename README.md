⚠️⚠️⚠️<br>
**This is NOT the proposed solution to lazy load modules with Angular router! It is a demo for the Angular CLI issue mentioned further down in the README.**<br>
⚠️⚠️⚠️

**Official workaround**: https://github.com/angular/angular-cli/issues/6373#issuecomment-453006158

# DemoLazyRouteComponents

A workaround example to lazy load Angular CLI libraries within Angular CLI applications.

For more info please read the [comment](https://github.com/angular/angular-cli/issues/6373#issuecomment-451512534) in Angular CLI [issue](https://github.com/angular/angular-cli/issues/6373). 

## Run the application

Execute the following commands:  
- `git clone git@github.com:klemenoslaj/angular-demo-lazy-route-libraries.git && cd angular-demo-lazy-route-libraries`
- `npm install`
- `ng build lazy-component`
- `ng serve --aot` (_NOTE: the workaround only works with AOT enabled for now_)

> NOTE: if Angular CLI is not installed globally, run `npm run ng`  instead of `ng` only.
