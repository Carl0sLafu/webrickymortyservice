import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit{

  personajes: any = null;
  page: number = 0;

  constructor(private http: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {

    this.route.queryParams.subscribe(
      params => {

          if (params['page'] == null || parseInt(params['page']) < 1 || parseInt(params['page']) > 42) {

            this.page = 1;

          } else {

            this.page = +params['page'];

          }

        }      
      
      );

      this.http.peticionPersonajesList(this.page).subscribe(

      result => {

        this.personajes = result;

      }

    );

  }

}
