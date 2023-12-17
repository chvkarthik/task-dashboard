import { Component } from '@angular/core';
import { DataService } from 'src/app/modules/services/data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {

    apiData:any={};
    width:any;

    constructor(private dataService: DataService){}

    ngOnInit(){
      this.getData();
    }

    getData(){
      this.dataService.getResponseData().subscribe({
        next:(res:any)=>{
          this.apiData = res;
          this.dataService.apiData = this.apiData;
        },
        error: (err:any)=>{
        }
      })
    }
}
