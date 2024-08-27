import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { APIResponse, Game } from '../../_interfaces/models';
import { ApiService } from '../../_services/api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatFormFieldModule,MatSelectModule,FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  sort!:string;
  games!:Game[]

  constructor(private apiService:ApiService, private activatedRouted:ActivatedRoute){}
  
  ngOnInit(){
    this.activatedRouted.params.subscribe((params:Params)=>{
      if(params['game-search']){
        this.searchGames('metacrit', params['game-search']);
      }else{
        this.searchGames('metacrit')
      }
    })
  }

  searchGames(sort:string, search?:string){
    this.apiService.getGameList(sort,search).subscribe({
      next:((gameList:APIResponse<Game>)=>{
        this.games = gameList.results;
        // console.log(gameList)
      })
    })
  }

}
