import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";

import {Observable} from "rxjs";

interface Dates {
  display: string;
  date: object;
}

interface Results {
  home_name: string;
  home_goals: string;
  away_name: string;
  away_goals: string;
}
@Component({
  selector: 'app-footy-results',
  templateUrl: './footy-results.component.html',
  styleUrls: ['./footy-results.component.css']
})
export class FootyResultsComponent {
  constructor(private httpClient: HttpClient) {
  }
  dataSource = new MatTableDataSource<Results[]>();
  results: Observable<Results>[] = [];
  dateArray : Dates[] = [];
  selectedDate = this.dateArray[0]
  displayedColumns: string[] = ['home_name', 'home_goals', 'away_name', 'away_goals']

  ngOnInit(){
    this.getDateArray()
    this.getAllResults(this.dateArray[0])
  }
  getAllResults(date: object){
    let url = "/api/v1/get_results_date"
    let body = {stuff: date}
    this.httpClient.post<Observable<Results>[]>(url, body).subscribe(res => {
      this.results = res
      console.log("Results - ", date, res)
    })
  }

  getDateArray() {

    for (let i = 0; i <= 7; i++) {
      let target_date = new Date()
      target_date.setDate(target_date.getDate() - i);
      if (i === 0){
        this.dateArray.push({display: "Today", date:target_date})
      }
      else{
        this.dateArray.push({display: target_date.toLocaleDateString("en-gb"), date:target_date})
      }

      console.log(target_date.toLocaleDateString('en-gb'))
    }
    console.log(this.dateArray)
    this.selectedDate = this.dateArray[0]
  }
}

