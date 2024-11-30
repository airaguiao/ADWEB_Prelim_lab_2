import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonalInfoComponent } from './personalInfo/personalInfo.component';
import { ObjectiveComponent } from './objective/objective.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from "./education/education.component";
import { TrainingComponent } from './training/training.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonalInfoComponent, ObjectiveComponent, SkillsComponent, EducationComponent, TrainingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CV_Resume';
}
