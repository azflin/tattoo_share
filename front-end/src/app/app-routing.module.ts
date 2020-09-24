import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TattoosComponent } from "./tattoos/tattoos.component";
import { TattooDetailComponent} from "./tattoo-detail/tattoo-detail.component";

const routes: Routes = [
  { path: 'tattoos', component: TattoosComponent },
  { path: 'tattoos/:id', component: TattooDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
