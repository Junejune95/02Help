import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from "@angular/forms";

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {
  public contentForm: FormGroup;
  public regionId: any;
  public stateId: any;
  public submitted:boolean;
  public isTomorrowUpdate:boolean;
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
  items = [
    { id: 1, name: 'Python' },
    { id: 2, name: 'Node Js' },
    { id: 3, name: 'Java' },
    { id: 4, name: 'PHP' },
    { id: 5, name: 'Django' },
    { id: 6, name: 'Angular' },
    { id: 7, name: 'Vue' },
    { id: 8, name: 'ReactJs' },
  ];

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.contentForm = this.formBuilder.group({
      region: ["", [Validators.required]],
      state: ["", [Validators.required,]],
      name: ["", [Validators.required]],
      status: this.formBuilder.array([], [Validators.required]),
      size: this.formBuilder.array([], [Validators.required]),
      info: [""],
      remark: [""],
      phone:["", [Validators.required]],
      address: ["", [Validators.required]],
    }
    );
  }

  onCheckboxChange(e,constrolname) {
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

  get f() { return this.contentForm.controls }

  onSubmit(){
    this.submitted = true
    if (this.contentForm.invalid) return;
    else {
      console.log("fine anyway")
    }
  }
}
