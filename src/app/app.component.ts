import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  constructor(private http:HttpClient){
    
  }
  ngOnInit(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data:any)=>{
      console.log(data);
      this.title=data[0].name
    })
  }
}
