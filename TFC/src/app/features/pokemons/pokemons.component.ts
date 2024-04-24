import { Component, inject, input } from '@angular/core';
import { PokemonService } from '../../api/pokemon.service';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [RouterLink, AsyncPipe, DetailsComponent],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css',
})
export class PokemonsComponent {
  pokemons: any[] = [];
  pokemonElegido: string | undefined;
  public hijoLlama: boolean = false;
  constructor(private readonly srvPokemon: PokemonService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.srvPokemon.getAllPokemons().subscribe((data) => {
      console.log(data);
      this.pokemons = data.results;
      this.pokemons.forEach((pokemon) => {
        this.srvPokemon.getPokemon(pokemon.name).subscribe((data) => {
          pokemon.img = data.sprites.front_default;
        });
      });
    });
  }
  public elegirPokemon(name: string) {
    this.pokemonElegido = name;
  }
  public eventoOutput(event: boolean): void {
    this.hijoLlama = event;
    console.log('hijo llama?????', this.hijoLlama);
  }
}
