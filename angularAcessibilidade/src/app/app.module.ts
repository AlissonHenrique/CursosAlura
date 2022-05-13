import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { YesNoButtonGroupModule } from './shared/components/yes-no-button-group/yes-no-button-group.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { keyboardManagerModule } from './shared/directives/keyboard-manager/keyboard-manager.module';
import { DisabelControlModule } from './shared/directives/disable-control/disabel-control.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    YesNoButtonGroupModule,
    ReactiveFormsModule,
    FormsModule,
    keyboardManagerModule,
    DisabelControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
