import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, map } from "rxjs";

@Injectable({providedIn: "root"})
export class PokemonService{ 
    private readonly _http= inject(HttpClient);
    
    getAllPokemons():Observable<any> {
        return this._http.get<any>("https://pokeapi.co/api/v2/pokemon?limit=151");
    }
    getPokemon(name:string | undefined):Observable<any>{
        return this._http.get<any>("https://pokeapi.co/api/v2/pokemon/" + name)
    }
}