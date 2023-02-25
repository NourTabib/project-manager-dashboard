export class Timesheet {
    idTimesheet: number;
    nbrHeures: number;
    FK_Projet: number;
    FK_utilisateur: number;

  constructor(idTimesheet: number, nbrHeures: number, FK_Projet: number, FK_utilisateur: number) {
    this.idTimesheet = idTimesheet;
    this.nbrHeures = nbrHeures;
    this.FK_Projet = FK_Projet;
    this.FK_utilisateur = FK_utilisateur;
  }
}
