import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dealerList = [
    {
      img: 'https://www.kmway.com/upload/resources/image/2016/09/18/443856_600x600.jpg',
      name: '靓靓蒸虾',
      address: '光谷世界城广场'
    }, {
      img: 'https://www.kmway.com/upload/resources/image/2016/09/18/443856_600x600.jpg',
      name: '靓靓蒸虾',
      address: '光谷世界城广场'
    }, {
      img: 'https://www.kmway.com/upload/resources/image/2016/09/18/443856_600x600.jpg',
      name: '靓靓蒸虾',
      address: '光谷世界城广场'
    }, {
      img: 'https://www.kmway.com/upload/resources/image/2016/09/18/443856_600x600.jpg',
      name: '靓靓蒸虾',
      address: '光谷世界城广场'
    }, {
      img: 'https://www.kmway.com/upload/resources/image/2016/09/18/443856_600x600.jpg',
      name: '靓靓蒸虾',
      address: '光谷世界城广场'
    }, {
      img: 'https://www.kmway.com/upload/resources/image/2016/09/18/443856_600x600.jpg',
      name: '靓靓蒸虾',
      address: '光谷世界城广场'
    }
  ];

  button: any = {
    value: '新增',
    click: (dealear) => this.dealerList.push({
      img: 'https://www.kmway.com/upload/resources/image/2016/09/18/443856_600x600.jpg',
      name: '靓靓蒸虾',
      address: '光谷世界城广场'
    })
  };

  constructor() {
  }

  ngOnInit() {
  }
}
