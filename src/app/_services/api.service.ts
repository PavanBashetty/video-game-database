import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { forkJoin, map, Observable } from "rxjs";
import { environment as env } from "../../environments/environment.prod";
import { APIResponse, Game } from "../_interfaces/models";


@Injectable({
    providedIn:'root'
})
export class ApiService{
    
    constructor(private http:HttpClient){}

    getGameList(ordering:string,search?:string):Observable<APIResponse<Game>>{
        let params = new HttpParams().set('ordering', ordering);
        if(search){
            params = new HttpParams().set('ordering',ordering).set('search',search);
        }
        return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`,{params:params})
    }

    getGameDetails(gameId:string):Observable<Game>{
        const gameInfoRequest = this.http.get(`${env.BASE_URL}/games/${gameId}`);
        // const gameTrailersRequest = this.http.get(`${env.BASE_URL}/games/${gameId}/movies`);
        // const gameScreenshotsRequest = this.http.get(`${env.BASE_URL}/games/${gameId}/screenshots`);

        return forkJoin({
            gameInfoRequest,
            // gameScreenshotsRequest,
            // gameTrailersRequest
        }).pipe(
            map((resp:any)=>{
                return {
                    ...resp['gameInfoRequest'],
                    // screenshots: resp['gameScreenshotsRequest']?.results,
                    // trailers: resp['gameTrailersRequest']?.results
                }
            })
        )
    }
   
}