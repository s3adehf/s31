import {Component} from '@angular/core';
import 'moment/locale/ru';
import * as moment from "moment";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = 'calendarProject';
  // dates1 = [1,2,3,4,5,6,7]
  // dates2 = [8,9,10,11,12,13,14]
  // dates3 = [15,16,17,18,19,20,21]
  // dates4 = [22,23,24,25,26,27,28]
  // dates5 = [30,1,2,3,4,5,6]

  // dates = [
  //   [28,29,30,1,2,3,4],
  //   [5,6,7, 8, 9,10,11],
  //   [12,13,14,15,16,17,18],
  //   [19,20,21,22,23,24,25],
  //   [26,27,28,29,30,31,1]
  // ]


  // dates = [
  //   [
  //     moment().month(10).date(28).format('D'),
  //     moment().month(10).date(29).format('D'),
  //     moment().month(10).date(30).format('D'),
  //     moment().month(11).date(1).format('D'),
  //     moment().month(11).date(2).format('D'),
  //     moment().month(11).date(3).format('D'),
  //     moment().month(11).date(4).format('D')
  //   ],
  //   [
  //     moment().month(11).date(5).format('D'),
  //     moment().month(11).date(6).format('D'),
  //     moment().month(11).date(7).format('D'),
  //     moment().month(11).date(8).format('D'),
  //     moment().month(11).date(9).format('D'),
  //     moment().month(11).date(10).format('D'),
  //     moment().month(11).date(11).format('D')
  //   ],
  //   [
  //     moment().month(11).date(12).format('D'),
  //     moment().month(11).date(13).format('D'),
  //     moment().month(11).date(14).format('D'),
  //     moment().month(11).date(15).format('D'),
  //     moment().month(11).date(16).format('D'),
  //     moment().month(11).date(17).format('D'),
  //     moment().month(11).date(18).format('D')
  //   ],
  //   [
  //     moment().month(11).date(19).format('D'),
  //     moment().month(11).date(20).format('D'),
  //     moment().month(11).date(21).format('D'),
  //     moment().month(11).date(22).format('D'),
  //     moment().month(11).date(23).format('D'),
  //     moment().month(11).date(24).format('D'),
  //     moment().month(11).date(25).format('D')
  //   ],
  //   [
  //     moment().month(11).date(26).format('D'),
  //     moment().month(11).date(27).format('D'),
  //     moment().month(11).date(28).format('D'),
  //     moment().month(11).date(29).format('D'),
  //     moment().month(11).date(30).format('D'),
  //     moment().month(11).date(31).format('D'),
  //     moment().month(12).date(1).format('D')
  //   ]
  // ]

  dates = [
    [

    ],
    [],
    [],
    [],
    []
  ]

  constructor() {
    moment.locale('ru');
  }
  date = moment();

}


