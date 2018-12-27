import { Component, OnInit } from '@angular/core';
import { ipcRenderer } from 'electron';
import * as path from 'path';
const fs = require('fs');

@Component({
  selector: 'app-file-path',
  templateUrl: './file-path.component.html',
  styleUrls: ['./file-path.component.css']
})
export class FilePathComponent implements OnInit {
  path: string;
  constructor() {
    ipcRenderer.on('index-minimize', (e, msg) => {
      // 监听主进程发来的事件...
      console.log('主进程', msg);
    });
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
        this.getPath(element.path);
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

  getPath(filePath) {
    // ipcRenderer.send('file', filePath);
    fs.readFile(filePath, function(err, originBuffer) {            // 读取图片位置（路径）
      console.log('isBuffer', Buffer.isBuffer(originBuffer));

      // tslint:disable-next-line:no-shadowed-variable
      fs.writeFile('E:/localImage/img2.jpg', originBuffer, function(err) {      // 生成图片2(把buffer写入到图片文件)
          if (err) {
              console.log('err-img2', err);
          }
      });

      const base64Img = originBuffer.toString('base64');                // base64 图片编码
      console.log(base64Img);

      const decodeImg = Buffer.from(base64Img, 'base64');                 // new Buffer(string, encoding)

      console.log(Buffer.compare(originBuffer, decodeImg));

      // tslint:disable-next-line:no-shadowed-variable
      fs.writeFile('E:/localImage/img3.jpg', decodeImg, function(err) {        // 生成图片3(把base64位图片编码写入到图片文件)
          if (err) {
              console.log('err-img3', err);
          }
      });
    });
  }

  getBase64(file) {
    console.log(file);
    let img = '';
    const reader = new FileReader();
    reader.onload = (function (oFile) {
      return function (e) {
         img = this.result;   // base64数据
      };
    })(file);
    reader.readAsDataURL(file);
    return img;
  }

  file($event) {
    const base64 = this.getBase64($event.target.files[0]);

    // const decodeImg = Buffer.from(base64Img, 'base64');                 // new Buffer(string, encoding)

    // console.log(Buffer.compare(base64, decodeImg));

    // fs.mkdir('localImage/imgs', function(err) {
    //   if (err) {
    //       return console.error(err);
    //   }
    //   console.log('目录创建成功');
    // });
    // fs.exists('localImage', function(exists) {
    //   console.log(exists ? '创建成功' : '创建失败');
    // });

    fs.writeFile('E:/localImage/img4.jpg', base64, function(err) {        // 生成图片3(把base64位图片编码写入到图片文件)
      if (err) {
        console.log('err-img4', err);
      }
    });
  }

}
