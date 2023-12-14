import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OpenaiPlaygroundComponent } from './openai-playground/openai-playground.component';
import { OpenaiPresetComponent } from './openai-preset/openai-preset.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenaiPlaygroundComponent,
    OpenaiPresetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
