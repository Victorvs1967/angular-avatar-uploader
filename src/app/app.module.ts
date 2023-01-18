import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvatarComponent } from './avatar/avatar.component';
import { MaterialUiModule } from './material-ui/material-ui.module';
import { ImageCropperComponent } from './avatar/image-cropper/image-cropper.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    ImageCropperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
