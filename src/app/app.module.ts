import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadosComponent } from './caracteristicas-empleados/caracteristicas-empleados.component';
import { ServicioEmpleadosService } from './services/servicio-empleados.service';
import { EmpleadosService } from './services/empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QsComponentComponent } from './qs-component/qs-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { ErrorPersonalizadoComponentComponent } from './error-personalizado-component/error-personalizado-component.component';
import { DataServices } from './services/data.services';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponentComponent } from './login-component/login-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { LoginService } from './services/login.service';
import { CookieService } from 'ngx-cookie-service';

const appRoutes:Routes=[
  {path:'', component:HomeComponentComponent},
  {path:'proyectos', component:ProyectosComponentComponent},
  {path:'QS', component:QsComponentComponent},
  {path:'contacto',component:ContactoComponentComponent},
  {path:'actualiza/:id', component:ActualizaComponentComponent},
  {path:'login', component:LoginComponentComponent},
  {path:'**', component:ErrorPersonalizadoComponentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadosComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QsComponentComponent,
    ContactoComponentComponent,
    ActualizaComponentComponent,
    ErrorPersonalizadoComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule.forRoot(appRoutes), 
    HttpClientModule,
    BrowserAnimationsModule, 
    MatIconModule
  ],
  providers: [ServicioEmpleadosService, EmpleadosService, DataServices, LoginService, CookieService],//se colocan los servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
