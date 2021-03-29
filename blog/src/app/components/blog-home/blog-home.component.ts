import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {


  filterText = ' ';


  constructor() { }

  ngOnInit(): void {
  }

  getName($event: string) {
    this.filterText = $event;
  }


}