import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  statetable;
  totalConfirmed;
  totalActive;
  totalDeaths;
  totalRecovered;
  datatable = [];
  pieData;
  pieData1 = [];




  chart = {
    PieChart: "PieChart",
    ColumnChart: "ColumnChart",
    LineChart: "LineChart",
    height: 400,
    options: {
      animation: {
        duration: 1000,
        easing: 'out',
      },
      is3D: true
    }
  }
  constructor(private _statedata: DataServiceService) { }

  ngOnInit(): void {
    this._statedata.getStateWiseTable()
      .subscribe(result => {
        this.statetable = result['statewise'];
        this.totalConfirmed = this.statetable[0]['confirmed'];
        console.log(this.totalConfirmed);
        this.totalActive = this.statetable[0]['active'];
        console.log(this.totalActive);
        this.totalRecovered = this.statetable[0]['recovered'];
        console.log(this.totalRecovered);
        this.totalDeaths = this.statetable[0]['deaths'];
        console.log(this.totalDeaths);
        this.pieData = [['Active', +this.totalActive], ['Recovered', +this.totalRecovered], ['Death', +this.totalDeaths]];
        this.initChart('c');
      });




  }
  public date = new Date();
  updateChart(input: HTMLInputElement) {
    console.log(input.value);
    this.initChart(input.value);

  }


  initChart(caseType: string) {
    let stateFilterValue;
    this.pieData1 = [];

    this.statetable = this.statetable.filter(item => item.state !== 'Total');
    this.statetable.forEach(cs => {
      let value: number;
      let stateValue;

      if (caseType == 'c')

        value = cs.confirmed;


      if (caseType == 'a')

        value = cs.active;


      if (caseType == 'd')

        value = cs.deaths;



      if (caseType == 'r')

        value = cs.recovered;



      stateValue = cs.state;
      // value = cs.deaths;
      //   console.log(value); 
      //   stateValue=cs.state;
      //   console.log(stateValue);






      this.pieData1.push([
        stateValue, +value
      ])
    })

    console.log(this.pieData1);
  }



  // for ( const key in this.statetable) {


  //       if (this.statetable[key]['confirmed'] > 0)
  //       {
  //         this.value = this.statetable[key]['confirmed'] ;
  //         console.log(this.value);
  //         this.stateValue = this.statetable[key]['state'];
  //          console.log(this.stateValue);

  //       }



  //    //   this.pieData1[this.stateValue,+this.value]; 



  // }

  // console.log(this.pieData1);
}

