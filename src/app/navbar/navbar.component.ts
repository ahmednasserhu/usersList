import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})

export class NavbarComponent implements OnInit {
  searchText: string = '';

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.searchService.getSearchText().subscribe((value) => {
      this.searchText = value;
      console.log(this.searchText);
    });
  }

  onSearchTextChange() {
    this.searchService.updateSearchText(this.searchText);
  }
}
