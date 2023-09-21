import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";

import * as moment from "moment";

interface Dates {
  display: string;
  date: string;
}

interface Fixtures {
  fixture_time: string;
  home_name: string;
  away_name: string;
  league_name: string;
  home_score: bigint;
  away_score: bigint;
  btts: bigint;
  "O1.5": bigint;
  "O2.5": bigint;
}

@Component({
  selector: 'app-footy-fixtures',
  templateUrl: './footy-fixtures.component.html',
  styleUrls: ['./footy-fixtures.component.css']
})



export class FootyFixturesComponent {
  testValue: any;

  displayedColumns: string[] = ['fixture_time',
    'home_name',
    'away_name',
    'league_name',
    'home_score',
    'away_score',
    'btts', 'O1.5','O2.5']

  selectedValue = "1"

  constructor(private httpClient: HttpClient) {
  }
  // dataSource = new MatTableDataSource<Fixtures[]>();
  fixtures: Observable<Fixtures>[] = [];
  dateArray : Dates[] = [];
  selectedDate = this.dateArray[0]
  ngOnInit(){
    this.getDateArray()
    this.getAllFixtures(this.dateArray[0])
  }

  getDateArray() {

    for (let i = 0; i <= 7; i++) {
      let target_date = new Date()
      target_date.setDate(target_date.getDate() + i);
      let date_string = target_date.toISOString().substring(0, 10)
      if (i === 0){
        this.dateArray.push({display: "Today", date:date_string})
      }
      else if (i === 1){
        this.dateArray.push({display: "Tomorrow", date:date_string})
      }
      else{
        this.dateArray.push({display: target_date.toLocaleDateString("en-gb"), date:date_string})
      }

      console.log(target_date.toLocaleDateString('en-gb'))
      console.log("String", date_string)
    }
    console.log(this.dateArray)
    this.selectedDate = this.dateArray[0]

  }

  getAllFixtures(date: Dates){
    let url = "/api/fixtures"
    let body = {date: date.date,
                                           is_main: true}
    this.httpClient.post<Observable<Fixtures>[]>(url, body).subscribe(res => {
      this.fixtures = res
      console.log("Fixtures - ", date, res)
    })
  }

}
