import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { TemplateFormComponent } from "./template-form/template-form.component";
import { UserListComponent } from "./user-list/user-list.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "users", component: UserListComponent },
  { path: "reactive-forms", component: ReactiveFormComponent },
  { path: "template-forms", component: TemplateFormComponent }
  // {
  //   path: "users",
  //   loadChildren: () =>
  //     import("./user-list/user-routes/users.module").then(m => m.UsersModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
