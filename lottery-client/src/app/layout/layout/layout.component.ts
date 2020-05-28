import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  titleTop = 'Login';

  config = {
    paddingAtStart: true,
    interfaceWithRoute: true,
    classname: 'my-custom-class',
    listBackgroundColor: `rgb(255, 255, 255)`,
    fontColor: `rgb(8, 54, 71)`,
    backgroundColor: `rgb(255, 255, 255)`,
    selectedListFontColor: `red`,
    highlightOnSelect: true,
    collapseOnSelect: true,
    rtlLayout: false,
  };

  expandCollapseStatus = 'expand';
  appitems = [
    {
      label: 'NPM',
      imageIcon: '/assets/svg/undraw_playing_cards_cywn.svg',
      link: 'https://www.npmjs.com/package/ng-material-multilevel-menu',
      externalRedirect: true,
      hrefTargetType: '_blank',
    },
    {
      label: 'Item 3',
      icon: 'offline_pin',
      onSelected: function () {
        console.log('Item 3');
      },
    },
    {
      label: 'Item 4',
      link: '/item-4',
      icon: 'star_rate',
      hidden: true,
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
