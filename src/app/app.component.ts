import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jokes';
  setup = "";
  showPunchline = false;
  punchline = "";

  constructor(private _httpService: HttpService) { }

  ngOnInit () {
    this.getNewJoke();
  }

  togglePunchline () {
    this.showPunchline = !this.showPunchline;
  }

  getNewJoke() {
    let comedian = this._httpService.getJoke();
    comedian.subscribe(data => {
      this.showPunchline = false;
      this.setup = data["setup"];
      this.punchline = data["punchline"];
    });
  }

}
