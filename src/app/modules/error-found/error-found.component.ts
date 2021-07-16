import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-found',
  templateUrl: './error-found.component.html',
  styleUrls: ['./error-found.component.css']
})
export class ErrorFoundComponent implements OnInit {

  constructor(private _route: Router,) { }

  ngOnInit(): void {
  }

  goBack(){
    this._route.navigateByUrl("O2Help/home");
  }
}
