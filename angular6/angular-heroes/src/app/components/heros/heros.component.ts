import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable  } from 'rxjs';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {

  }

  heros = [
    { id: 1, name: '战士' },
    { id: 2, name: '牧师' },
    { id: 3, name: '弓箭手' },
    { id: 4, name: '法师' },
  ];

  addHero(): void {
    const newHeros = [
      {id: 5, name: '萌骑士'},
      {id: 6, name: '兽娘'},
      {id: 7, name: '刺客'},
    ];
    console.log(newHeros);
    this.heros = this.heros.concat(newHeros);
    console.log(this.heros);
    this.pushevent().subscribe((number) => {
      console.log(number);
    });
  }

  fatherFun(msg): void {
    console.log('fatherFun------------------------', msg);
  }

  setKey(index, obj): number {
  //  console.log(index, obj);
    return obj.id;
  }

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.data);         // 此方式获取data中的数据
    // this.activatedRoute.snapshot.params                     //此方式可以直接获取动态匹配参数
  }

  pushevent() {
    return new Observable((observer) => {
      // synchronously deliver 1, 2, and 3, then complete
      observer.next(this.heros);
      observer.next(2);
      observer.next(3);
      observer.complete();
      // unsubscribe function doesn't need to do anything in this
      // because values are delivered synchronously
      return {unsubscribe() {}};
    });
  }

}
