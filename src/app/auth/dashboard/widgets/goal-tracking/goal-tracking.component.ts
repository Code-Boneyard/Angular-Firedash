import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goal-tracking',
  templateUrl: './goal-tracking.component.html',
  styleUrls: ['./goal-tracking.component.css']
})
export class GoalTrackingComponent {
  title = 'Cost Per System';
  type = 'PieChart';
  data = [
     ['Firefox', 45.0],
     ['IE', 26.8],
     ['Chrome', 12.8],
     ['Safari', 8.5],
     ['Opera', 6.2],
     ['Others', 0.7]
  ];
  columnNames = ['Browser', 'Percentage'];
  options = {
  };
  width = 550;
  height = 400;


}
