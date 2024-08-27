import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { LootService } from '../../../service/lootservice';
import { World } from '../../../model/world.model';
import { DividerModule } from 'primeng/divider';
import { Table, TableModule } from 'primeng/table';
import { Dungeon } from '../../../model/dungeon.model';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FilterMatchMode, FilterService, SelectItem } from 'primeng/api';

@Component({
  selector: 'app-loot-filter',
  standalone: true,
  imports: [
    CommonModule,
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
  matchModeOptions!: SelectItem[];
  bossesType!: any[];
  bossesAttributes!: any[];
  allLoot!: any[];
  allLootFiltered!: any[];

  searchValue: string | undefined;
  loading: boolean = false;

  @ViewChild('lootTable') dt: Table | undefined;

  teste: any[] = [
    { label: 'Teste 1', value: 'Teste 1' },
    { label: 'Teste 2', value: 'Teste 2' },
  ];


  constructor(private lootService: LootService,
              private filterService: FilterService) {
    
  }

  ngOnInit(): void {
    this.formLootFilter = new FormGroup({
      // worlds: new FormControl(''),
      // bossesType: new FormControl(''),
      // bossesAttributes: new FormControl(''),
      filterLootFrmCtrl: new FormControl('')
    });

    this.allLoot = this.lootService.getLootsData();//.then((data) => (this.allLoot = data));
    this.allLootFiltered = this.allLoot;

    console.log(this.allLoot)
    this.lootService.getAllWorlds().then((data) => (this.worlds = data));
    this.lootService.getBossesType().then((data) => (this.bossesType = data));
    this.lootService.getBossesAttribute().then((data) => (this.bossesAttributes = data));
    

    // CUSTOM FILTER FOR LOOT
    // This was specially written because 'loot' is an array.
    const customLootFilterName = 'custom-loot-filter';
    this.filterService.register(customLootFilterName, (value: any, filter: any): boolean => {

      // filter is always the string given by the user
      // value is always the string we're searching for
      if (filter === undefined || filter === null || filter.trim() === '') {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }

      for (let i of value) {
        if (i.name === undefined) {
          i.name = ''; // handling "name is undefined" error
          continue;
        }

        if (i.name.toString().toLowerCase().includes(filter.toString().toLowerCase()))
          return true;
        else
          continue;
      }
      return false;
    });
    this.matchModeOptions = [
      { label: 'Custom Equals', value: customLootFilterName }
    ];

    // END CUSTOM FILTER FOR LOOT
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
