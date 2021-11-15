import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MemberDetaulsService } from 'src/app/shared/member-detauls.service';
import { MemberDetsuls } from 'src/app/shared/member-detsuls.model';

@Component({
  selector: 'app-member-detauls-form',
  templateUrl: './member-detauls-form.component.html',
  styles: [
  ]
})
export class MemberDetaulsFormComponent implements OnInit {

  constructor(public service:MemberDetaulsService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
if(this.service.formData.Id ==0)
this.insertRecord(form);
else
this.updateRecord(form);
  }

  insertRecord(form:NgForm){
    this.service.postMemberDetails().subscribe(
    res =>{
    this.resetForm(form);
    this.service.refreshList();
    this.toastr.success('Submitted successfully','Member register')
    },
    err =>{console.log(err);}
    );
      }

      updateRecord(form:NgForm){
        this.service.putMemberDetails().subscribe(
          res =>{
          this.resetForm(form);
          this.service.refreshList();
          this.toastr.info('updated successfully','Member updated')
          },
          err =>{console.log(err);}
          );
      }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new MemberDetsuls();
  }
}
