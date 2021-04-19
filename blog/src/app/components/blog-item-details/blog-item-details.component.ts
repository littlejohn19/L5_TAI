import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'blog-item-details',
  templateUrl: './blog-item-details.component.html',
  styleUrls: ['./blog-item-details.component.css']
})
export class BlogItemDetailsComponent implements OnInit {

  public image: string | undefined = '';
  public text: string | undefined;
  public id: number | undefined;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
  }


  ngOnInit() {
    let id: string | null;

    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
      });

    // @ts-ignore
    this.dataService.getById(id).subscribe((res: { [x: string]: string | undefined; }) => {
      this.image = res['image'];
      this.text = res['text'];
    });

  }

}
