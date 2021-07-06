import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  imgPrefix:string = "https://image.tmdb.org/t/p/w500/";
  id:string = '';
  movieDetails:any = {};

  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService) { 
    this.id = _ActivatedRoute.snapshot.params.id ;
    _MoviesService.getMovieDetails(this.id).subscribe((response)=>{
      console.log(response);
      this.movieDetails = response ;
    })
    
  }

  ngOnInit(): void {
  }

}
