import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonService } from '@app/core/services/common.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit, OnDestroy {
  @Input() contentData;
  @Output() onClick: any = new EventEmitter<any>();
  
  private sub: Subscription;


  constructor(private _service: CommonService,) { }

  ngOnInit() {
  }

  onLikePost(id, status) {

    this.sub = this._service.onLikePost(id, status).subscribe((res) => {
      console.log(res);
      this.onClick.emit(true);
    })
  }

  ngOnDestroy() {
    if (this.sub)
      this.sub.unsubscribe();
  }

}
