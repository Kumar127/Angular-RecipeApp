import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  ShowText= false;
  counter = [];
  PageInfo ='recipe'
  emptyUsername() {
    this.username ='';
  }
  show() {
    this.ShowText = true;
    this.counter.push(new Date());
  }
  onNavigate(value) {
    this.PageInfo = value;
    
  }
}

