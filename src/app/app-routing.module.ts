import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatchingGameComponent } from './inapps/catching/catching-game/catching-game.component';
import { CatchingComponent } from './inapps/catching/catching.component';
import { RouletteComponent } from './inapps/roulette/roulette.component';
import { SpinGameComponent } from './inapps/spin/spin-game/spin-game.component';
import { SpinComponent } from './inapps/spin/spin.component';
import { CountdownViewComponent } from './inapps/countdown/countdown.component';

const routes: Routes = [
  { path: 'countdown', component: CountdownViewComponent },
  { path: 'roulette', component: RouletteComponent },
  { path: 'catching', component: CatchingComponent },
  { path: 'catching/game', component: CatchingGameComponent },
  { path: 'spin', component: SpinComponent },
  { path: 'spin/game', component: SpinGameComponent },

  // no layout views
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
