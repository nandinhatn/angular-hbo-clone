import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-animation',
  templateUrl: './button-animation.component.html',
  styleUrls: ['./button-animation.component.css']
})
export class ButtonAnimationComponent implements OnInit {
  @Input()
  title:string=""
  ngOnInit(): void {
    
  }

}
