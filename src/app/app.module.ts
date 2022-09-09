import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavLayoutComponent } from './components/nav-layout/nav-layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegistreComponent } from './components/registre/registre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListefleurComponent } from './components/efleur/listefleur/listefleur.component';
import { ListestapmComponent } from './components/estamp/listestapm/listestapm.component';
import { ListDemandeComponent } from './components/demandeProduit/list-demande/list-demande.component';
import { AjoutDemandeComponent } from './components/demandeProduit/ajout-demande/ajout-demande.component';
import { UpdateEstampComponent } from './components/estamp/update-estamp/update-estamp.component';
import { UpdateEfleurComponent } from './components/efleur/update-efleur/update-efleur.component';
import { ProductComponent } from './components/product/product.component';
import { AgentComponent } from './components/utilisateur/agent/agent.component';
import { ClientComponent } from './components/utilisateur/client/client.component';
import { AjoutUtilisateurComponent } from './components/utilisateur/ajout-utilisateur/ajout-utilisateur.component';
import { ListefleurOuiComponent } from './components/efleur/listefleur-oui/listefleur-oui.component';
import { ListestapmOuiComponent } from './components/estamp/listestapm-oui/listestapm-oui.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    LayoutComponent,
    NavLayoutComponent,
    LoginComponent,
    RegistreComponent,
    ListefleurComponent,
    ListestapmComponent,
    ListDemandeComponent,
    AjoutDemandeComponent,
    UpdateEstampComponent,
    UpdateEfleurComponent,
    ProductComponent,
    AgentComponent,
    ClientComponent,
    AjoutUtilisateurComponent,
    ListefleurOuiComponent,
    ListestapmOuiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    /*RouterModule.forRoot([]),
  */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
