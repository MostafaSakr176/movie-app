import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent implements OnInit {

  imgPrefix:string = "https://image.tmdb.org/t/p/w500/";
  id:string = '';
  tvDetails:any = {};

  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService) { 
    this.id = _ActivatedRoute.snapshot.params.id ;
    _MoviesService.getTvDetails(this.id).subscribe((response)=>{
      console.log(response);
      this.tvDetails = response ;
    })
    
  }

  ngOnInit(): void {
  }

}
