import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
declare var $: any;
import { take } from 'rxjs/operators';

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

  constructor(private _ngZone: NgZone) { }

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  ngOnInit(): void {

  }

  unassignedTasks: DragDropListItem[] = [
    {
      id: '1',
      title: 'How to make food at home? 1',
      description: 'This is description of tasks Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur consequatLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur consequatLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur consequatLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur consequatLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur consequatLorem.t.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur consequatLorem ipsum dolor sit amet, consectetur.. 1 This is description of tasks Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur consequatLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur consequatLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur consequatLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur consequatLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur consequatLorem.t.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur consequatLorem ipsum dolor sit amet, consectetur.. 1'
    },
    {
      id: '2',
      title: 'How to make food at home? 2',
      description: 'This is description of tasks Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur consequatLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur consequatLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur consequatLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur consequatLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur consequatLorem.t.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur consequatLorem ipsum dolor sit amet, consectetur.. 2'
    },
    {
      id: '3',
      title: 'How to make food at home? 3',
      description: 'This is description of tasks Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur consequatLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur consequatLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur consequatLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur consequatLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur consequatLorem.t.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet leo sit amet magna efficitur consequatLorem ipsum dolor sit amet, consectetur.. 3'
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

  // drop(event: CdkDragDrop<DragDropListItem[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex);
  //   }
  // }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.unassignedTasks, event.previousIndex, event.currentIndex);
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
  edit(param) {
    console.log(param);



    console.log("oh");
    this.isEdit = !this.isEdit
  }
}
