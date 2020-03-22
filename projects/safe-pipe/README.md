# SafePipe

Resolve your safe content with Angular SafePipe

[![NPM](https://nodei.co/npm/safe-pipe.png?downloads=true)](https://nodei.co/npm/safe-pipe/)

Install via npm

```bash
npm install safe-pipe
```

or Yarn

```bash
yarn add safe-pipe
```

Usage example:

```ts
// @file app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SafePipeModule } from 'safe-pipe';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    SafePipeModule,
    BrowserModule
  ]
  bootstrap: [ AppComponent ]
})
export class AppModule { }

// @file app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div [style.background-image]="'url(' + catPictureUrl + ')' | safe: 'style'"></div>
    <img [src]="catPictureUrl | safe: 'url'" alt="A Cat">
    <iframe width="640" height="390" [src]="catVideoEmbed | safe: 'resourceUrl'"></iframe>
  `
})
export class AppComponent {
  public htmlContent: string = `<h1>Lorem ipsum dolor sit amet.</h1>`;
  public catPictureUrl: string = `https://www.petdrugsonline.co.uk/images/page-headers/cats-master-header`;
  public catVideoEmbed: string = `https://www.youtube.com/embed/QH2-TGUlwu4"`;
}
```

## Development

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

### Code scaffolding

Run `ng generate component component-name --project safe-pipe` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project safe-pipe`.
> Note: Don't forget to add `--project safe-pipe` or else it will be added to the default project in your `angular.json` file. 

### Build

Run `ng build safe-pipe` to build the project. The build artifacts will be stored in the `dist/` directory.

### Publishing

After building your library with `ng build safe-pipe`, go to the dist folder `cd dist/safe-pipe` and run `npm publish`.

### Running unit tests

Run `ng test safe-pipe` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
