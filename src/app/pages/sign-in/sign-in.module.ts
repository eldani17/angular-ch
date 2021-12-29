import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SignInComponent } from "./sign-in.component";
import { SignInRoutingModule } from "./sign-in-routing.module";
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    SignInRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [SignInComponent],
})
export class SignInModule {}
