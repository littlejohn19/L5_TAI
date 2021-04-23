import { Component, OnInit } from '@angular/core';
import {DataService} from 'C:/Users/Veni/Desktop/ToiK/L5_TAI/blog/src/app/services/data.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'blog-item-details',
  templateUrl: './blog-item-details.component.html',
  styleUrls: ['./blog-item-details.component.css']
})
export class BlogItemDetailsComponent implements OnInit {

  image = 'http://osnews.pl/wp-content/uploads/2016/06/it-grafika.jpg';
  text = 'Tytuł';

  constructor(private dataService: DataService, private route: ActivatedRoute) {}


  ngOnInit() {
    let id: string | null = '';
    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
      }); // wywala bez ignora
    this.dataService.getById(id).subscribe(res => {
      // @ts-ignore
      this.image = res.image;
      // @ts-ignore
      this.text = res.text;
    });

  }


  }
