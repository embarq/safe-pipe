import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="pic bg-pic" [style.background-image]="'url(' + pictureUrl + ')' | safe: 'style'"></div>
    <img class="pic" [src]="pictureUrl | safe: 'url'" alt="A Cat">
    <iframe width="640" height="390" [src]="catVideoEmbed | safe: 'resourceUrl'"></iframe>
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
