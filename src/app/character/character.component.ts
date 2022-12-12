import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})

export class CharacterComponent implements OnInit {

  id: any = null;
  personaje: any = null;

  constructor(private http: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(
      params => {

        this.id = params['id'];

        }      
      
      );

    if (this.id != null) {

      this.http.peticionPersonaje(this.id).subscribe(

        result => {

          this.personaje = result;

        }

      );

    } 

  }

}
