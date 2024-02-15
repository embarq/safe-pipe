# SafePipe

Resolve your safe content with Angular SafePipe ([Demo](https://stackblitz.com/edit/safe-pipe-examples-v3))

[![NPM](https://nodei.co/npm/safe-pipe.png?downloads=true)](https://nodei.co/npm/safe-pipe/)

## Compatibility

This package is compatible with angular >=17.

For angular >=13 use [safe-pipe@2.0.5-0](https://www.npmjs.com/package/safe-pipe/v/2.0.5-0).

For angular <13 use [safe-pipe@1.0.4](https://www.npmjs.com/package/safe-pipe/v/1.0.4)

## Installation

1. Install the package via `npm install safe-pipe` or `yarn add safe-pipe`
2. Add `SafePipe` standalone to `NgModule.imports`.

E.g. 
```ts
@NgComponent({
  standalone: true,
  imports: [ SafePipe ]
})
export class MyComponent { }
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

[🔗 Full usage example](https://stackblitz.com/edit/safe-pipe-examples-v3).

Here're the previous package's version examples:
- [Demo v2](https://stackblitz.com/edit/safe-pipe-examples-v2)
- [Demo v1](https://stackblitz.com/edit/safe-pipe-examples)

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
