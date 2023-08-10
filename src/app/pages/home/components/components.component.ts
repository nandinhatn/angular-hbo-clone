import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})


export class ComponentsComponent  implements OnInit{

 styleActive:string = ""
  image:string =""
  title:string=""

  filmes:any[]= [
    
    {"name": 'My Adventureswith superman', "image": "superman.avif"},
     {"name": 'Gossip Girl (2007)', "image": "gosip.avif"},
     {"name": 'winning time', "image": "winning_time.avif"},
     {"name": 'full cricle', "image": "fullcircle.avif"},
     {"name": 'and just like that', "image": "justlikethat.avif"},
     {"name": 'alem do guarda-roupas', "image": "alemdo.avif"},
     {"name": 'and just like that', "image": "justlikethat.avif"},
     {"name": 'alem do guarda-roupas', "image": "alemdo.avif"}

 

    
    ]
    carousel:any[]= []

   
  


    constructor(){}
    separateImages(){
      let active:string=""
    
      for(let i=0; i <= this.filmes.length; i+=3){
        console.log('filmes',this.filmes)
        this.carousel.push([this.filmes.splice(0,3)])
        console.log('filmes',this.filmes)
        console.log('carousel', this.carousel)

      }
    
     
     
    }

  
  
  ngOnInit(): void {

    


    
  this.separateImages()

  if(this.carousel[0]){
    this.styleActive="active"
    console.log('style',this.styleActive)
  }else{
    this.styleActive=""
    console.log('style',this.styleActive)
  }

  
 
  }
  

}
