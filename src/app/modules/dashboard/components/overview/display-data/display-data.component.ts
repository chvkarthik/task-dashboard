import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/modules/services/data.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss'],
})
export class DisplayDataComponent {
  apiData: any = {};
  width: number = 0;


  constructor(private dataService: DataService) {
    this.dataService.apiDataSubject$.subscribe((val) => {
      this.apiData = val;
      this.width = this.apiData?.balance?.payment_done_percentage;
    });
  }
}
