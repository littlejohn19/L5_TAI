import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'blog-item-details',
  templateUrl: './blog-item-details.component.html',
  styleUrls: ['./blog-item-details.component.css']
})
export class BlogItemDetailsComponent implements OnInit {


  public image = ' ';
  public text: string = ' ';
  public title: string= ' ';
  public id: number = 0;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id: string;
    this.route.paramMap
      .subscribe(params => {
        id = <string>params.get('id');
      });
    // @ts-ignore
    this.dataService.getById(id).subscribe(res => {
      // @ts-ignore
      this.image = res['image'];
      // @ts-ignore
      this.text = res['text'];
      // @ts-ignore
      this.title = res['title'];
    });

  }


}