import { Routes} from "@angular/router";

export const routes:Routes=[
    {path:'', 
    loadChildren:()=>import('./form/form.module').then(m=>m.FormModule)}
]