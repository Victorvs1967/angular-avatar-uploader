import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCropperComponent } from './components/image-cropper/image-cropper.component';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { AvatarComponent } from './components/avatar.component';

@NgModule({
  declarations: [
    AvatarComponent,
    ImageCropperComponent,
  ],
  imports: [
    CommonModule,
    MaterialUiModule,
  ],
  exports: [
    AvatarComponent,
  ],
})
export class AvatarModule { }
