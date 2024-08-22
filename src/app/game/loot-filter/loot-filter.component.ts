import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { LootService } from '../../../service/lootservice';
import { World } from '../../../model/world.model';
import { DividerModule } from 'primeng/divider';
import { Table, TableModule } from 'primeng/table';
import { Dungeon } from '../../../model/dungeon.model';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-loot-filter',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MultiSelectModule,
    DividerModule,
    TableModule,
    ButtonModule
  ],
  templateUrl: './loot-filter.component.html',
  styleUrl: './loot-filter.component.css',
  providers: [LootService]
})
export class LootFilterComponent implements OnInit {
  formLootFilter!: FormGroup;
  worlds!: World[];
  bossesType!: any[];
  bossesElements!: any[];
  allLoot!: any[];
  allLootFiltered!: any[];

  searchValue: string | undefined;
  loading: boolean = false;

  @ViewChild('lootTable') dt: Table | undefined;

  teste: any[] = [
    { label: 'Teste 1', value: 'Teste 1' },
    { label: 'Teste 2', value: 'Teste 2' },
  ];


  constructor(private lootService: LootService) {
    
  }

  ngOnInit(): void {
    this.formLootFilter = new FormGroup({
      // worlds: new FormControl(''),
      // bossesType: new FormControl(''),
      // bossesElements: new FormControl(''),
      filterLootFrmCtrl: new FormControl('')
    });

    this.allLoot = this.lootService.getLootsData();//.then((data) => (this.allLoot = data));
    this.allLootFiltered = this.allLoot;

    console.log(this.allLoot)
    this.lootService.getAllWorlds().then((data) => (this.worlds = data));
    this.lootService.getBossesType().then((data) => (this.bossesType = data));
    this.lootService.getBossesElement().then((data) => (this.bossesElements = data));
    
  }

  getDungeonLoot(loots: any) {
    return loots.map((e: any) => e.name).join(', ');
  }

  clear(table: Table) {
    table.clear();
    this.searchValue = ''
  }

  
  // applyFilterGlobal($event: any, stringVal: any) {
  //   console.log($event)
  //   console.log(stringVal)
  //   this.dt!.filterGlobal($event.target.value, stringVal); 
  // }
}
