import {Component, Input, EventEmitter, Output} from 'angular2/core'

@Component({
    selector: "navbar",
    templateUrl: 'app/navbar.template.html'
})
export class NavbarComponent {
    @Input() isToggled = false;

    @Output() toggled = new EventEmitter();

    menuToggle(){
        this.isToggled = !this.isToggled
        this.toggled.emit({newValue: this.isToggled})
    }

}
