import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) {}

  peticionPersonajesList(num: number) {

    return this.http.get("https://rickandmortyapi.com/api/character/?page=" + num);

  }

  peticionPersonaje(num: number) {

    return this.http.get("https://rickandmortyapi.com/api/character/" + num);

  }

  peticionBusquedaCustom(name: string) {

    return this.http.get("https://rickandmortyapi.com/api/character/?name=" + name);

  }

}
