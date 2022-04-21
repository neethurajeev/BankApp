import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {

  @Input() item:string |undefined

  // for pass to parent by using @output

  @Output() onCancel=new EventEmitter()

  @Output() onDelete=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }


// delete/yes

delete(){
    this.onDelete.emit(this.item)
}
  // cancel/No

  cancel(){
    this.onCancel.emit()
  }

  

}
