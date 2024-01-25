import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello</h1>
    <a href="alandsbanken://open-url:https://jp3.eu/aland">alandsbanken://open-url:https://jp3.eu/aland</a><br>
<br>
<a href="alandsbanken://open-url">alandsbanken://open-url</a><br>
<br>
<a href="twitter://user?screen_name=ler">Twitter</a>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
