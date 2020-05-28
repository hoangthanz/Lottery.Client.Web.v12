import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  titleTop = 'Đăng nhập';

  config = {
    paddingAtStart: true,
    interfaceWithRoute: true,
    classname: 'my-custom-class',
    listBackgroundColor: `rgb(255, 255, 255)`,
    fontColor: `rgb(32, 32, 32)`,
    backgroundColor: `rgb(255, 255, 255)`,
    selectedListFontColor: `darkgrey`,
    highlightOnSelect: true,
    collapseOnSelect: true,
    rtlLayout: false,
  };

  expandCollapseStatus = 'expand';

  appitems = [
    {
      label: 'Lottery v1.0',
      imageIcon: '/assets/svg/undraw_playing_cards_cywn.svg',
    },
    {
      label: 'Quy định và luật lệ',
      icon: 'account_balance',
      onSelected: function () {
        console.log('Item 3');
      },
    },
    {
      label: 'Cờ bạc có trách nhiệm',
      icon: 'description',
      onSelected: function () {
        console.log('Item 3');
      },
    },
    {
      label: 'Về chúng tôi',
      icon: 'group',
      onSelected: function () {
        console.log('Item 3');
      },
    },
    {
      label: 'Tuyên bố bản quyền',
      icon: 'free_breakfast',
      onSelected: function () {
        console.log('Item 3');
      },
    },
    {
      label: 'Chính sách bảo mật',
      icon: 'security',
      onSelected: function () {
        console.log('Item 3');
      },
    },
  ];

  constructor() {}

  ngOnInit() {}

  selectedItem(e) {
    console.log(e);
  }
  selectedLabel(e) {
    console.log(e);
  }
}
