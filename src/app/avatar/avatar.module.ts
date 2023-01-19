import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { AvatarComponent } from './avatar.component';
import { MaterialUiModule } from '../material-ui/material-ui.module';

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
