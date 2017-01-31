# Resolve your safe content with Angular SafePipe

[![NPM](https://nodei.co/npm/safe-pipe.png?downloads=true)](https://nodei.co/npm/safe-pipe/)

Install via npm

```bash
$ npm install --save safe-pipe
```

Usage example:

```ts
// app.module.ts

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

// app.component.ts

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
