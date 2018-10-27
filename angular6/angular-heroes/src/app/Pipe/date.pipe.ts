import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormater'
})

export class TimeFormater implements PipeTransform {
  transform(timeObj): String {
    const time = new Date(timeObj);
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const day = time.getDate();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const secend = time.getSeconds();
    return `${year}/${month}/${day} ${hour}:${minute}:${secend}`;
  }
}
