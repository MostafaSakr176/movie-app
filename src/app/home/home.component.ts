import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imgPrefix:string = 'https://image.tmdb.org/t/p/w500/';

  trendingMovies:any[] = [];

  trendingTV:any[] = [];

  trendingPeople:any[] = [];

  constructor(private _MoviesService:MoviesService) {
    this._MoviesService.getData('movie').subscribe((response)=>{
      this.trendingMovies = response.results.slice(0,10) ;
    })

    this._MoviesService.getData('tv').subscribe((response)=>{
      this.trendingTV = response.results.slice(0,10) ;
    })

    this._MoviesService.getData('person').subscribe((response)=>{
      this.trendingPeople = response.results.slice(0,10) ;
    })
  }


  ngOnInit(): void {
  }

}
