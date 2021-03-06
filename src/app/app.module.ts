import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ErrorComponent } from './components/error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { ProfesionalComponent } from './components/profesional/profesional.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HorarioConfiguracionComponent } from './components/horario-configuracion/horario-configuracion.component';
import { PedirTurnoComponent } from './components/pedir-turno/pedir-turno.component';
import { TurnosPacienteDetallesComponent } from './components/turnos-paciente-detalles/turnos-paciente-detalles.component';
import { TurnosPasadosDetalleComponent } from './components/turnos-pasados-detalle/turnos-pasados-detalle.component';
import { TurnosProfesionalDetallesComponent } from './components/turnos-profesional-detalles/turnos-profesional-detalles.component';
import { EstadoTurnoPipe } from './pipes/estado-turno.pipe';
import { DpDatePickerModule } from 'ng2-date-picker';
import { HorasComponent } from './components/horas/horas.component';
import { FechasComponent } from './components/fechas/fechas.component';
import { FiltroProfesionalesComponent } from './components/filtro-profesionales/filtro-profesionales.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PedirTurnoModalComponent } from './components/pedir-turno-modal/pedir-turno-modal.component';
import { ReseniaPacienteModalComponent } from './components/resenia-paciente-modal/resenia-paciente-modal.component';
import { ReseniaProfesionalModalComponent } from './components/resenia-profesional-modal/resenia-profesional-modal.component';
import { BusquedaTurnoComponent } from './components/busqueda-turno/busqueda-turno.component';
import { AltaAdministradorComponent } from './components/alta-administrador/alta-administrador.component';
import { SolicitudesAprobacionProfesionalComponent } from './components/solicitudes-aprobacion-profesional/solicitudes-aprobacion-profesional.component';
import { TurnosAdministradorDetallesComponent } from './components/turnos-administrador-detalles/turnos-administrador-detalles.component';
import { GraficosComponent } from './components/graficos/graficos.component';
import { ChartsModule } from 'ng2-charts';
import { GraficoLoginComponent } from './components/grafico-login/grafico-login.component';
import { GraficoOperacionesEspecialidadComponent } from './components/grafico-operaciones-especialidad/grafico-operaciones-especialidad.component';
import { GraficoTurnosDiasDeLaSemanaComponent } from './components/grafico-turnos-dias-de-la-semana/grafico-turnos-dias-de-la-semana.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    ErrorComponent,
    AdminComponent,
    PacienteComponent,
    ProfesionalComponent,
    InicioComponent,
    NavbarComponent,
    HorarioConfiguracionComponent,
    PedirTurnoComponent,
    TurnosPacienteDetallesComponent,
    TurnosPasadosDetalleComponent,
    TurnosProfesionalDetallesComponent,
    EstadoTurnoPipe,
    HorasComponent,
    FechasComponent,
    FiltroProfesionalesComponent,
    PedirTurnoModalComponent,
    ReseniaPacienteModalComponent,
    ReseniaProfesionalModalComponent,
    BusquedaTurnoComponent,
    AltaAdministradorComponent,
    SolicitudesAprobacionProfesionalComponent,
    TurnosAdministradorDetallesComponent,
    GraficosComponent,
    GraficoLoginComponent,
    GraficoOperacionesEspecialidadComponent,
    GraficoTurnosDiasDeLaSemanaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    RecaptchaModule,
    DpDatePickerModule,
    NgbModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
