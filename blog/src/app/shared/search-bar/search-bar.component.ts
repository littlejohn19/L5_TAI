import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  filterText = ' ';

  @Output() name = new EventEmitter<string>();


  constructor(private router: Router, private route: ActivatedRoute){ }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.filterText = params['name'];
      this.sendFilter(Event);
    });

}

  // tslint:disable-next-line:typedef
  sendFilter($event: any) {
    this.router.navigate(['/blog'], {queryParams: {name:
        this.filterText}});
    this.name.emit(this.filterText);
 }


}