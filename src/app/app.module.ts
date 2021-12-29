import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CardComponent } from "./components/card/card.component";
import { SectionTestComponent } from "./components/section-test/section-test.component";
import { ReactiveFormComponent } from "./components/reactive-form/reactive-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignInModule } from "./pages/sign-in/sign-in.module";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    SectionTestComponent,
    ReactiveFormComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    SignInModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
