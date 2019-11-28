import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.page.html',
  styleUrls: ['./http.page.scss'],
})
export class HttpPage implements OnInit {

  constructor(private http: HttpClient) {

    console.log(this.http.get('http://ionic.io', { }));
    this.http.get('https://api.androidhive.info/contacts/').subscribe((response) => {
      console.log(response);
  });
    // this.http.get('http://ionic.io', {}, {})
    //   .then(data => {

    //     console.log(data.status);
    //     console.log(data.data); // data received by server
    //     console.log(data.headers);

    //   })
    //   .catch(error => {

    //     console.log(error.status);
    //     console.log(error.error); // error message as string
    //     console.log(error.headers);

    //   });
  }

  onClick() {
    alert('clicked');
  }

  ngOnInit() {
  }

}
