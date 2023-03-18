import { Component } from '@angular/core';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.sass']
})
export class FileListComponent {

  displayedColumns = [ 'image', 'name', 'action' ];
  dataSource: any = [];



}
