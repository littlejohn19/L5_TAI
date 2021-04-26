import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-item-details',
  templateUrl: './blog-item-details.component.html',
  styleUrls: ['./blog-item-details.component.css']
})
export class BlogItemDetailsComponent implements OnInit {

  public image = '';
  public text: string;
  public id: string;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
  }

  ngOnInit() {
	this.route.paramMap
  	   .subscribe(params => {
    	   this.id = params.get('id');
  	});
	
  	   this.dataService.getById(this.id).subscribe(res => {
    	   this.image = res['image'];
    	   this.text = res['text'];
  	});
	
  }
}
