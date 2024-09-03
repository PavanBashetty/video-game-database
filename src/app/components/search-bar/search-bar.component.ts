import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  constructor(private router:Router){}

  ngOnInit(){}

  onSubmit(searchValue:NgForm){
    this.router.navigate(['search', searchValue.value.search])
  }

  clearSearchBar(searchForm:NgForm){
    searchForm.reset()
  }
}
