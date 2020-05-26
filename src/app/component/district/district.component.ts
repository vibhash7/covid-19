import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {
  districtdata;
  dis=[];
  constructor(private _districtdata :DataServiceService) { }

  ngOnInit(): void {
    
    this._districtdata.getDistrictWiseTable()
    .subscribe  (result => {
      this.districtdata =result;
     // console.log(this.districtdata);
    // this.updateValues('Bihar');
    
         

      })
      
  }
  // updateValues1(state : string){
  //   // let  dis=[];
  //    this.districtdata;
  //     console.log(state);
  //     this.dis =this.districtdata[state];
  //     console.log(this.dis);



  // }

  }


