import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {

  imgPrefix:string = "https://image.tmdb.org/t/p/w500/";
  id:string = '';
  personDetails:any = {};

  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService) { 
    this.id = _ActivatedRoute.snapshot.params.id ;
    _MoviesService.getPersonDetails(this.id).subscribe((response)=>{
      console.log(response);
      this.personDetails = response ;
    })
    
  }

  ngOnInit(): void {
  }

}
