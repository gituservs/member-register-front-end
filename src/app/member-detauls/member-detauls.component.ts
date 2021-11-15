import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MemberDetaulsService } from '../shared/member-detauls.service';
import { MemberDetsuls } from '../shared/member-detsuls.model';

@Component({
  selector: 'app-member-detauls',
  templateUrl: './member-detauls.component.html',
  styles: [
  ]
})
export class MemberDetaulsComponent implements OnInit {

  constructor(public service:MemberDetaulsService, private toast:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord:MemberDetsuls){
    this.service.formData = Object.assign({},selectedRecord);
  }

  onDelete(id:number){
if(confirm('Are you sure to delete this record?'))
{
  this.service.deleteMemberDetails(id)
  .subscribe(
    res=>{
this.service.refreshList();
this.toast.error("Deleted successfully","Member details");
    },
    err =>{console.log(err)}
  )
}
    
  }
}
