import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchText = new BehaviorSubject<string>('');
  constructor() { }

  getSearchText(){
    return this.searchText.asObservable();
  }

  updateSearchText(newText : string){
    this.searchText.next(newText);
  }

}
