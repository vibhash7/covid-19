import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { DistrictComponent } from 'src/app/component/district/district.component';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
 countries;
 stdata;
 totalConfirmed ;
 totalActive;
 totalDeaths;
 totalRecovered;
 districtdata;
 dis;
 dname;
 newData=[];
 districtPieData = [];
 delta1;

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

  constructor(private _countriesdata :DataServiceService) { }

  ngOnInit(): void {
    this._countriesdata.getStateWiseTable()
    .subscribe  (result => {
      this.countries =result['statewise'];
      this.countries = this.countries.filter(item => item.state !== 'Total');
      this.stdata=this.countries;
    
      this._countriesdata.getDistrictWiseTable()
      .subscribe (result => {
        this.districtdata = result;
       // console.log(this.districtdata);
      // this.updateValues('Bihar');
      this.updateValues('Maharashtra');
           
  
        })

    
       
    })    

      
  }
  updateValues(country : string){
    console.log(country);
    console.log(this.countries);
     
 
     this.countries.filter( d => {
       if(d['state']===country){
        console.log(d['statecode']);
        this.totalActive = d['active'];
        this.totalDeaths = d['deaths'];
        this.totalRecovered = d['recovered'];
        this.totalConfirmed = d['confirmed'];
        console.log(this.totalConfirmed);
      }
      })
      this.districtValue(country);
       
      
    }

    districtValue(country : string){
      this.districtPieData = [];
      this.districtdata;
      this.newData=[];
      console.log(country);
      this.dis =this.districtdata[country];
      this.dname = Object.keys(this.dis['districtData']);
      console.log(this.dname);
      
      this.newData=Object.values(this.dis['districtData']);
     // this.newData=this.dis['districtData'];

    //  this.districtPieData.push([
    //   this.dname, +this.newData['active']
    // ])
    this.delta1=(this.dis['districtData']);
      console.log(this.delta1);
      
    }
}
