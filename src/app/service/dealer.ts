import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class DealerService {
  private dealersUrl = '/dealers';
  private handleError: any;

  constructor(private http: Http) {
  }

  getDealers(): Observable<any[]> {
    return this.http.get(this.dealersUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
}
