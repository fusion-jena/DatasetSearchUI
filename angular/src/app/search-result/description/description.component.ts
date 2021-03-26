import {Component, Input, OnInit} from '@angular/core';
import {Description} from '../../models/result/description';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  @Input() des: Description;
  showMore = false;
  constructor() { }

  ngOnInit(): void {
  }
  showLess(length): boolean {
    if (this.showMore === true) {
      return true;
    }else {
      return length <= 400;
    }
  }

}
