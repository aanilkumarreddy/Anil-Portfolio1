import { Component, OnInit } from '@angular/core';
import { CvItem } from 'src/app/model/CvItem.model';
import { WindowService } from 'src/app/window.service';

@Component({
  selector: 'app-volunteering',
  templateUrl: './volunteering.component.html',
  styleUrls: ['./volunteering.component.css']
})
export class VolunteeringComponent implements OnInit {

  volunteerItems: CvItem[];
  title = "Voluntary Work and Causes";

  constructor(
    private cvItemService: WindowService
  ) { }

  getItems(): void {
    this.cvItemService
      .getVolunteerItems()
      .then(items => this.volunteerItems = items);
  }


  ngOnInit() {
    this.getItems();
  }

}
