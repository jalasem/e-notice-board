import {Component,Input} from 'angular2/core'

@Component({
  selector: 'like',
  template: `
    <i class="fa fa-heart left waves-effect waves-red"
      [ngClass]="{
          'pink-text' : iLike
        }" 
        (click)="onClick()">
    </i>
    <span>{{ totalLikes }}</span>
  `,
  styles: [`
        .fa-heart {
            color: #ccc;
            cursor: pointer;
        }
    `]
})

export class LikeComponent {
    @Input() totalLikes = 0
    @Input() iLike = false

    onClick(){
        this.iLike = !this.iLike
        this.totalLikes += this.iLike ? 1 : -1
    }
}