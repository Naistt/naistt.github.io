import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
  declarations: [ MenuComponent ],
  imports: [
    CommonModule,
    SidebarModule,
    ButtonModule,
    AvatarModule,
    RouterLink
  ],
  exports: [ MenuComponent ]
})
export class MenuModule { }
