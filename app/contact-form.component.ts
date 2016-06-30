import {Component} from 'angular2/core'
import { NgForm }  from 'angular2/common'

@Component({
  selector: 'contact-form',
  templateUrl : '/app/contact-form.template.html'
})

export class ContactFormComponent {
  log(x) {
    console.log(x)
  }
}