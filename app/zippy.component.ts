import {Component, Input} from 'angular2/core'

@Component({
  selector: 'zippy',
  template:  `
    <div class="zippy">
      <div
        class="zippy-title"
        (click)="toggle()">
        {{title}}
        <i
          class="right fa"
          [ngClass]="
            {
              'fa-chevron-up': !isZipExpanded,
              'fa-chevron-down': isZipExpanded
            }">
        </i>
      </div>
      <div *ngIf="isZipExpanded" class="zippy-content">
        <ng-content></ng-content>
      </div>
    </div>
  `
})

export class ZippyComponent {
  isZipExpanded = false;
  @Input() title: string

  toggle(){
    this.isZipExpanded = !this.isZipExpanded
  }
}