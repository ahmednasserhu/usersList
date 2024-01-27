import { NgClass } from '@angular/common';
import { Component , Input} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faGithub, faGooglePlus, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [FontAwesomeModule,NgClass],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  searchText : string = '';
  constructor(private searchService : SearchService){}

  ngOnInit(){
    this.searchService.getSearchText().subscribe((value)=>{
      this.searchText = value;
      console.log(this.searchText);
    })
  }

  @Input() singleUser : any;

  verified = faStar;
}
