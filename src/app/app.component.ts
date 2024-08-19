import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuModule } from './menu/menu.module';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { BlessingOfValorComponent } from './game/blessing-of-valor/blessing-of-valor.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    //modules
    MenuModule,

    //components
    FooterComponent,
    BlessingOfValorComponent,
    
    // utilities
    RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gc-kakao-guide';
}
