import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../service/config.service';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {

  constructor( private configService: ConfigService) { }

  config: any;

  ngOnInit() {
    this.configService.getConfig().subscribe((data) => {
      this.config = {
        heroesUrl: data['heroesUrl'],
        textfile:  data['textfile']
      };
    });
  }

}
