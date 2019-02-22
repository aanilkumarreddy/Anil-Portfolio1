import { Component, OnInit } from '@angular/core';
import { CvItem } from 'src/app/model/CvItem.model';
import { WindowService } from 'src/app/window.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationItems: CvItem[];
  certificationItems: CvItem[];
  languageItems;
  title = 'Education and Certificates';

  constructor(
    private cvItemService: WindowService
  ) {
  }

  getItems(): void {
    this.cvItemService
      .getEducationItems()
      .then(items => this.educationItems = items);
    this.cvItemService
      .getCertificationItems()
      .then(items => this.certificationItems = items);
    this.cvItemService
      .getLanguageItems()
      .then(items => this.languageItems = items);
  }

  ngOnInit() {
    this.getItems();
  }


}
