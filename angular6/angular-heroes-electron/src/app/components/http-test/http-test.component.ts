import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../service/config.service';
import { Config } from '../../service/config';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {

  constructor( private configService: ConfigService) { }

  config: any;
  headers: any;
  error: any;
  text: any;

  String: String;
  string: string;

  showConfigResponse() {
    this.configService.getConfigResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);
        // access the body directly, which is typed as `Config`.
        this.config = { ... resp.body };
        console.log(this.headers);
        console.log(this.config);
      });
  }

  showConfig() {
    this.configService.getConfig().subscribe((data) => {
      this.config = {
        heroesUrl: data['heroesUrl'],
        textfile:  data['textfile']
      };
    });
  }

  // 错误处理
  showConfigError() {
    this.configService.getConfig()
    .subscribe(
      (data: Config) => this.config = { ...data }, // success path
      error => {
        this.error = error;
        console.log(error);
      } // error path
    );
  }

  // 获取文本
  showText() {
    this.configService.getTextFile('assets/textfile.txt')
    .subscribe(
      (result) => this.text = result
    );
  }

  ngOnInit() {
    this.showText();
  }

}
