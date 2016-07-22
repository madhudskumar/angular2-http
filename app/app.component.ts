import { Component } from '@angular/core';
import  {Http, HTTP_PROVIDERS} from '@angular/http'

@Component({
  selector: 'my-app',
  providers:[HTTP_PROVIDERS],
  template: `
    <button (click)='getApiData()'>getApiData</button>
    {{data | json}}
    `
})
export class AppComponent { 
  name:string;
  data:any;
  constructor(private http:Http){
    this.name = 'hello world'
  }

  getApiData(){
    this.http.get("https://slack.com/api/api.test")
      .subscribe(res => {
        res = res.json();
        console.log(res);
        this.data = res;
      })
  }
}
