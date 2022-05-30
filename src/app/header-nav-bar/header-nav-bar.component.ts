import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header-nav-bar',
  templateUrl: './header-nav-bar.component.html',
  styleUrls: ['./header-nav-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderNavBarComponent implements OnInit {

  languages: string[] = [
    'Arabic',
    'English'
    ];

  selectedLanguage : String ;

  constructor(private http: HttpClient) { 
    this.selectedLanguage = localStorage.getItem('lang') || "English";
  }

  ngOnInit(): void { 
  }

  //Handle Changing the Languages 
  changeLanguage (lang : string){
    localStorage.setItem('lang' , lang );
    window.location.reload();
  }

}
