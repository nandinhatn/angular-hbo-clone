import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-plan',
  templateUrl: './card-plan.component.html',
  styleUrls: ['./card-plan.component.css']
})
export class CardPlanComponent implements OnInit {
  styleBorder:string="borderOut"

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
    if(this.economize){
      this.styleBorder="border"
    }
  }

}
