import { Component } from '@angular/core';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent {

  showStrip:boolean = true;
  

  disableShow(){
    this.showStrip = false
  }
  
}
