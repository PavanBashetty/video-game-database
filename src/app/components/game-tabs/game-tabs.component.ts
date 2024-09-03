import { Component, Input } from '@angular/core';
import { MatTab } from '@angular/material/tabs';
import { MatIcon } from '@angular/material/icon';
import { MatTabGroup } from '@angular/material/tabs';
import { Game } from '../../_interfaces/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-tabs',
  standalone: true,
  imports: [MatTab,MatIcon,MatTabGroup, CommonModule],
  templateUrl: './game-tabs.component.html',
  styleUrl: './game-tabs.component.scss'
})
export class GameTabsComponent {

  @Input() game!:Game;

  constructor(){}

}
