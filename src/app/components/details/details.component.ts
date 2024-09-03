import { Component } from '@angular/core';
import { Game } from '../../_interfaces/models';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../../_services/api.service';
import { CommonModule } from '@angular/common';
import {GaugeModule} from 'angular-gauge';
import { GameTabsComponent } from "../game-tabs/game-tabs.component";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, GaugeModule, GameTabsComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  gameRating:number = 0;
  gameId!:string;
  game!:Game;
  routeSub!:Subscription;
  gameSub!:Subscription;

  constructor(private activatedRoute:ActivatedRoute, private apiService:ApiService){}

  ngOnInit(){
    this.routeSub = this.activatedRoute.params.subscribe((params:Params)=>{
      this.gameId = params['gameId'];
      this.getGameDetails(this.gameId);
    })
  }

  getGameDetails(gameId:string){
    this.gameSub = this.apiService.getGameDetails(gameId).subscribe({
      next:(gameResp:Game)=>{
        this.game = gameResp;
        setTimeout(()=>{
          this.gameRating = this.game.metacritic
        },1000)
      },
      error:(error)=>{console.log(error)}
    })
  }

  getColor(value:number):string{
    if(value>75){
      return '#5ee432'
    }else if(value>50){
      return '#fffa50';
    }else if(value>30){
      return '#f7aa38';
    }else{
      return '#ef4655';
    }
  }

  ngOnDestroy(){
    if(this.routeSub){this.routeSub.unsubscribe()}
    if(this.gameSub){this.gameSub.unsubscribe()}
  }
}
