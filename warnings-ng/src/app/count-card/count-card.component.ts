import { Component, Input, OnInit} from '@angular/core';
import { Entry } from "../../utils";

@Component({
  selector: 'app-count-card',
  templateUrl: './count-card.component.html',
  styleUrls: ['./count-card.component.css']
})
export class CountCardComponent implements OnInit {
  @Input() entry!: Entry;

  constructor() { }

  ngOnInit(): void {
  }

}
