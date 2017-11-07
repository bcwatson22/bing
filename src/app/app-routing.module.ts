import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PaintingsComponent } from './paintings/paintings.component';
import { DrawingsComponent } from './drawings/drawings.component';
import { CommissionComponent } from './commission/commission.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent,
      children: [
        {
          path: ':id',
          component: HomeComponent
        }
      ]
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'paintings',
      component: PaintingsComponent,
      children: [
        {
          path: ':id',
          component: PaintingsComponent
        }
      ]
    },
    {
      path: 'drawings',
      component: DrawingsComponent,
      children: [
        {
          path: ':id',
          component: DrawingsComponent
        }
      ]
    },
    {
      path: 'commission',
      component: CommissionComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
