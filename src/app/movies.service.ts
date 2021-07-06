import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient ) { }

  getData(mediaType:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=20a5264c89ace7618f5907f624682a28`)
  }
  getMovieDetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=20a5264c89ace7618f5907f624682a28`)
  }
  getTvDetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=20a5264c89ace7618f5907f624682a28`)
  }
  getPersonDetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}?api_key=20a5264c89ace7618f5907f624682a28`)
  }
}
