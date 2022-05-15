import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'list';
  profession: string ='';
  statutPPE: string ='';
  probabilite: string ='';
  pays: string ='';
  profilRisque: string ='';
  impact: string ='';
  niveauVigValue: string='';



   obj = {
    name: 'Tom',
    department: 'accounting',
    country: 'Chile',
  };

  obj2 = {
    name: 'Tom',
    department: 'accounting1',
    country: 'Chile',
  };
 listObjet: any =[this.obj, this.obj2]
  constructor(){
     this.fonction();
     this.niveauVig();
  }

fonction(){
  console.log('obj',this.obj)
  console.log('this.obj.name', this.obj.name)
  console.log("list des objects", this.listObjet)
  console.log("list des objects", this.listObjet[0].country)
  console.log('attrbut departement', this.departement)
  console.log('attrbut departement1', this.departementOfList)
}

niveauVig(): void{
  if((this.impact=='H'&& this.probabilite=='H')||
  (this.impact=='H'&& this.probabilite=='M')||
  (this.impact=='M'&& this.probabilite=='H'))
  {this.niveauVigValue='H'}
  else if((this.impact=='M'&& this.probabilite=='M')||
  (this.impact=='L'&& this.probabilite=='H')||
  (this.impact=='H'&& this.probabilite=='L'))
  {this.niveauVigValue='M'}
  else  ((this.impact=='L'&& this.probabilite=='L')||
  (this.impact=='M'&& this.probabilite=='L')||
  (this.impact=='L'&& this.probabilite=='M'))
  {this.niveauVigValue='L'}

}

profilRisquefonction(){
if (this.statutPPE=='O' || this.profilRisque=='H')
{this.profilRisque='H'}
else if (this.statutPPE=='N' && this.profilRisque!='H')
{this.profilRisque='M'}
else (this.statutPPE=='N' )
{this.profilRisque='N'}
}

departement: any=this.obj.department
departementOfList: any=this.listObjet[1].department

}
