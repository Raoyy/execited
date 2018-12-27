import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router1',
  templateUrl: './router1.component.html',
  styleUrls: ['./router1.component.css']
})

export class Router1Component {
  timeNow = new Date();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  back() {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }
 }

