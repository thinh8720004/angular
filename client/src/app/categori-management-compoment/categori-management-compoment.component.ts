import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-categori-management-compoment',
  templateUrl: './categori-management-compoment.component.html',
  styleUrls: ['./categori-management-compoment.component.scss']
})
export class CategoriManagementCompomentComponent  {

  loginF: FormGroup =  new FormGroup({
    categori: new FormControl('',Validators.required),

  });
  categories = [
    { id: 1, name: 'Shoes' },
    { id: 2, name: 'Electronics' },
    { id: 3, name: 'Laptop' },
  ];


  // Hàm xóa sản phẩm
  
  
  

}
