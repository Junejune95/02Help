import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from "@angular/forms";
import { Subscription } from 'rxjs';
import { CommonService } from "@core/services/common.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit, OnDestroy {
  public contentForm: FormGroup;
  public regionId: any;
  public stateId: any;
  public submitted: boolean;
  public isTomorrowUpdate: boolean;
  private sub: Subscription;
  public regionList: any = [];
  public townshipList: any = [];
  public resultMessage: any;
  public isLoading: boolean = false;

  public statusList: any = [
    {
      id: 1,
      name: '၀ယ်ရန်'
    },
    {
      id: 2,
      name: 'ငှားရန်'
    },
    {
      id: 2,
      name: 'ဖြည့်ရန်'
    },
  ];
  public sizeList: any = [
    {
      id: 1,
      name: 'အိုးကြိး'
    },
    {
      id: 2,
      name: 'အိုးသေး'
    },

  ];


  constructor(private formBuilder: FormBuilder, private _service: CommonService, private _router: Router,) { }

  ngOnInit(): void {
    this.contentForm = this.formBuilder.group({
      region: [null, [Validators.required]],
      type: [""],
      state: [null, [Validators.required,]],
      name: ["", [Validators.required]],
      status: this.formBuilder.array([], [Validators.required]),
      size: this.formBuilder.array([], [Validators.required]),
      info: [""],
      remark: [""],
      phone: [""],
      address: ["", [Validators.required]],
      getDate: [""],
    }
    );
    this.getRegionList();
  }

  onCheckboxChange(e, constrolname) {
    const checkArray: FormArray = this.contentForm.get(constrolname) as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  getRegionList() {
    this.sub = this._service.getRegion()
      .subscribe((res) => {
        this.regionList = res;
      })
  }

  get f() { return this.contentForm.controls }

  onSubmit() {
    this.submitted = true
    if (this.contentForm.invalid) return;
    else {
      this.isLoading = true;
      let value = this.contentForm.value;

      let data = {
        "regionId": value.region,
        "townshipId": value.state,
        "status": value.status,
        "plantName": value.name,
        "address": value.address,
        "phoneNumber": value.phone,
        "information": value.info,
        "remark": value.remark,
        "size": value.size,
        "tomorrowUpdate": value.getDate ? true : false,
        "getDate": value.getDate,
        "type":value.type
      };
      console.log(data);
      this.sub = this._service.onCreateContent(data)
        .subscribe((res: any) => {
          this.isLoading = false;
          this.resultMessage = res.message;
          this._router.routeReuseStrategy.shouldReuseRoute = () => false;
          this._router.onSameUrlNavigation = 'reload';
          this._router.navigate(['/create-content']);
          this.contentForm.reset();
          setTimeout(() => {
            this.resultMessage = null;
          }, 1000);

        });
    }
  }

  onSelectedRegion() {
    let regionId = this.contentForm.value.region;
    this.sub = this._service.getTownship(regionId).subscribe((res) => {
      this.townshipList = res;
    })
  }

  ngOnDestroy() {
    if (this.sub)
      this.sub.unsubscribe();
  }

}
