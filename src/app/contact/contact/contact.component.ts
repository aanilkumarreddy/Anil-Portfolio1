import { Component, OnInit } from '@angular/core';
import { WindowService } from 'src/app/window.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactItems;
  title = 'Contact Informations';

  constructor(
    private cvItemService: WindowService
  ) { }

  getItems(): void {
    this.cvItemService
      .getContactItems()
      .then(items => this.contactItems = items);
  }

  ngOnInit() {
    this.getItems();
  }

}
