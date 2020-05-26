import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
   public statetable;
   public st;
  private _url: string ="https://api.covid19india.org/data.json";
  private _url2: string ="https://api.covid19india.org/state_district_wise.json";
  constructor(private http :HttpClient) { }
  
  getStateWiseTable()
  {
     
     return this.http.get(this._url);
     
  }
  getDistrictWiseTable()
  {
     
     return this.http.get(this._url2);
     
  }
}
