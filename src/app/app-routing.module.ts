import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatchingGameComponent } from './inapps/catching/catching-game/catching-game.component';
import { CatchingComponent } from './inapps/catching/catching.component';
import { RouletteComponent } from './inapps/roulette/roulette.component';
import { SpinGameComponent } from './inapps/spin/spin-game/spin-game.component';
import { SpinComponent } from './inapps/spin/spin.component';
import { CountdownViewComponent } from './inapps/countdown/countdown.component';

//Extra
import { RouletteComponent2 } from './inapps/roulette2/roulette2.component';
import { RouletteComponent1 } from './inapps/roulette1/roulette1.component';
import { SoccerComponent } from './inapps/soccer/soccer.component';

const routes: Routes = [
  { path: 'countdown', component: CountdownViewComponent },
  { path: 'roulette', component: RouletteComponent },
  { path: 'roulette1', component: RouletteComponent1 },
  { path: 'roulette2', component: RouletteComponent2 },
  { path: 'catching', component: CatchingComponent },
  { path: 'catching/game', component: CatchingGameComponent },
  { path: 'spin', component: SpinComponent },
  { path: 'spin/game', component: SpinGameComponent },
  { path: 'soccer', component: SoccerComponent },

  // no layout views
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
