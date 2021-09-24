import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RestService } from "../../services/rest.service";

@Component({
  selector: 'app-crime',
  templateUrl: './crime.component.html',
  styleUrls: ['./crime.component.css']
})
export class CrimeComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

}
