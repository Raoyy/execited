import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'router2',
  templateUrl: './router2.html',
  styleUrls: ['./router2.scss']
})
export class router2 {
  params : Object;
  constructor(private activatedRoute: ActivatedRoute,) {
    activatedRoute.queryParams.subscribe((queryParams)=>{
      this.params = queryParams;
    });
  }

  ngAfterViewInit(){
    console.log(this.activatedRoute.params['value']);
    console.log(this.params);
  }
}
