import { Component, OnInit } from '@angular/core';
import { LoaderState } from '@app/core/services/loader';
import { LoaderService } from '@app/core/services/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-spinner-loading',
  templateUrl: './spinner-loading.component.html',
  styleUrls: ['./spinner-loading.component.css']
})
export class SpinnerLoadingComponent implements OnInit {

  isShow: boolean=false;
  loadingSubscription: Subscription;

  constructor(
    private loaderService: LoaderService,
  ) { }

  ngOnInit(): void {
    print
    this.loadingSubscription = this.loaderService.loaderState
      .subscribe((state: LoaderState) => {
        this.isShow = state.show;
      });
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }
}
