import {Component} from 'angular2/core'
import {NavbarComponent} from './navbar.component'
import {MainContentComponent} from './mainContent.component'
import {footerComponent} from './footer.component'

@Component({
    selector: 'noycc-app',
    template: `
        <navbar [isToggled]="isSideBarExpanded" (toggled)="toggleSideBar()"></navbar>
        <main-content [isExpanded]="isSideBarExpanded"></main-content>
        <footer></footer>
            `,
    directives: [NavbarComponent,MainContentComponent,footerComponent]
})
export class NoyccComponent {
    isSideBarExpanded = false
    toggleSideBar(){
        this.isSideBarExpanded = !this.isSideBarExpanded
    }
 }