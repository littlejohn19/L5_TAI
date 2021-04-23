import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {
  // @ts-ignore
  @Input() id: number;
  // @ts-ignore
  @Input() image: string;
  // @ts-ignore
  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
