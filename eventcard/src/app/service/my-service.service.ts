import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MyServiceService {

    constructor(private http: HttpClient) {}

    getPeople() {
      return this.http.get('http://localhost:4000/employees');
    }
    postPeople(message) {
      return this.http.post('http://localhost:4000/employees', message);
    }

  }
