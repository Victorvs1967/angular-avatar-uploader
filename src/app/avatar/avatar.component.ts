import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.sass']
})
export class AvatarComponent {

  file: string = '';

  constructor(private dialog: MatDialog) {}

  onFileChange(event: any) {
    const files = event.target.files as FileList;

    if (files.length > 0) {
      const _file = URL.createObjectURL(files[0]);
      this.file = _file;
      this.resetInput();
      this.openAvatarEditor(_file)
        .subscribe(
          result => 
          { if (result) this.file = result });
    }
  }

  resetInput() {
    const input = document.getElementById('avatar-input-file') as HTMLInputElement;
    if (input) input.value = '';
  }

  openAvatarEditor(image: string): Observable<any> {
    return this.dialog.open(ImageCropperComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      data: image,
    })
    .afterClosed();
  }
}
