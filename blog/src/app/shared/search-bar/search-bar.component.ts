import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  filterText: string;

  @Output() name = new EventEmitter<string>();

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
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
