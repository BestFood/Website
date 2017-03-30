import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.scss']
})
export class DealerComponent implements OnInit {

  @Input() dealer: any;

  constructor() {
  }

  ngOnInit() {
  }

}
