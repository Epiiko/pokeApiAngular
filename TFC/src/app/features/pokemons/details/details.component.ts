import { Component, EventEmitter, Input, Output} from '@angular/core';
import { PokemonService } from '../../../api/pokemon.service';
import { PokemonsComponent } from '../pokemons.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [PokemonsComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {  
  @Input () public nombrePokemon:string | undefined = undefined;
  @Input () public hijoLlamaValue:boolean | undefined = undefined;
  @Output () public hijoLlama: EventEmitter<boolean> = new EventEmitter();
  constructor(private readonly srvPokemon: PokemonService) {}
  ngOnInit(): void {
    console.log(this.nombrePokemon);
    this.srvPokemon.getPokemon(this.nombrePokemon).subscribe(pokemon=>{
      console.log(pokemon);
      return pokemon;
    }) 
  }
  ngOnChanges(): void {
    console.log(this.nombrePokemon);
    this.srvPokemon.getPokemon(this.nombrePokemon).subscribe(pokemon=>{
      console.log(pokemon);
      return pokemon;
    }) 
  }
  public hijoLlamando(): void {
    if(this.hijoLlamaValue){
       this.hijoLlama.emit(false);
    }else{
      this.hijoLlama.emit(true);
    }
   
  }
}
