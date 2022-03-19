import { Component, OnInit } from '@angular/core';
import { PortfolioApService } from 'src/app/servicios/portfolio-ap.service';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent implements OnInit {
  miPortfolio: any;

  constructor(private datosPortfolio:PortfolioApService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio=data;
    });
  }

}