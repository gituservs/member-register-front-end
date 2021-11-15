import { Injectable } from '@angular/core';
import { MemberDetsuls } from './member-detsuls.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MemberDetaulsService {

  constructor(private http:HttpClient) { }

  readonly baseURL = 'http://localhost:25504/api/MemberDetails'
  formData:MemberDetsuls = new MemberDetsuls();
  list : MemberDetsuls[];

  postMemberDetails(){
    return this.http.post(this.baseURL,this.formData);
  }

  putMemberDetails(){
    return this.http.put(`${this.baseURL}/${this.formData.Id}`,this.formData);
  }

  deleteMemberDetails(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList(){
    this.http.get(this.baseURL).toPromise()
    .then(res => this.list = res as MemberDetsuls[]);
  }

  

}
