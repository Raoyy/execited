import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child1-component',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class ChildComponent implements OnChanges {

  constructor(private router: Router) {

  }

  @Input() hero: Object;
  @Output() myEvent = new EventEmitter<any>();
  childMsg: String  = 'this is child messege';
  num = 0;

  change(hero) {
  //  hero.name = `${hero.name} has clicked ${this.num++}`;       // 自身改变属性无法触发onchanges
    this.toRouter(hero);
    this.myEvent.emit(this.childMsg);             // 向父组件传参
  }

  toRouter(hero: Object): void {
     this.router.navigateByUrl(`heroes/hero-detail/${hero['id']}/${hero['name']}`);
    // this.router.navigate(['heroes/hero-detail'], {
    //   params: {
    //     hero: JSON.stringify(hero),
    //   },
    // });
  }

  ngOnChanges(changes: SimpleChanges) {    // 输入属性发生变化时才会调用
    console.log('ngOnChangesStart-----------------------------');
    for (const key in changes) {
      if (changes.hasOwnProperty(key)) {
        const element = changes[key];
        const cur  = JSON.stringify(element.currentValue);
        const prev = JSON.stringify(element.previousValue);
        console.log(`${key}: currentValue = ${cur}, previousValue = ${prev}`);
      }
    }
    console.log('ngOnChangesEnd-----------------------------');
  }
}
