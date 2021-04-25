import { Component, OnInit } from '@angular/core';
import {
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import {fromEvent} from 'rxjs/observable/fromEvent';
import {debounceTime, distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import {DataService} from '../../services/data.service';




@Component({
  // tslint:disable-next-line:component-selector
  selector: 'selectize',
  templateUrl: './selectize.component.html',
  styleUrls: ['./selectize.component.css']
})
export class SelectizeComponent implements AfterViewInit {


  @ViewChild('input') input: ElementRef | undefined;
  public posts$: any;

  constructor(private dataService: DataService) { }

  // tslint:disable-next-line:typedef
  ngAfterViewInit() {
    // @ts-ignore
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        map((event: any ) => event.target.value),
        debounceTime(700),
        distinctUntilChanged(),
        switchMap(value => this.dataService.getByText({text: value}))
      ).subscribe((results: any) => {
      this.posts$ = results;
    });
  }




}
