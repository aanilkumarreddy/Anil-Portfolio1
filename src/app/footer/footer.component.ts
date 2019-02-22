import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public currentYear: Number = new Date().getFullYear();

  @Input() count;
  constructor() { }

  ngOnInit() {
  }
}
