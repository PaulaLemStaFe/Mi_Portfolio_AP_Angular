import { Component, OnInit } from '@angular/core';
import { PortfolioApService } from 'src/app/servicios/portfolio-ap.service';

@Component({
  selector: 'app-banneryquiensoy',
  templateUrl: './banneryquiensoy.component.html',
  styleUrls: ['./banneryquiensoy.component.css']
})
export class BanneryquiensoyComponent implements OnInit {
  miPortfolio: any;

  constructor(private datosPortfolio:PortfolioApService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio=data;
    });
  }

}