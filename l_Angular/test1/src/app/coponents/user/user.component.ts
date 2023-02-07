import { Component } from '@angular/core';

import { elementAt } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  f_name = "Nidjaree";
  l_name = "Sanmano";

  address = { adr:"108", moo:"17", tum:"tharong", amp:"wichainburi", prov:"phetchabun" }
  
  skills = Array("PHP","JQuery")
  
  del_skill(){
    console.log('sss');
    // this.skills.forEach((val_skill,index)={
    //   if( val_skill == skills){
    //     this.skills.splice(index,1);
    //   }
    // })
    return false;
  }
  
  ngOnInit(){

  }


}
