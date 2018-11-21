import { Injectable } from '@angular/core';
const fs = require('fs');

@Injectable({
  providedIn: 'root'
})
export class UploadLocalService {

  constructor() { }

  /**
   * 检测目录是否存在
   * @param directory 目录路径
   */
  checkDirectory(directory) {
    fs.exists(directory, function(exists) {
      return exists ? true : false;
    });
  }

  /**
   * 创建目录
   * @param createPath 目录地址
   */
  async createDirectory(createPath) {
    return new Promise((resolve) => {
      fs.mkdir(createPath, function(err) {
        if (err) {
          resolve(false);
        }
        resolve(true);
      });
    });
  }

  /**
   * 获取文件base64编码
   * @param file 文件
   */
  async getBase64(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (function (oFile) {
        return function (e) {
          resolve(this.result);   // base64数据
        };
      })(file);
      reader.readAsDataURL(file);
    });
  }

  /**
   * 写入文件
   * @param base64 文件base64编码
   * @param writePath 写入路径
   * @param fileName 文件名
   */
  async createFile(base64, writePath, fileName) {
    return new Promise((resolve) => {
      fs.writeFile(writePath + fileName, base64, function(err) {
        if (err) {
          resolve(false);
        }
        resolve(writePath + fileName);
      });
    });
  }

  /**
   * 以真实路径上传
   * @param filePath 文件真实路径
   */
  async dropUpload(filePath, writePath, fileName) {
    fs.readFile(filePath, async (err, originBuffer) => {            // 读取图片位置（路径）
      const base64Img = originBuffer.toString('base64');                // base64 图片编码
      const decodeImg = Buffer.from(base64Img, 'base64');                 // Buffer.from(string, encoding)
      const result = await this.createFile(decodeImg, writePath, fileName);
      return result;
    });
  }

}
