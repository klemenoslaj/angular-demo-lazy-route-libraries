import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './lazy-component.routing';
import { LazyComponentComponent } from './lazy-component.component';

@NgModule({
  declarations: [LazyComponentComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [LazyComponentComponent]
})
export class LazyComponentModule { }
