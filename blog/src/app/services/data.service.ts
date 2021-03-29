import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {

  }


  // tslint:disable-next-line:typedef
  getAll() {
    return this.http.get(this.url);
  }

}