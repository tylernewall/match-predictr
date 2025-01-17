import { Routes } from '@angular/router';

import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserScoresComponent } from './pages/user-scores/user-scores.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { TeamDetailsComponent } from './pages/team-details/team-details.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
     { path: '', component: LoginComponent },
     { path: 'register', component: RegisterComponent },
     { path: 'login', component: LoginComponent },
     { path: 'dashboard', component: DashboardComponent },
     { path: 'your-scores', component: UserScoresComponent },
     { path: 'leaderboard', component: LeaderboardComponent },
     { path: 'teams', component: TeamsComponent },
     { path: 'teams/:id', component: TeamDetailsComponent },
     { path: '**', component: PageNotFoundComponent },
];
