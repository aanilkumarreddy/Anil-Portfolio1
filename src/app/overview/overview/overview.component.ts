import { Component, OnInit } from '@angular/core';
import { WindowService } from 'src/app/window.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  title = "Overview";
  generalData;
  interests;

  constructor(
    private cvItemService: WindowService,
  ) { }

  

  getItems(): void {
    this.generalData = this.cvItemService.getGeneralData();
    this.cvItemService
      .getInterestItems()
      .then(items => this.interests = items);
  }

  ngOnInit() {
    this.getItems();
  }


}
