import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-blessing-of-valor',
  standalone: true,
  imports: [
    //Components
    CardModule,
    InputNumberModule,
    TooltipModule,
    DividerModule,

    //Utilities
    FormsModule,
    ReactiveFormsModule,
    CommonModule ],
  templateUrl: './blessing-of-valor.component.html',
  styleUrl: './blessing-of-valor.component.css'
})
export class BlessingOfValorComponent implements OnInit {

  iBovAmount: number = 0; //Blessing of Valor
  iFovAmount: number = 0; //Fragment of Valor → 1:5
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
    this.iFovAmount = 0, this.iBovAmount = 0;

    if (iCurrentLevel >= 0 && iCurrentLevel < iAimedLevel) {
      if (iCurrentLevel < 400)
        this.iFovAmount = ((iAimedLevel > 400 ? 400 : iAimedLevel)-iCurrentLevel)*(iCurrentLevel+(iAimedLevel > 400 ? 400 : iAimedLevel)+1);

      if (iAimedLevel > 400)
        this.iBovAmount = (iAimedLevel * iAimedLevel + iAimedLevel) - ((iCurrentLevel < 400 ? 400 : iCurrentLevel) * (iCurrentLevel < 400 ? 400 : iCurrentLevel) + (iCurrentLevel < 400 ? 400 : iCurrentLevel));
      // return this.iBovAmount;
    }
    else {
      return `Current level must be above zero and lower than the target level.`;
    }
		return;
  }



}
