import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FieldsetModule,
    AvatarModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
