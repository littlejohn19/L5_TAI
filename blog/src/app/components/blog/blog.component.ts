import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from "../../services/data.service";



@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  @Input() filterText = ' ';
  public items$: any;

  constructor(private service: DataService) { }

  ngOnInit(){
    this.getAll();
  }

  // tslint:disable-next-line:typedef
  getAll(){
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    }); }


  }