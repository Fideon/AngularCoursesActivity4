import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    estado: String;    
    paisSelected: String;
    paises = ["Guatemala", "Belize", "ElSalvador", "Honduras", "Nicaragua"];
    estados = [];
    Guatemala = ["Alta Verapaz", "Baja Verapaz", "Chimaltenango", "Chiquimula", "El Progreso"];
    Belize = ["Belize", "Cayo", "Corozal", "Orange Walk", "Stann Creek", "Toledo"];
    ElSalvador = ["Ahuachapan", "Cabanas", "Cuscatlan", "La Libertad", "Chalatenango"];
    Honduras = ["Atlantida", "Choluteca", "Colon", "Comayagua"];
    Nicaragua = ["Boaco", "Carazo", "Chinandega", "Chontales"];
    CostaRica = ["Alajuela", "Cartago", "Guanacaste", "Heredia"];
    Panama = ["Bocas Del Toro", "Chiriqui", "Cocle", "Colon"];
    Ecuador = ["Azuay", "Bolivar", "Canar", "Carchi"];
    Paraguay = ["Concepcion", "San Pedro", "Cordillera", "Guaira"];
    Uruguay = ["Artigas", "Canelones", "Cerro Largo", "Colonia"];

  constructor() { }

  save()
  {
    
  }
  
  cambio()
  {
    if(this.paisSelected == "Guatemala")
    {
      this.estados = this.Guatemala;
    }
    else if(this.paisSelected == "Belize")
    {
      this.estados = this.Belize;
    }
    else if(this.paisSelected == "ElSalvador")
    {
      this.estados = this.ElSalvador;
    }
    else if(this.paisSelected == "Honduras")
    {
      this.estados = this.Honduras;
    }
    else if(this.paisSelected == "Nicaragua")
    {
      this.estados = this.Nicaragua;
    }
  }

  ngOnInit() {
    
  }

}
