import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent {
    @Input() sizeValue: number = 0;
    @Output() sizeValueChange = new EventEmitter<number>();
    @Output() outSizeValue = new EventEmitter<number>();
    ngModelValue: string = '';

    sendNumber(): Number {
        return 2 + 2;
    }

    constructor() {

    }

    onButtonClick(parameter: number) {
        if (parameter === 1) {
            this.sizeValue++;
        } else {
            this.sizeValue--;
        }

        this.outSizeValue.emit(this.sizeValue);
        this.sizeValueChange.emit(this.sizeValue);
        
        console.log(this.sizeValue);
    }
}
