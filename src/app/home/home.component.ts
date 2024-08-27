import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { FieldsetModule } from 'primeng/fieldset';
import { ProgressSpinnerModule } from 'primeng/progressspinner'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FieldsetModule,
    AvatarModule,
    ProgressSpinnerModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
