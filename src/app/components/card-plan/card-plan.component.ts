import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-plan',
  templateUrl: './card-plan.component.html',
  styleUrls: ['./card-plan.component.css']
})
export class CardPlanComponent implements OnInit {

  @Input()
  timePlan:string ="3 meses"
  @Input()
  pricePlan:string="R$ 74,90"
  @Input()
  dividePrice:string="Igual a R$ 24,97 por mês"

  ngOnInit(): void {
    
  }

}
