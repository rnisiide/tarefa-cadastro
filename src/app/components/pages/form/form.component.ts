import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder } from '@angular/forms';
import { Contacts } from 'src/app/Contacts';
import { CepserviceService } from 'src/app/services/cepservice.service';

@Component({
  selector: 'form-modal',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {
  public contatos: any[] = [];
  public form: FormGroup;

  documenttype: string = '';


  tipodocumento = [
    {id: 1, display: 'CPF'}, 
    {id: 2, display: 'CNPJ'},
  ]

  constructor(private fb:FormBuilder, private cepService:CepserviceService) {
    this.loadData();
    this.form = this.fb.group({
      id: [''],
      numDoc: ['', Validators.required],  
      documento: [''],      
      nome: ['', Validators.required],
      nomefantasia: [''],
      cep: ['', Validators.required],
      logradouro: [''],
      bairro: [''],
      cidade: [''],
      telefone: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required, 
        Validators.email])],
    })
  }

  consultaCep(e: Event, form: any) {
    const target = e.target as HTMLInputElement
    const value = target.value
    this.cepService.buscar(value).subscribe((dados) => this.populaForm(dados))
  }

populaForm(dados:any) {

    console.log(dados);
    let dadosRecebidos = dados;
    if (dadosRecebidos.hasOwnProperty('erro') === true) {
      this.form.patchValue({
      logradouro: 'O CEP informado é inválido',    
      bairro: 'Digite um CEP válido'    
      }) 
    } else {

    this.form.patchValue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
    })}
  } 

  ngOnInit(): void {   
  }


  loadData() {
    let data:any = localStorage.getItem('contatos');
    this.contatos = JSON.parse(data);
  }



submit() {
    if (this.form.invalid) {
      alert('Preencha todos os dados corretamente');
      return
    }
 
    const id = this.contatos.length +1;
    const numDoc = this.form.controls['numDoc'].value
    const documento = this.form.controls['documento'].value
    const nome = this.form.controls['nome'].value
    const nomefantasia = this.form.controls['nomefantasia'].value
    const cep = this.form.controls['cep'].value
    const logradouro = this.form.controls['logradouro'].value
    const bairro = this.form.controls['bairro'].value
    const cidade = this.form.controls['cidade'].value
    const telefone = this.form.controls['telefone'].value
    const email = this.form.controls['email'].value


    this.contatos.push(new Contacts(id, numDoc, documento, nome, nomefantasia, cep, logradouro, bairro, cidade, telefone, email))
    
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
    alert('Dados inseridos corretamente!');
    this.clear(); 
  } 

  clear(){
  this.form.reset(); 
  }
}
