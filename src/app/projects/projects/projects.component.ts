import { Component, OnInit } from '@angular/core';
import { CvItem } from 'src/app/model/CvItem.model';
import { WindowService } from 'src/app/window.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectItems: CvItem[];
  title = 'Projects';

  constructor(
    private cvItemService: WindowService
  ) { }

  getItems(): void {
    this.cvItemService
      .getProjectItems()
      .then(items => this.projectItems = items);
  }

  ngOnInit() {
    this.getItems();
  }

}
