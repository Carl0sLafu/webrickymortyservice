import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-customsearch',
  templateUrl: './customsearch.component.html',
  styleUrls: ['./customsearch.component.css']
})
export class CustomsearchComponent {

  resultados: any = null;
  search: string = '';

  constructor(private http: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {

    this.route.queryParams.subscribe(
      params => {

          if (params['word'] != null) {

            this.search = params['word'];
            console.log(this.search);

          }

        }      
      
      );

    this.http.peticionBusquedaCustom(this.search.toLowerCase()).subscribe(

      result => {

        this.resultados = result;

      }

    );

  }

}
