import { Component, OnInit } from '@angular/core';
import { Projet } from 'src/app/model/projet';
import { ProjetService } from 'src/app/service/projet-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  Projets : Projet[] = [];
  constructor(private projetService : ProjetService,private router: Router) { }

  ngOnInit(): void {
    this.Projets = [
      {
        "idP": 1,
        "nomP": "Projet de développement",
        "category": "Développement logiciel",
        "descriptionP": "Un projet pour développer un nouveau logiciel de gestion",
        "dateDebutP": new Date("2023-02-15T00:00:00.000Z"),
        "dateFinP": new Date("2024-02-15T00:00:00.000Z"),
        "Budget": 5000
      },
      {
        "idP": 2,
        "nomP": "Projet de recherche",
        "category": "Recherche scientifique",
        "descriptionP": "Un projet pour faire avancer la recherche sur les cellules souches",
        "dateDebutP": new Date("2023-03-01T00:00:00.000Z"),
        "dateFinP": new Date("2025-03-01T00:00:00.000Z"),
        "Budget": 10000
      },
      {
        "idP": 3,
        "nomP": "Projet de construction",
        "category": "Construction de bâtiments",
        "descriptionP": "Un projet pour construire un nouveau centre commercial",
        "dateDebutP": new Date("2023-04-01T00:00:00.000Z"),
        "dateFinP": new Date("2024-12-31T00:00:00.000Z"),
        "Budget": 20000
      }
    ];
  }
  navigateToProjet(id: number) {
    this.router.navigate(['/projet', id]);
  }
}
