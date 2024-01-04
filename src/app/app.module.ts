import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {TagInputModule} from 'ngx-chips';

import { AppComponent } from './app.component';
import { OpenaiPlaygroundComponent } from './openai-playground/openai-playground.component';
import { OpenaiPresetComponent } from './openai-preset/openai-preset.component';
import { 
  NbThemeModule, 
  NbLayoutModule, 
  NbCardModule, 
  NbSelectModule 
} from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent,
    OpenaiPlaygroundComponent,
    OpenaiPresetComponent
  ],
  imports: [
    BrowserModule, 
    NbThemeModule.forRoot(), 
    NbLayoutModule, 
    NbCardModule, 
    NbSelectModule, 
    TagInputModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
