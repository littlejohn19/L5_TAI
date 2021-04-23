import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit, OnInit,
} from '@angular/core';
import {fromEvent} from 'rxjs/observable/fromEvent';
import {debounceTime, distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import {DataService} from "../../services/data.service"

@Component({
  selector: 'selectize',
  templateUrl: './selectize.component.html',
  styleUrls: ['./selectize.component.css']
})
export class SelectizeComponent implements AfterViewInit, OnInit {
  //@ts-ignore
  @ViewChild('input') input: ElementRef;
  //@ts-ignore
  public posts$;

  constructor(private dataService: DataService) {
  }

  ngAfterViewInit() {
    // @ts-ignore
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        // @ts-ignore
        map(event => event['target'].value),
        debounceTime(700),
        distinctUntilChanged(),
        switchMap(value => this.dataService.getByText({text: value}))
      ).subscribe((results: any) => {
      this.posts$ = results;
    });
  }

  ngOnInit(): void {
  }
}
