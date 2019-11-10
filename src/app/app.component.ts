import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>two way data binding in angular</h1>
  <br/>
  <input [value] = "name" (input) = 'name=$event.target.value'/>
  <br/>
  you have entered {{name}}
  <br/>
  <input [(ngModel)]="name1"/>
  <br/>
  you have entered {{name1}}
  `
  })
export class AppComponent  {
  name = 'harideep';
  name1 = 'hari';
}
