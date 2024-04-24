import { Routes } from '@angular/router';
import { PokemonsComponent } from './features/pokemons/pokemons.component';
import { CartComponent } from './features/cart/cart.component';
import { DetailsComponent } from './features/pokemons/details/details.component';

export const routes: Routes = [
    {path: '', redirectTo: '/pokemons', pathMatch: 'full'},
    {path: 'pokemons', component: PokemonsComponent},
    {path: 'pokemon-details', component: DetailsComponent},
    {path: 'cart', component: CartComponent}
];
