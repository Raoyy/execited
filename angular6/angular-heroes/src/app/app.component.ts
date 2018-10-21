import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) { }

  title = 'angular-heroes';
  author = '饶银银';
  heros = [
    { id: 1, name: '战士' },
    { id: 2, name: '牧师' },
    { id: 3, name: '弓箭手' },
    { id: 4, name: '法师' }
  ];

  addHero(){
    let newHeros = [
      {id:5,name:"萌骑士"},
      {id:6,name:'兽娘'},
      {id:7,name:'刺客'}
    ]
    console.log(newHeros);
    this.heros = this.heros.concat(newHeros);
    console.log(this.heros);
  }

  setKey(index,obj): number{
    console.log(index,obj);
    return obj.id;
  }

  toRouter2():void{
    this.router.navigateByUrl("router2/2")
    // this.router.navigate(['router2'], {
    //   queryParams: {
    //       productId: '1',
    //       title: 'moon'
    //   }
    // });
  }
  
  ngOnInit(){
    this.logIt('onInit');
  }

  logIt(msg: string) {
    console.log(`${msg}`);
  }
    
}
