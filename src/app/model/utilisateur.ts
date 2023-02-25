export class Utilisateur {
    idUtilisateur : number;
    nom : string;
    prenom : string;
    login : string;
    mdp : string ;
    titre : string ;
    constructor(idUtilisateur: number, nom: string, prenom: string, login: string, mdp: string, titre: string) {
        this.idUtilisateur = idUtilisateur;
        this.nom = nom;
        this.prenom = prenom;
        this.login = login;
        this.mdp = mdp;
        this.titre = titre;
    }
}
