import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { AddressFormComponent } from './address-form/address-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { TituloComponent } from './titulo/titulo.component';
import { EjemploPipesComponent } from './ejemplo-pipes/ejemplo-pipes.component';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { EuroPipe } from './euro.pipe';
import { HighlightDirective } from './highlight.directive';
import { LoginComponent } from './login/login.component';

registerLocaleData(localeEs, 'es');
@NgModule({
  declarations: [
    AppComponent,
    AddressFormComponent,
    DashboardComponent,
    NavigationComponent,
    TableComponent,
    TreeComponent,
    DragDropComponent,
    TituloComponent,
    EjemploPipesComponent,
    EuroPipe,
    HighlightDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
