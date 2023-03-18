import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileDetailsComponent } from './components/file-details/file-details.component';
import { FileListComponent } from './components/file-list/file-list.component';
import { FileListRoutingModule } from './file-list-routing.module';
import { MaterialUiModule } from '../material-ui/material-ui.module';

@NgModule({
  declarations: [
    FileListComponent,
    FileDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialUiModule,
    FileListRoutingModule,
  ]
})
export class FileListModule { }
