import { Component, Input, OnDestroy, OnInit } from '@angular/core';
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
  public contentList: any = [];
  public isLoading: boolean = false;

  constructor(private _service: CommonService,) { }

  ngOnInit() {
    this.isLoading = true;
    this.getRegionList();

  }

  getContentList() {
    this.sub = this._service.getContentList(this.selectedRegion, this.selectedtownship, this.isUpdate)
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
    let regionId = this.selectedRegion;
    if (regionId)
      this.sub = this._service.getTownship(regionId).subscribe((res) => {
        this.townshipList = res;
      })
  }

  getList(){
    this.isLoading=true;
    this.getContentList();
  }

  onSelectedTownship() {
    this.getContentList();
  }
  
  ngOnDestroy() {
    if (this.sub)
      this.sub.unsubscribe();
  }


}
