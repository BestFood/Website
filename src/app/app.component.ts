import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
}
