import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewPetSit';
  inputPropertyValue: number = 10;

  receiveSizeValue(value: number) {
    this.inputPropertyValue = value;
  }
}
