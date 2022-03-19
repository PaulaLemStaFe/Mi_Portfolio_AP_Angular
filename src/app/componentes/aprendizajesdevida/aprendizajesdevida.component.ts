import { Component, OnInit } from '@angular/core';
import { PortfolioApService } from 'src/app/servicios/portfolio-ap.service';

@Component({
  selector: 'app-aprendizajesdevida',
  templateUrl: './aprendizajesdevida.component.html',
  styleUrls: ['./aprendizajesdevida.component.css']
})
export class AprendizajesdevidaComponent implements OnInit {
  miPortfolio: any;

  constructor(private datosPortfolio:PortfolioApService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio=data;
    });
  }

}