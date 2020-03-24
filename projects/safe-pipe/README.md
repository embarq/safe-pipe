# SafePipe

Resolve your safe content with Angular SafePipe [(Demo)](https://stackblitz.com/edit/safe-pipe-examples)

[![NPM](https://nodei.co/npm/safe-pipe.png?downloads=true)](https://nodei.co/npm/safe-pipe/)

## Installation

1. Install the package via `npm install safe-pipe` or `yarn add safe-pipe`
2. Add `SafePipeModule` module to `NgModule.imports`.

E.g.

```ts
@NgModule({
  imports: [ SafePipeModule ]
})
export class AppModule { }
```

## Usage

The `SafePipe` pipe accepts a value and sanitization type. 

```html
<elem [prop]="value | safe: sanitizationType"></elem>
```

You can sanitize any resource type supported by [DomSanitizer](https://angular.io/api/platform-browser/DomSanitizer).

Supported sanitization types:

- `'html'` - uses `DomSanitizer.bypassSecurityTrustHtml` [(docs)](https://angular.io/api/platform-browser/DomSanitizer#bypassSecurityTrustHtml)
- `'style'` - uses `DomSanitizer.bypassSecurityTrustStyle` [(docs)](https://angular.io/api/platform-browser/DomSanitizer#bypasssecuritytruststyle)
- `'script'` - uses `DomSanitizer.bypassSecurityTrustScript` [(docs)](https://angular.io/api/platform-browser/DomSanitizer#bypasssecuritytrustscript)
- `'url'` - uses `DomSanitizer.bypassSecurityTrustUrl` [(docs)](https://angular.io/api/platform-browser/DomSanitizer#bypasssecuritytrusturl)
- `'resourceUrl'` - uses `DomSanitizer.bypassSecurityTrustResourceUrl` [(docs)](https://angular.io/api/platform-browser/DomSanitizer#bypasssecuritytrustresourceurl)

Full usage example:

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
    <div [style.background-image]="'url(' + pictureUrl + ')' | safe: 'style'" class="pic bg-pic"></div>
    <img [src]="pictureUrl | safe: 'url'" class="pic" alt="Logo">
    <iframe [src]="catVideoEmbed | safe: 'resourceUrl'" width="640" height="390"></iframe>
    <pre [innerHTML]="htmlContent | safe: 'html'"></pre>
  `,
  styles: [
    `.pic { display: inline-block; width: 320px; }`,
    `.bg-pic { padding-top: 320px; }`
  ]
})
export class AppComponent {
  public htmlContent: string = `<h1>Lorem ipsum dolor sit amet.</h1>`;
  public pictureUrl: string = `https://angular.io/assets/images/logos/angular/angular.svg`;
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
