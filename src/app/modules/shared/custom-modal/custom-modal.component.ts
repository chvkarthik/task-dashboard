import { Component, ViewContainerRef, inject } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent {
  vcr = inject(ViewContainerRef);
  data:any={
    name: '',
    type: ''
  };

  ngOnInit(){}

  closeModal(){
    this.vcr.element.nativeElement.style.display = 'none';
  }
}
