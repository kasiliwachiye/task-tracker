import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TASKS } from 'src/app/mock-tasks';
// Interface
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = TASKS;

  constructor(private taskService: TaskService) {}

  getTaks(): Task[] {
    return TASKS;
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks); 
  }

}
