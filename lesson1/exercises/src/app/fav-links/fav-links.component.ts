import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks:[];
  link1 = "https://www.launchcode.org/";
  link2 = "https://www.w3schools.com/";
  link3 =  "https://storyberries.com/category/fairy-tales/famous-fairy-tales/";
  constructor() { }

  ngOnInit() {
  }

}
