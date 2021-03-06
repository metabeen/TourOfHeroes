import { Component } from '@angular/core';
import { Hero } from './hero'

@Component({
  selector: 'my-app',
template: `
<h1>{{title}}</h1>
<h2>My favorite hero is: {{myHero.name}}</h2>
<p>Heroes:</p>
	<ul>
		<li *ngFor="let hero of heroes">
		{{hero.name}}
		</li>
	</ul>
`
})
export class AppComponent  { 
title = 'Tour of heroes'; 
heroes = [
new Hero(1, 'Magneto'),
new Hero(13, 'Wolverine'),
new Hero(15, 'Mystic'),
new Hero(20, 'Professor X')
];
myHero = this.heroes[0];
}
