import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
export interface DragDropListItem {
  id: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-publishing-pages-edit',
  templateUrl: './publishing-pages-edit.component.html',
  styleUrls: ['./publishing-pages-edit.component.scss']
})
export class PublishingPagesEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  unassignedTasks: DragDropListItem[] = [
    {
      id: '1',
      title: 'How to make food at home? 1',
      description: 'This is description of tasks 1'
    },
    {
      id: '2',
      title: 'How to make food at home? 2',
      description: 'This is description of tasks 2'
    },
    {
      id: '3',
      title: 'How to make food at home? 3',
      description: 'This is description of tasks 3'
    }
  ];

  assignedTasks = [
    {
      id: '4',
      title: 'Task 4',
      description: 'This is description of tasks 4'
    },
    {
      id: '5',
      title: 'Task 5',
      description: 'This is description of tasks 5'
    },
    {
      id: '6',
      title: 'Task 6',
      description: 'This is description of tasks 6'
    }
  ];

  drop(event: CdkDragDrop<DragDropListItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  isExpanded = true
  activeIndex = 0
  expanded(index) {
    console.log(index);
    this.isExpanded = !this.isExpanded
    this.activeIndex = index
    console.log(this.isExpanded);

  }
  isEdit = false
  edit() {
    console.log("oh");
    this.isEdit = !this.isEdit

  }
}
