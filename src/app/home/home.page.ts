import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  hola=[
  {
    GTA:"FUE POR PAN ... Y LE DIERON. PAN PAN PAN",
    danny:"Jorge de 25 anos, fue hayado muerto. (De risa)",
    jorge:"https://laroussecocina.mx/wp-content/uploads/2023/01/Pan-viene%E2%95%A0us-de-chipotle.jpg.webp"}, 
    {
      GTA:"FUE POR VINO ... Y YA NUNCA VINO", 
      danny:"JOHN DE 26 AÑOS. MURIÓ.", 
      jorge:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Sonar-con-la-muerte-personificada-no-tengas-miedo-lg.jpg/640px-Sonar-con-la-muerte-personificada-no-tengas-miedo-lg.jpg"
    }, 
    
    {
      GTA:"AMOR PROHIBIDO ENTRE DOS ALMAS" ,
      danny:"JORGE Y JOHN, UN AMOR IMPOSIBLE." ,
      jorge:"https://www.hakunamatata.com.co/wp-content/uploads/2020/09/preguntas-amores-prohibidos.jpg"

    } 
  ]

  constructor() {}

}
