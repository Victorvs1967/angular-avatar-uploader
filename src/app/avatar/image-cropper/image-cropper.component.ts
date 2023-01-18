import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import Cropper from 'cropperjs';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.sass']
})
export class ImageCropperComponent implements OnInit {

  cropper?: Cropper;
  sanitizedUrl: any;

  constructor(
    public dialogRef: MatDialogRef<ImageCropperComponent>,
    @Inject(MAT_DIALOG_DATA) public image: string,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl(this.image);
  }

  ngAfterViewInit(): void {
    this.initCropper();
  }

  initCropper(): void {
    const image = document.getElementById('image') as HTMLImageElement;

    this.cropper = new Cropper(image, {
      aspectRatio: 1,
      viewMode: 1,
      guides: false,
    });
  }

  getRoundedCanvas(sourceCanvas: any) {
    const canvas = document.createElement('canvas');
    const context: any = canvas.getContext('2d');
    const width = sourceCanvas.width;
    const height = sourceCanvas.height;

    canvas.width = width;
    canvas.height = height;
    context.imageSmoothingEnabled = true;
    context.drawImage(sourceCanvas, 0, 0, width, height);
    context.globalCompositeOperation = 'destination-in';
    context.beginPath();
    context.arc(
      width / 2,
      height / 2,
      Math.min(width, height) / 2,
      0,
      Math.PI * 2,
      true
    );
    context.fill();
    return canvas;
  }

  crop() {
    const croppedCanvas = this.cropper?.getCroppedCanvas();
    const roundedCanvas = this.getRoundedCanvas(croppedCanvas);

    let roundedImage = document.createElement('img');

    if (roundedCanvas) {
      this.dialogRef.close(roundedCanvas.toDataURL());
    } else {
      return this.dialogRef.close(null);
    }
  }

  reset() {
    this.cropper?.clear();
    this.cropper?.crop();
  }

}
