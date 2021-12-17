import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
//import { ROUTES } from "@constants/routes";

const routes: Routes = [
  {
    path: "login",
    loadChildren: () =>
      import("./pages/sign-in/sign-in.module").then((pm) => pm.SignInModule),
  },
  {
    path: "**",
    redirectTo: `login`,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
