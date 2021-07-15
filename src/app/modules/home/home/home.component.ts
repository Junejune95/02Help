import { Component, OnInit } from '@angular/core';
import { CommonService } from "@core/services/common.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public regionList:any=[];
  public townshipList:any=[];
  private sub: Subscription;
  public selectedRegion:any;
  public selectedtownship:any;
  public contentList:any=[];

  constructor(private _cservice:CommonService, private _service: CommonService, ) { }

  ngOnInit() {
    this.getRegionList();

  }

  getContentList(){
    this.sub = this._service.getContentList()
    .subscribe((res) => {
      this.contentList = res;
    })
  }

  getRegionList() {
    this.sub = this._service.getRegion()
      .subscribe((res) => {
        this.regionList = res;
        this.getContentList();
      })
  }

  onSelectedRegion() {
    console.log(this.selectedRegion);
    let regionId = this.selectedRegion;
    console.log(regionId);
    this.sub = this._service.getTownship(regionId).subscribe((res) => {
      this.townshipList = res;
    })
  }

  onLikePost(status,id){
    this._service.onLikePost(id,status).subscribe((res)=>{
      console.log(res);
    })
  }
}
