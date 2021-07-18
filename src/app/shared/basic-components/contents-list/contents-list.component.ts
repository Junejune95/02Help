import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from "@core/services/common.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contents-list',
  templateUrl: './contents-list.component.html',
  styleUrls: ['./contents-list.component.css']
})
export class ContentsListComponent implements OnInit, OnDestroy {
  @Input() isUpdate;

  public regionList: any = [];
  public townshipList: any = [];
  private sub: Subscription;
  public selectedRegion: any;
  public selectedtownship: any;
  public selectedOrder: any="DESC";
  public contentList: any = [];
  public isLoading: boolean = false;
  public type:any;

  constructor(private _service: CommonService,private _route: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.type = this._route.url.split("/")[3];
      this.isLoading = true;
      this.getRegionList();
    }, 100);



  }

  getContentList() {
    this.sub = this._service.getContentList(this.selectedRegion, this.selectedtownship, this.isUpdate,this.selectedOrder.toLowerCase(),this.type)
      .subscribe((res) => {
        this.contentList = res;
        this.isLoading = false;

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
    this.townshipList=[];
    let regionId = this.selectedRegion;
    if (regionId)
      this.sub = this._service.getTownship(regionId).subscribe((res) => {
        this.townshipList = res;
      })
  }

  getList(){
    this.contentList=[];
    this.isLoading=true;
    this.getContentList();
  }

  onSelectedTownship() {
    this.isLoading=true;
    this.getContentList();
  }
  
  onSelectedOrder(){

    this.getList();
  }
  ngOnDestroy() {
    if (this.sub)
      this.sub.unsubscribe();
  }


}
