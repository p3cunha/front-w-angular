import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  { path: '', component: NavBarComponent, children: [
    { path: 'timer', component: TimerComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
