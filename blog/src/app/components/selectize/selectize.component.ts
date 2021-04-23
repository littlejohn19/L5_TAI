import {Component, ViewChild, ElementRef, AfterViewInit, OnInit} from '@angular/core';
import {debounceTime, distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import {DataService} from '../../services/data.service';
import {fromEvent} from "rxjs";

@Component({
  selector: 'selectize',
  templateUrl: './selectize.component.html',
  styleUrls: ['./selectize.component.css']
})
export class SelectizeComponent implements AfterViewInit {

  @ViewChild('input') input: ElementRef;
  public posts$: any;

  constructor(private dataService: DataService) {
  }

  ngAfterViewInit() {

    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        // @ts-ignore
        map(event => event['target'].value),
        debounceTime(700),
        distinctUntilChanged(),
        // @ts-ignore
        switchMap(value => this.dataService.getByText({text: value}))
      ).subscribe(results => {
      this.posts$ = results;
    });
  }



}
