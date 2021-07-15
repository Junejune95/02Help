import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
  public currentRoute: any = [];
  public userData: any = {};

  constructor(private _route: Router) { }

  ngOnInit() {
    this.checkCurrenroute();
  }

  directRoute(go) {
    this.checkCurrenroute();
    this._route.navigateByUrl(go);
  }


  checkCurrenroute() {
    setTimeout(() => {
      this.currentRoute = this._route.url.split("/");
      console.log(this.currentRoute)
    }, 100);

  }

  logout(){}

}
