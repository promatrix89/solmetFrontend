import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesFormComponent } from './components/clientes/clientes-form.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { DetalleClienteComponent } from './components/clientes/detalle-cliente/detalle-cliente.component';
import { OperariosFormComponent } from './components/operarios/operarios-form.component';
import { OperariosComponent } from './components/operarios/operarios.component';
import { OrdenTrabajoDetalleComponent } from './components/orden-trabajo/orden-trabajo-detalle.component';
import { OrdenTrabajoComponent } from './components/orden-trabajo/orden-trabajo.component';
import { FormaPagoFormComponent } from './components/otros/forma-pago/forma-pago-form.component';
import { FormaPagoComponent } from './components/otros/forma-pago/forma-pago.component';
import { IvaFormComponent } from './components/otros/iva/iva-form.component';
import { IvaComponent } from './components/otros/iva/iva.component';
import { PartesFormComponent } from './components/partes/partes-form.component';
import { PartesComponent } from './components/partes/partes.component';
import { PlanillaFormComponent } from './components/planillasFormacionCosto/planilla-form/planilla-form.component';
import { PlanillasComponent } from './components/planillasFormacionCosto/planillas/planillas.component';
import { PresupuestosFormComponent } from './components/presupuestos/presupuestos-form/presupuestos-form.component';
import { PresupuestosComponent } from './components/presupuestos/presupuestos.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo: 'clientes'},
  {path:'clientes', component: ClientesComponent},
  {path:'clientes/form', component: ClientesFormComponent},
  {path:'operarios', component: OperariosComponent},
  {path:'operarios/form', component: OperariosFormComponent},
  {path:'operarios/form/:id', component: OperariosFormComponent},
  {path:'partes', component: PartesComponent},
  {path:'partes/form', component: PartesFormComponent},
  {path:'partes/form/:id', component: PartesFormComponent},
  {path:'clientes/form/:id', component: ClientesFormComponent},
  {path:'planillas/form', component: PlanillaFormComponent},
  {path:'planillas/form/:planillaId', component: PlanillaFormComponent},
  {path:'planillas', component: PlanillasComponent},
  {path:'clientes/ver/:clienteId', component: DetalleClienteComponent},
  {path:'presupuestos', component: PresupuestosComponent},
  {path:'presupuestos/form/:clienteId', component: PresupuestosFormComponent},
  {path:'iva', component: IvaComponent},
  {path:'iva/form', component: IvaFormComponent},
  {path:'iva/form/:id', component: IvaFormComponent},
  {path:'formaPago', component: FormaPagoComponent},
  {path:'formaPago/formaPago/formapago/form/:id', component: FormaPagoFormComponent},
  {path:'formaPago/formapago/form', component: FormaPagoFormComponent},
  {path:'ordenTrabajoList', component: OrdenTrabajoComponent},
  {path:'ordenTrabajo/detalle/:id', component: OrdenTrabajoDetalleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
