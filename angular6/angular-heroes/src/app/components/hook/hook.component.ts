import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy, SimpleChanges,
  AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-hook',
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.css'],
})
export class HookComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit,
OnDestroy {

  constructor() { }

  name = 'ryy';
  height = '178cm';
  changeMsg = '';
  logMsg = [];
  timeNow = new Date();

  keyup(type: ('name' | 'height'), val) {
    this[type] = val || '';
  }

  // 常用钩子
  ngOnChanges(changes: SimpleChanges) {    // 输入属性发生变化时才会调用
    this.logMsg.push('ngOnChangesStart-----------------------------');
    console.log(changes);
    this.logMsg.push('ngOnChangesEnd-----------------------------');
  }

  ngOnInit() {
    this.logMsg.push('ngOnInit-----------------------------');
  }

  ngOnDestroy() {
    this.logMsg.push('ngOnDestroy-----------------------------');
    console.log('ngOnDestroy-----------------------------');
  }

  // 不常用钩子
  ngDoCheck() {
    console.log(this);
    this.logMsg.push('ngDoCheck');
  }

  ngAfterContentInit() {
    this.logMsg.push('ngAfterContentInit');

  }

  ngAfterContentChecked() {
    this.logMsg.push('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.logMsg.push('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.logMsg.push('ngAfterViewChecked');
  }

}
