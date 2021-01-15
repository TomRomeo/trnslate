import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    showResults:boolean = false;

  constructor() { }

  ngOnInit(): void {}


  onEnter(e){
      if(e.keyCode === 13){
          this.showResults=true;
      }
  }

}
