import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projet } from 'src/app/model/projet';
import { Timesheet } from 'src/app/model/timesheet';
import { Utilisateur } from 'src/app/model/utilisateur';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
  Projets : Projet[] = [
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
  TimeSheets : Timesheet[] = [
    {
      "idTimesheet": 1,
      "nbrHeures": 8,
      "FK_Projet": 1,
      "FK_utilisateur": 1
    },
    {
      "idTimesheet": 2,
      "nbrHeures": 6,
      "FK_Projet": 1,
      "FK_utilisateur": 2
    },
    {
      "idTimesheet": 3,
      "nbrHeures": 7,
      "FK_Projet": 1,
      "FK_utilisateur": 3
    }
  ];
  Users : Utilisateur[] = [
    {
      "idUtilisateur": 1,
      "nom": "Dupont",
      "prenom": "Jean",
      "login": "jean.dupont",
      "mdp": "password123",
      "titre": "Développeur"
    },
    {
      "idUtilisateur": 2,
      "nom": "Martin",
      "prenom": "Sophie",
      "login": "sophie.martin",
      "mdp": "password456",
      "titre": "Testeur"
    },
    {
      "idUtilisateur": 3,
      "nom": "Leblanc",
      "prenom": "Pierre",
      "login": "pierre.leblanc",
      "mdp": "password789",
      "titre": "DevOps"
    }
  ]
  Project : Projet = {
    "idP": 0,
    "nomP": "",
    "category": "",
    "descriptionP": "",
    "dateDebutP": new Date("2023-02-15T00:00:00.000Z"),
    "dateFinP": new Date("2024-02-15T00:00:00.000Z"),
    "Budget": 0
  } ;
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id']
      this.Project = this.Projets.filter(item => item.idP = id)[0];
      console.log(this.Project)
    })
  }

}
