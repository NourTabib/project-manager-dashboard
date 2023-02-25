export class Projet {
    idP : number ;
    nomP : string;
    category :string ;
    descriptionP:string ;
    dateDebutP: Date ;
    dateFinP: Date ;
    Budget: number ;
    constructor(idP: number, nomP: string, category: string, descriptionP: string, dateDebutP: Date, dateFinP: Date, Budget: number) {
        this.idP = idP;
        this.nomP = nomP;
        this.category = category;
        this.descriptionP = descriptionP;
        this.dateDebutP = dateDebutP;
        this.dateFinP = dateFinP;
        this.Budget = Budget;
    }
}
