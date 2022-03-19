import { Component, OnInit } from '@angular/core';
import { PortfolioApService } from 'src/app/servicios/portfolio-ap.service';

@Component({
  selector: 'app-experienciaslaborales',
  templateUrl: './experienciaslaborales.component.html',
  styleUrls: ['./experienciaslaborales.component.css']
})
export class ExperienciaslaboralesComponent implements OnInit {
  miPortfolio: any;

  constructor(private datosPortfolio:PortfolioApService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio=data;
    });
  }

}