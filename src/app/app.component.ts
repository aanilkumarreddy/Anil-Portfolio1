import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Title } from "@angular/platform-browser";
import { Router, NavigationEnd } from "@angular/router";
import { WindowService } from "./window.service";
import { AngularFireDatabase } from "@angular/fire/database";
import * as cvItemsData from "./model/cvItem.data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  generalData;
  countObservable: Observable<any>;
  count;
  initialCountLoaded;
  promise;
  loaded = false;

  public constructor(
    private cvItemService: WindowService,
    private titleService: Title,
    private router: Router,
    db: AngularFireDatabase
  ) {
    const itemRefForProfile = db.object("profile").valueChanges();
    itemRefForProfile.subscribe((data: any) => {
      localStorage.setItem("profile", JSON.stringify(data));
      cvItemsData.GENERAL.position = data.designation;
      this.loaded = true;
    });

    this.getItems();
    this.setTitle(this.generalData.name + " | " + this.generalData.position);
    this.countObservable = db.object("users").valueChanges();

    this.countObservable.subscribe(data => {
      this.count = 1 + parseInt(data.count, 10);
    });

    setTimeout(() => {
      const itemRef = db.object("users");
      itemRef.set({ count: 1 + +this.count });
    }, 5000);

    router.events
      // .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        window.scrollTo(0, 0);
      });
  }
  ngOnInit(): void {}

  getItems(): void {
    this.generalData = this.cvItemService.getGeneralData();
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
