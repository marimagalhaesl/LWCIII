import { LightningElement } from 'lwc';

export default class Secondlwcactivity extends LightningElement {

    leads = [
        {id: 1, primeironome: "Mariana", sobrenome: "Magalhães Lima", idade: 26, email: "maari.magalhaes@hotmail.com", classificacao: "Warm", empresa: "SoulCode", receitaanual: "123,456"},
        {id: 2, primeironome: "Bertha", sobrenome: "Boxer", idade: 45, email: "bertha@fcof.net", classificacao: "Hot", empresa: "Farmers Coop. of Florida", receitaanual: "900,750"},   
        {id: 3, primeironome: "Andy", sobrenome: "Young", idade: 37, email: "a_young@dickenson.com", classificacao: "Cold", empresa: "Dickenson plc", receitaanual: "250,000"}
    ];
}
