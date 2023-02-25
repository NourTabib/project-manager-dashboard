export class Tache {
    idTache : number;
    titre : string;
    description : string;
    dateDebutT : Date;
    FK_idP : number ;
    constructor(idTache: number, titre: string, description: string, dateDebutT: Date, FK_idP: number) {
        this.idTache = idTache;
        this.titre = titre;
        this.description = description;
        this.dateDebutT = dateDebutT;
        this.FK_idP = FK_idP;
    }
}
