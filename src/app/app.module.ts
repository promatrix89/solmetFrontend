import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperariosComponent } from './components/operarios/operarios.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { PartesComponent } from './components/partes/partes.component';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule} from '@angular/common/http';
import { ClientesFormComponent } from './components/clientes/clientes-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PartesFormComponent } from './components/partes/partes-form.component';
import { OperariosFormComponent } from './components/operarios/operarios-form.component';
import { PlanillasComponent } from './components/planillasFormacionCosto/planillas/planillas.component';
import { DetallePlanillaComponent } from './components/planillasFormacionCosto/detalle-planilla.component';
import { PlanillaFormComponent } from './components/planillasFormacionCosto/planilla-form/planilla-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DetalleClienteComponent } from './components/clientes/detalle-cliente/detalle-cliente.component';
import { PresupuestosComponent } from './components/presupuestos/presupuestos.component';
import { PresupuestosFormComponent } from './components/presupuestos/presupuestos-form/presupuestos-form.component';
import { IvaComponent } from './components/otros/iva/iva.component';
import { IvaFormComponent } from './components/otros/iva/iva-form.component';
import { FormaPagoFormComponent } from './components/otros/forma-pago/forma-pago-form.component';
import { FormaPagoComponent } from './components/otros/forma-pago/forma-pago.component';
import { OrdenTrabajoComponent } from './components/orden-trabajo/orden-trabajo.component';
import { OrdenTrabajoDetalleComponent } from './components/orden-trabajo/orden-trabajo-detalle.component';
import { OrdenTrabajoDiasComponent } from './components/orden-trabajo/orden-trabajo-dias/orden-trabajo-dias.component';

@NgModule({
  declarations: [
    AppComponent,
    OperariosComponent,
    ClientesComponent,
    PartesComponent,
    ClientesFormComponent,
    PartesFormComponent,
    OperariosFormComponent,
    PlanillasComponent,
    DetallePlanillaComponent,
    PlanillaFormComponent,
    DetalleClienteComponent,
    PresupuestosComponent,
    PresupuestosFormComponent,
    IvaComponent,
    IvaFormComponent,
    FormaPagoFormComponent,
    FormaPagoComponent,
    OrdenTrabajoComponent,
    OrdenTrabajoDetalleComponent,
    OrdenTrabajoDiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
