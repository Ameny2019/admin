import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FleursService } from 'src/app/services/fleurs.service';

@Component({
  selector: 'app-update-efleur',
  templateUrl: './update-efleur.component.html',
  styleUrls: ['./update-efleur.component.css']
})
export class UpdateEfleurComponent implements OnInit {


  efleur:any;
  formEfleur:FormGroup
  id:string=this.activated.snapshot.params['idEfleur'];


  constructor(private activated:ActivatedRoute,private formBuilder:FormBuilder,private router:Router,private efleureService:FleursService) { }

  ngOnInit(): void {
    this.formEfleur = this.formBuilder.group({
      nom:'',
      description:'',
      QunatityEfleurDisponible:0
    })

    this.getEfleurById();

  }

  getEfleurById(){
    this.efleureService.getFleurById(this.id).subscribe((res:any)=> {
      console.log("efleur is : ",res.data);
      this.efleur = res.data;
      this.formEfleur.patchValue({
        nom:this.efleur.nom,
        description:this.efleur.description,
        QunatityEfleurDisponible:this.efleur.QunatityEfleurDisponible
      })
      
    })
  }

  add(){

    console.log("estamps is like :",this.formEfleur.value)
    this.efleureService.updateEfleur(this.formEfleur.value,this.id).subscribe(
      (res:any) => {
        console.log("product :",res);
        this.router.navigateByUrl('/home/listDemande')
      }
    )
  }



}