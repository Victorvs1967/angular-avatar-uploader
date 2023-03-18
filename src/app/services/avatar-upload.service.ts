import { environment } from './../../environments/environment';
import { finalize, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FileUpload } from '../models/file-upload.model';

@Injectable({
  providedIn: 'root'
})
export class AvatarUploadService {

  constructor(
    private db: AngularFireDatabase,
    private storage: AngularFireStorage,
  ) { }

  pushFileToStorage(fileUpload: FileUpload): Observable<number | undefined> {

    const filePath = environment.filePath.concat('/', fileUpload.file.name);
    const storagRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges()
      .pipe(
        finalize(() =>
          storagRef.getDownloadURL()
            .subscribe(downloadURL => {
              fileUpload.url = downloadURL;
              fileUpload.name = fileUpload.file.name;
              this.saveFileData(fileUpload);
            })
        )
      )
      .subscribe();

    return uploadTask.percentageChanges();
  }

  getFiles(numberItems: number): AngularFireList<FileUpload> {
    return this.db.list(environment.filePath, ref => ref.limitToLast(numberItems));
  }

  deleteFile(fileUpload: FileUpload): void {
    this.deleteFileDatabase(fileUpload.id ?? '')
      .then(() => this.deleteFileStorage(fileUpload.name ?? ''))
      .catch(error => console.log(error));
  }

  private saveFileData(fileUpload: FileUpload): void {
    this.db.list(environment.filePath).push(fileUpload);
  }

  private deleteFileDatabase(id: string): Promise<void> {
    return this.db.list(environment.filePath).remove(id);
  }

  private deleteFileStorage(name: string): void {
    const storageRef = this.storage.ref(environment.filePath);
    storageRef.child(name).delete();
  }

}
