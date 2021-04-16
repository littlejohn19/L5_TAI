import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  filterText: string;

  @Output() name = new EventEmitter<string>();

  constructor(private router: Router, private route: ActivatedRoute) {
  }


  ngOnInit() {
  }

  sendFilter() {
    this.router.navigate(['/blog'], {
      queryParams: {
        name:
        this.filterText
      }
    });

    this.name.emit(this.filterText);
  }


}
