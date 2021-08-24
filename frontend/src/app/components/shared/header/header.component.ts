import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu: Array<any>;

  constructor() { 
    this.menu = [
      // {
      //   name: "Việc Làm",
      //   key: "viec-lam",
      //   route: "viec-lam",
      //   target: ""
      // },
      // {
      //   name: "Công Ty",
      //   key: "cong-ty",
      //   route: "cong-ty",
      //   target: ""
      // },
      // {
      //   name: "Blog",
      //   key: "blog",
      //   route: "blog",
      //   target: ""
      // },
    ]
  }

  ngOnInit(): void {

  }

}
