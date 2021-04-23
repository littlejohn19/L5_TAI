import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'blog-item-details',
  templateUrl: './blog-item-details.component.html',
  styleUrls: ['./blog-item-details.component.css']
})

export class BlogItemDetailsComponent implements OnInit {

  public image = '';
  public text: string = '';
  public id: number = 0;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
  }


  ngOnInit() {
    let id: any;
    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
      });

    this.dataService.getById(id).subscribe((res: any) => {
      this.image = res['image'];
      this.text = res['text'];
    });

  }


}
