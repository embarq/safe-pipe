import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { SafePipe } from "../../../safe-pipe/src/lib/safe-pipe.pipe";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SafePipe],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
