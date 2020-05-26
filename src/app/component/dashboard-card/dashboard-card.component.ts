import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {
  statetable;
 @Input('statetable[0].confirmed')
 confirmed;
 @Input('statetable[0].active')
 active;
 @Input('statetable[0].recovered')
 recovered;
 @Input('statetable[0].deaths')
 deaths;

 constructor(private _countriesdata :DataServiceService)  { }

  ngOnInit(): void {
    this._countriesdata.getStateWiseTable()
    .subscribe  (result => {this.statetable =result['statewise'];
     
     
       
         

      })
  }

}
