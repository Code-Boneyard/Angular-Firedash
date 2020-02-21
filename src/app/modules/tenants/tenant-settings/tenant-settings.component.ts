import { Component, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  templateUrl: './tenant-settings.component.html',
  styleUrls: ['./tenant-settings.component.scss']
})
export class TenantSettingsComponent implements OnInit {
  panelOpenState = false;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'SFO Terminal 3 West Modernization'},
    {value: 'pizza-1', viewValue: 'SF Crime Lab'},
    {value: 'tacos-2', viewValue: 'Facebook MPK 61 & 62'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
