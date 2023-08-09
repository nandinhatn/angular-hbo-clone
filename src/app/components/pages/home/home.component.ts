import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input()
  timePlan:string ="3 meses"
  @Input()
  pricePlan:string="R$ 74,90"
  @Input()
  dividePrice:string="Igual a R$ 24,97 por mês"
  @Input()
  economize:string=""
  @Input()
  title:string=""
  @Input()
  btnText:string=""
  ngOnInit(): void {
  
  }

}
