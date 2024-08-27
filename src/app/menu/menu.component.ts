import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  opened: boolean = false;
  items: MenuItem[] | undefined;

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Início',
        icon: 'pi-home',
        routerLink: '/'
      },
      {
        label: 'Bênção da Bravura',
        icon: 'pi-calculator',
        routerLink: '/bov'
      },
      {
        label: 'Filtro de Loot',
        icon: 'pi-filter',
        routerLink: '/loot-filter'
      }
    ]
  }

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e: Event): void {
    this.sidebarRef.close(e);
  }
}
