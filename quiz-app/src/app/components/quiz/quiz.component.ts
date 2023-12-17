import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: any[] = [];
  currentQuestionIndex: number = 0;
  currentQuestion: any; 
  selectedOption: number | null = null;
  userScore: number = 0;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions() {
    this.quizService.getQuestions().subscribe((data) => {
      this.questions = data;
      this.displayNextQuestion(); 
    });
  }

  displayNextQuestion() {
    if (this.currentQuestionIndex < this.questions.length) {
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.currentQuestionIndex++;
    } else {
      this.currentQuestion = null;
    }
  }

  selectAnswer(selectedIndex: number) {
    this.selectedOption = selectedIndex; 

    if (this.selectedOption === this.currentQuestion.answer) {
      this.userScore++; 
    }
  }

  getNextQuestion() {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.questions.length) {
      this.currentQuestion = this.questions[this.currentQuestionIndex];
    } else {
      this.currentQuestion = null; 
    }
  }
}
