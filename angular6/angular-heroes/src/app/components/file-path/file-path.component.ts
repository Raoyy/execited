import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-path',
  templateUrl: './file-path.component.html',
  styleUrls: ['./file-path.component.css']
})
export class FilePathComponent implements OnInit {
  path: string;
  constructor() {
  }

  dragIn(ev) {
    const e = ev || event;
    const obj = e.dataTransfer.files;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const element = obj[key];
        this.path = element.path;
        console.log(element);
        console.log('File(s) you dragged here: ', element.path);
      }
    }
  }
  dragover(ev) {
    const e = ev || event;
    e.preventDefault();
    e.stopPropagation();
  }

  ngOnInit() {
  }

}
