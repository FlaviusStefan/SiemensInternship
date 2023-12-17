import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  
  questions: any[] = [];
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
      this.getNextQuestion(); 
    });
  }

  getNextQuestion() {
    
    this.currentQuestion = this.questions[0]; 
  }

  selectAnswer(selectedIndex: number) {
    this.selectedOption = selectedIndex; 

    
    if (this.selectedOption === this.currentQuestion.answer) {
      
      this.userScore++; 
    }

    
    setTimeout(() => {
      this.getNextQuestion();
      this.selectedOption = null; 
    }, 1000);
  }
}
