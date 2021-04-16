import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'blog-item-image',
  templateUrl: './blog-item-image.component.html',
  styleUrls: ['./blog-item-image.component.css']
})
export class BlogItemImageComponent implements OnInit {

  @Input() image = 'http://osnews.pl/wp-content/uploads/2016/06/it-grafika.jpg';
  text = 'Tytuł';


  constructor() { }

  ngOnInit(): void {
  }

}
