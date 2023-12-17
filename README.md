# Quiz Application

This repository houses a web-based quiz application developed using Angular. The application encompasses functionalities for question generation, a user interface for answering questions, a scoring system, and an algorithm for managing the quiz flow.

## Requirements

1. **Question Generation:**
    - Create a pool of 50 questions across various subjects like Science, History, and Math.
    - Each question includes a unique ID, the question statement, multiple-choice options (4 options), and the correct answer.
  
2. **Quiz Interface:**
    - Web-based interface built using HTML, CSS, and JavaScript.
    - Displays random questions with multiple-choice options from the question pool.
    - Allows users to select an option and submit their answer.
  
3. **Scoring System:**
    - Calculates the user's score based on correct answers.
    - Displays the user's score upon completing the quiz.
  
4. **Logic and Algorithm:**
    - JavaScript algorithm for random question selection without repetition until all questions are answered.

## Class Diagram

| Question          |       | Option              |       | User             |
|-------------------|-------|---------------------|-------|------------------|
| id: number        | 1   * | id: number          | *   1 | id: number       |
| question: string  |-------| question_id: number |-------| username: string |
| options: string[] |       | statement: string   |       |                  |
| answer: number    |       |                     |       |                  |


## Database Schema

### Table: Question
| Column           | Data Type     | Description                                         |
|------------------|---------------|-----------------------------------------------------|
| id               | INTEGER       | Unique identifier for each question                 |
| question         | TEXT          | The statement of the question                       |
| options          | TEXT array    | Array storing multiple choices                      |
| answer           | INTEGER       | Index of the correct choice in the options array    |

### Table: Option
| Column           | Data Type     | Description                                         |
|------------------|---------------|-----------------------------------------------------|
| id               | INTEGER       | Unique identifier for each option                   |
| question_id      | INTEGER       | Foreign key referencing the associated question     |
| statement        | TEXT          | The statement of the option                         |

### Table: User
| Column           | Data Type     | Description                                         |
|------------------|---------------|-----------------------------------------------------|
| id               | INTEGER       | Unique identifier for each user                     |
| username         | TEXT          | User's username                                     |

- **Question Table**
  - Primary Key (PK): `id: number`

- **Option Table**
  - Primary Key (PK): `id: number`
  - Foreign Key (FK): `question_id: number` (Referencing the associated question)

- **User Table**
  - Primary Key (PK): `id: number`

### Relationships

- **Question - Option:** One-to-Many relationship. Each question can have multiple options.
- **User - UserProgress:** One-to-Many relationship. Each user can have multiple progress entries (one for each question attempted).
- **Question - UserProgress:** Many-to-Many relationship. Many users can have progress on many questions.

**!! In this scenario, the score itself doesn't have a relationship with other entities in the same sense as the user progress or questions. The score is an aggregation derived from the user's progress and correct answers. However, if the score were to be stored in a separate table or entity, it could potentially have a relationship with the user or user progress, but typically, it's computed based on user progress and not stored independently. !!**

### Workflow of the program

The questions are linked to multiple options, allowing users to select their answers. Each user's progress involves attempts at answering questions. This relationship captures the specific user choices and correctness for each question attempted. This comprehensive data flow ensures a robust record of user interaction with each question throughout the quiz.


