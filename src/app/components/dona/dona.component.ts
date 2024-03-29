import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {
   
  @Input() title: string = "Sin titulo";

  constructor() { }

  ngOnInit(): void {
  }

  
  @Input('labels') doughnutChartLabels: Label[] = ['Label1', 'Label2', 'Label3'];
  
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    { backgroundColor: ['#6857E6', '#009FEE', '#F02059'] }
  ];
  
}
