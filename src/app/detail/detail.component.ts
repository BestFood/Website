import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DealerService } from '../service/dealer';
import { Dealer } from '../common/models/dealer';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  dealer: Dealer;

  constructor(private route: ActivatedRoute,
              private dealerService: DealerService) {
    this.dealer = {
      img: '',
      name: '',
      address: ''
    };
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        return this.dealerService.getDealer(+params['id'])
      }).subscribe((dealer: Dealer) => {
      this.dealer = dealer
    });
  }

}
