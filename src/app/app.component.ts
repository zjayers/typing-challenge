import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  randomText: string = lorem.sentence();
  inputText:string = '';

  onInputChange(value: string): void {
    this.inputText = value;
  }

  getClassName(char:string , enteredLetter: string): string {
    if (!enteredLetter) {
      return 'pending';
    }
    return char === enteredLetter ? 'correct' : 'incorrect';
  }

}
