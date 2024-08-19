import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlessingOfValorComponent } from './game/blessing-of-valor/blessing-of-valor.component';

export const routes: Routes = [
    //EN-US: All routes are defined here, but MenuComponent is the one using it
    //PT-BR: Todas as rotas são definidas aqui, mas o MenuComponent é onde elas são usadas
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'bov',
        component: BlessingOfValorComponent,
    }
];
