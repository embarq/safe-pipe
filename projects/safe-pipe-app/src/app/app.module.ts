import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { SafePipeModule } from "../../../safe-pipe/src/lib/safe-pipe.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SafePipeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
