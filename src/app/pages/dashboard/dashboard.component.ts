import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";

interface Question {
  id: number;
  homeTeam: string;
  awayTeam: string;
  description: string;
  answered: boolean;
  options: Option[];
  selectedAnswerId?: number;
}

interface Option {
  id: number;
  title: string;
  selected: boolean;
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  questions: Question[] = [];
  modalVisible: boolean = false;
  selectedQuestion: Question | undefined;
  numOfAnswersSubmitted: number = 0;
  optionsToDisplay: Option[] = [];
  selectedAnswerId: number = 0;

ngOnInit(): void {
    this.questions.push(
      {
        id: 1, homeTeam: 'Sheffield United', awayTeam: 'Sheffield Wednesday', description: 'Who will win?', answered: false,
        options: [
          { id: 1, title: 'Sheffield United win', selected: false },
          { id: 2, title: 'Sheffield Wednesday win', selected: false },
          { id: 3, title: 'Draw', selected: false }
        ]
      },
      { id: 2, homeTeam: 'Cardiff', awayTeam: 'Swansea', description: 'Will there be a goal in 90 minutes?', answered: false,
        options: [
          { id: 4, title: 'Yes', selected: false },
          { id: 5, title: 'No', selected: false },
        ]
       },
      { id: 3, homeTeam: 'Chelsea', awayTeam: 'Manchester United', description: 'Will there be a booking in 90 minutes?', answered: false,
        options: [
          { id: 6, title: 'Yes', selected: false },
          { id: 7, title: 'No', selected: false },
        ]
       },
      { id: 4, homeTeam: 'Sheffield United', awayTeam: 'Sheffield Wednesday', description: 'Who will win?', answered: false, options: [
          { id: 8, title: 'Yes', selected: false },
          { id: 9, title: 'No', selected: false },
      ]},
      { id: 5, homeTeam: 'Cardiff', awayTeam: 'Swansea', description: 'Will there be a goal in 90 minutes?', answered: false, options: [          
          { id: 10, title: 'Yes', selected: false },
          { id: 11, title: 'No', selected: false },] },
      { id: 6, homeTeam: 'Chelsea', awayTeam: 'Manchester United', description: 'Will there be a booking in 90 minutes?', answered: false, options: [
          { id: 12, title: 'Yes', selected: false },
          { id: 13, title: 'No', selected: false },
      ]},
      { id: 7, homeTeam: 'Sheffield United', awayTeam: 'Sheffield Wednesday', description: 'Who will win?', answered: false, options: [
          { id: 14, title: 'Yes', selected: false },
          { id: 15, title: 'No', selected: false },
      ] },
      { id: 8, homeTeam: 'Cardiff', awayTeam: 'Swansea', description: 'Will there be a goal in 90 minutes?', answered: false, options: [
          { id: 16, title: 'Yes', selected: false },
          { id: 17, title: 'No', selected: false },
      ] },
      { id: 9, homeTeam: 'Chelsea', awayTeam: 'Manchester United', description: 'Will there be a booking in 90 minutes?', answered: false, options: [
          { id: 18, title: 'Yes', selected: false },
          { id: 19, title: 'No', selected: false },
      ] }
    );
  };

  openModal(id: number) {
    this.modalVisible = true;
    this.selectedQuestion = this.questions.find(question => question.id === id);
    this.optionsToDisplay = this.selectedQuestion?.options || [];
  }

  closeModal() {
    this.selectedQuestion = undefined;
    this.modalVisible = false;
    this.selectedAnswerId = 0;
  }

  selectAnswer(selectedAnswerId: number) {

    // If user selects/deselcts
    if (selectedAnswerId === this.selectedAnswerId) {
      selectedAnswerId = 0;
    }

    this.selectedAnswerId = selectedAnswerId;
    if (this.selectedQuestion) {
      this.selectedQuestion.selectedAnswerId = selectedAnswerId;
    }
  }

  submitAnswerForQuestion() {
    if (this.selectedQuestion && this.selectedAnswerId > 0) {
      this.selectedQuestion.answered = true;
      this.selectedQuestion.selectedAnswerId = this.selectedAnswerId;
      this.numOfAnswersSubmitted++;
    }
    this.modalVisible = false;
    this.selectedAnswerId = 0;
  }

  getPredictedOptionTitle(question: Question): string {
    const predictedOption = question.options.find(option => option.id === question.selectedAnswerId);
    return predictedOption ? predictedOption.title : 'No prediction';
  }
}
