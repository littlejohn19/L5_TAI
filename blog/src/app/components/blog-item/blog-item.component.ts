import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {

  @Input() image: string | undefined;
  @Input() text: string | undefined;
  @Input() id:number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
