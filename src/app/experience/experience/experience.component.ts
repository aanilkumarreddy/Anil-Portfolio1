import { Component, OnInit } from "@angular/core";
import { CvItem } from "src/app/model/CvItem.model";
import { WindowService } from "src/app/window.service";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.css"]
})
export class ExperienceComponent implements OnInit {
  experienceItems: CvItem[];
  title = "Professional Experience";

  constructor(private cvItemService: WindowService) {}

  getItems(): void {
    this.cvItemService
      .getCvItems()
      .then(items => (this.experienceItems = items));
  }

  ngOnInit() {
    this.getItems();
  }
}
