import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-access',
  templateUrl: './request-access.component.html',
  styleUrls: ['./request-access.component.scss']
})
export class RequestAccessComponent implements OnInit {
  email: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

}
