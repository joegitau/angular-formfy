import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { TemplateFormComponent } from "./template-form/template-form.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "reactive-forms", component: ReactiveFormComponent },
  { path: "template-forms", component: TemplateFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
