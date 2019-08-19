import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';



@NgModule({
  declarations: [AdminLayoutComponent, QuanLyNguoiDungComponent],
  exports: [AdminLayoutComponent, QuanLyNguoiDungComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
