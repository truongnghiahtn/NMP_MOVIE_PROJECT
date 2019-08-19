import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-trang-dangnhap',
  templateUrl: './trang-dangnhap.component.html',
  styleUrls: ['./trang-dangnhap.component.scss']
})
export class TrangDangnhapComponent implements OnInit {

  constructor() { }

  formDangNhap:FormGroup;

  ngOnInit() {
    this.formDangNhap = new FormGroup({
      'TaiKhoan': new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9_-]{3,15}$")]),
      'MatKhau': new FormControl(null, [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")])
    })
  }

}
