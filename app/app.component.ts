import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      <input type="text" [value]="name" (input)="handleChange($event.target.value)">
      <div *ngIf='name.length > 2'> 
        Searching fro... {{ name }} 
      </div>
      <template [ngIf]='name.length > 2'>
        <div> 
          For... {{ name }} 
        </div>
      </template>
    </div>
  `
})
export class AppComponent {
  title: string;
  name: string = "Avjol";
  logo: string = "img/logo.png";
  numberOne: number = 1;
  numberTwo: number = 2;
  constructor() {
    this.title = "Ultimate Angular";
  }

  handleChange(value: string) {
    this.name = value;
  }

  handleClick(value: string) {
    this.name = "Avjol Sakaj";
  }
}
