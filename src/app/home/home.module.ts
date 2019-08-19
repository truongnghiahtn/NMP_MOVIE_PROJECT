import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { TrangchitietComponent } from './trangchitiet/trangchitiet.component';
import { TrangdatgheComponent } from './trangdatghe/trangdatghe.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PhimComponent } from './phim/phim.component';
import { TrangDangnhapComponent } from './trang-dangnhap/trang-dangnhap.component';
import { TrangDangkyComponent } from './trang-dangky/trang-dangky.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'



@NgModule({
  declarations: [HomeLayoutComponent, TrangchuComponent, TrangchitietComponent, TrangdatgheComponent, HeaderComponent, FooterComponent, PhimComponent, TrangDangnhapComponent, TrangDangkyComponent],
  exports: [HomeLayoutComponent, TrangchuComponent, TrangchitietComponent, TrangdatgheComponent, HeaderComponent, FooterComponent, PhimComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ]
})
export class HomeModule { }
