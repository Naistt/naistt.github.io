import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blessing-of-valor',
  standalone: true,
  imports: [
    //Components
    CardModule,
    InputNumberModule,

    //Utilities
    FormsModule,
    ReactiveFormsModule,
    CommonModule ],
  templateUrl: './blessing-of-valor.component.html',
  styleUrl: './blessing-of-valor.component.css'
})
export class BlessingOfValorComponent implements OnInit {

  iBovAmount: number = 0;
  formBov!: FormGroup;

  ngOnInit(): void {
    this.formBov = new FormGroup({
      iCurrentLevel: new FormControl(0),
      iAimedLevel: new FormControl(0),
    });
  }

  getBovNeeded() {
    let iCurrentLevel = this.formBov.get('iCurrentLevel')?.value;
    let iAimedLevel = this.formBov.get('iAimedLevel')?.value;

    if (iCurrentLevel >= 0 && iCurrentLevel < iAimedLevel) {
      this.iBovAmount = (iAimedLevel * iAimedLevel + iAimedLevel) - (iCurrentLevel * iCurrentLevel + iCurrentLevel);
      return this.iBovAmount;
    }
    else {
      return `Current level must be above zero and lower than the target level.`;
    }
		
  }



}
