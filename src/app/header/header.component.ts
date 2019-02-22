import { Component, OnInit, HostListener } from "@angular/core";
import { WindowService } from "../window.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  generalData;
  navLinks = [
    { location: "/overview", label: "Overview", icon: "account_circle" },
    { location: "/experience", label: "Experience", icon: "work" },
    { location: "/education", label: "Education", icon: "school" },
    { location: "/projects", label: "Projects", icon: "assignment" },
    { location: "/volunteering", label: "Volunteering", icon: "favorite" },
    { location: "/contact", label: "Contact", icon: "email" },
    { location: "/about", label: "About", icon: "info" }
  ];

  windowWidth: number = window.innerWidth;

  // initial values, the window object may still be undefined during this hook
  ngAfterViewInit() {
    this.windowWidth = window.innerWidth;
  }

  // if screen size changes it'll update
  @HostListener("window:resize", ["$event"])
  resize(event) {
    this.windowWidth = window.innerWidth;
  }

  constructor(private cvItemService: WindowService) {}

  getItems(): void {
    this.generalData = this.cvItemService.getGeneralData();
  }

  ngOnInit() {
    this.getItems();
  }
}
