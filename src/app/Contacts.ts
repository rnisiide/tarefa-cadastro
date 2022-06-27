/* export interface Contacts {
    id: number,
    numDoc: number,
    documento: string,
    nome: string,
    nomefantasia?: string,
    cep: number,
    adress: string,
    bairro: string,
    cidade: string,
    telefone: number,
    email: string,
}
  */

export class Contacts {
    constructor( 
        public id: number,
        public numDoc: number,
        public documento: string,
        public nome: string,
        public nomefantasia: string,
        public cep: string,
        public adress: string,
        public bairro: string,
        public cidade: string,
        public telefone: number,
        public email: string,
    ) {}
}