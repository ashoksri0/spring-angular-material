import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  serverUrl: string = environment.BACKEND_URL;
  swaggerUI: string = `${environment.BACKEND_URL}/swagger-ui.html`;
  messageFromServer: string;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

    this.httpClient
      .get<string>(this.serverUrl + '/rest/hello')
      .subscribe(
      data => {this.messageFromServer = data['text']},
          error => console.log(error)
    );

  }
}
