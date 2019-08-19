import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-trang-dangky',
  templateUrl: './trang-dangky.component.html',
  styleUrls: ['./trang-dangky.component.scss']
})
export class TrangDangkyComponent implements OnInit {
  @ViewChild ('formDangKy', {static:false}) formDK:NgForm;
  DanhSachNguoiDung: any[] =[];
  constructor() { }

  ngOnInit() {
    if(localStorage.getItem("DS")){
      this.DanhSachNguoiDung = JSON.parse(localStorage.getItem("DS"));
    }
  }
  DangKy(value){
    this.DanhSachNguoiDung.push(value);
    localStorage.setItem("DS", JSON.stringify(this.DanhSachNguoiDung));
    this.formDK.reset();
  }

  // C1
  // CapNhat(object){
  //   this.formDK.setValue(object);
  // }
  
  CapNhat(object){
    let taikhoan = object.getAttribute("data-taikhoan");
    let matkhau = object.getAttribute("data-matkhau");
    let hoten = object.getAttribute("data-hoten");
    let email = object.getAttribute("data-email");
    let sodt = object.getAttribute("data-sodt");
    let maloaind = object.getAttribute("data-maloaind");
    this.formDK.setValue({
      TaiKhoan: taikhoan,
      MatKhau: matkhau,
      HoTen: hoten,
      Email: email,
      SoDT: sodt,
      MaLoaiNguoiDung: maloaind
    })
  }
}
