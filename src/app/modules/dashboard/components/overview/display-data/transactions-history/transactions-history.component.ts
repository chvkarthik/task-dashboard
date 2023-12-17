import { Component, TemplateRef, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { DataService } from 'src/app/modules/services/data.service';
import { CustomModalComponent } from 'src/app/modules/shared/custom-modal/custom-modal.component';

@Component({
  selector: 'app-transactions-history',
  templateUrl: './transactions-history.component.html',
  styleUrls: ['./transactions-history.component.scss']
})
export class TransactionsHistoryComponent {
  vcr = inject(ViewContainerRef);
  apiData: any = {};
  displayData:any={}
  bgColor=['#3b82f6','#e05417','#293056', '#47be7d', '#eab308']
  compRef:any='';
  constructor(private dataService: DataService) {
    this.dataService.apiDataSubject$.subscribe((val) => {
      this.apiData = val;
      this.displayData = val?.transactions;
    });
  }

  ngOnInit(){}

  ngAfterViewInit() {
    this.compRef = this.vcr.createComponent(CustomModalComponent);
    this.compRef.location.nativeElement.style.display = "none"
    this.compRef.changeDetectorRef.detectChanges();
  }

  search(event:any){
    this.displayData = this.apiData.transactions
    if(!event.target.value){
      return;
    }
    if(this.displayData && this.displayData?.length > 0 && event.target.value){
      this.displayData = this.displayData?.filter((ele:any)=> ele.name.toLowerCase().includes(event.target.value))
    }
  }

  openModal(item:any){
    this.compRef.location.nativeElement.style.display = "block"
    Object.assign(this.compRef.instance.data,item)
  }
}
