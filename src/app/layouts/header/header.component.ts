import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userEmail: string | undefined;

  constructor() {}

  ngOnInit(): void {
    this.userEmail = JSON.parse(localStorage.getItem('user')).email;
  }

}
