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
  totalScore: number | null = null;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions() {
    this.quizService.getQuestions().subscribe((data) => {
      this.questions = this.shuffle(data); 
      this.displayNextQuestion(); 
    });
  }

  shuffle(array: any[]) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
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

    this.displayNextQuestion(); 
    this.selectedOption = null; 
  }

}
