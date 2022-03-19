import { Component, OnInit } from '@angular/core';
import { PortfolioApService } from 'src/app/servicios/portfolio-ap.service';

@Component({
  selector: 'app-conocimientosinformaticos',
  templateUrl: './conocimientosinformaticos.component.html',
  styleUrls: ['./conocimientosinformaticos.component.css']
})
export class ConocimientosinformaticosComponent implements OnInit {
  miPortfolio: any;

  constructor(private datosPortfolio:PortfolioApService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio=data;
    });
  }

}