import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  @Input() width:any;
  remainingWidth:any;

  constructor(){}

  ngOnInit(){
    this.setWidth();
  }

  ngOnChanges(){
    this.setWidth();
  }

  setWidth(){
    this.remainingWidth = (100 - this.width)+'%';
    this.width = this.width + '%';
  }
}
