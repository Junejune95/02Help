import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonService } from "@core/services/common.service";


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() comments:any;
  @Input() postId:String;
  @Output() onEmit: any = new EventEmitter<any>();
  
  public message:any;

  constructor(private _cservice:CommonService) { }

  ngOnInit() {
    console.log('hello',this.postId);
    console.log(this.comments);
  }

  onSendMessage(){
    this._cservice.onCreateComments(this.message,this.postId)
    .subscribe((res)=>{
      this.message="";
      this.onEmit.emit(true);
    })
  }

  onClickoutside(e){
    console.log(e)
    console.log(e.srcElement.classList);
    if(e.srcElement.classList[0]=='modal')
    this.onEmit.emit(true);
  }
}
