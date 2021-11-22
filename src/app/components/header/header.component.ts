import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Trckr';

  // runs when an object (component) is initialized
  constructor() { }

 // you can place a component here when you want it to run after it's been initialized 
  ngOnInit(): void {
  }

  toggleAddTask() {
    console.log('toggle');
  }
}
