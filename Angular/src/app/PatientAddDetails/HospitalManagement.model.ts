import {
    NgForm,
        FormGroup,
        FormControl,Validators,FormBuilder
    } from '@angular/forms'


export class PatientModel{

    id: number=0;
    diseaseName: string="";
    name:string = "";
    problemDescription:string = "";
    //gDiseaseObj: Array<GDisease>= new Array<GDisease>();
    patientProblems: Array<PatientProblem>= new Array<PatientProblem>();  //  Array to store multiple Problem Description
    formPatientGroup :FormGroup=null;
    constructor(){
        var _builder=new FormBuilder();
        this.formPatientGroup=_builder.group({});
        this.formPatientGroup.addControl("NameControl",new FormControl('',Validators.required));
        this.formPatientGroup.addControl("ProblemDescriptionControl",new FormControl('',Validators.required));
    }

}
export class PatientProblem{
    id: number=0;
    problemDescription:string="";

}

// export class GDisease{
//     id: number=0
//     diseaseName:string="";
// }


export class Disease{
    id: number=0
   name:string="";
}
 


