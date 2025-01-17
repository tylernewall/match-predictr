import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  imports: [NavbarComponent, CommonModule],
})
export class TeamsComponent {
  teamCode: string = '';
  teams: { id: number; name: string }[] = [
    { id: 1, name: 'Team Alpha' },
    { id: 2, name: 'Team Beta' },
  ];

  joinTeam() {
    if (this.teamCode.trim()) {
      // Simulate adding a team (In real apps, this will be an API call)
      const newTeam = { id: Date.now(), name: `Team ${this.teamCode}` };
      this.teams.push(newTeam);
      this.teamCode = ''; // Clear the input field
    }
  }

  leaveTeam(teamId: number) {
    // Simulate removing a team (In real apps, this will be an API call)
    this.teams = this.teams.filter((team) => team.id !== teamId);
  }
}
