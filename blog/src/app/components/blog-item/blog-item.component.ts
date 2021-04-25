import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {

  @Input() image = ' ';
  @Input() text = ' ';
  @Input() title = ' ';
  @Input() id = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
