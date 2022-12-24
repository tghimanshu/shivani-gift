import { Component } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent {
  firstText: Boolean = false;
  secondText: Boolean = false;

  constructor() {}

  ngOnInit(): void {}

  changeFirstText() {
    this.firstText = !this.firstText;
  }

  changeSecondText() {
    this.secondText = !this.secondText;
  }
}
