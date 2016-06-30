import {Component,Input,Output,EventEmitter} from 'angular2/core'
import {SideMenuService} from './sideMenu.service'
import {PostsService} from './posts.service'
import {LikeComponent} from './like.component'
import {ZippyComponent} from './zippy.component'
import {ContactFormComponent} from './contact-form.component'
import {SummaryPipe} from './summary.pipe'

@Component({
    selector: "main-content",
    templateUrl : 'app/mainContent.template.html',
    styles: [`
        .card .card-content {
            padding: 15px;
            border-radius: 0 0 2px 2px;
        }
    `],
    providers: [SideMenuService,PostsService],
    directives: [LikeComponent,ZippyComponent,ContactFormComponent],
    pipes : [SummaryPipe]
})
export class MainContentComponent {
    @Input() isExpanded = false

    sideMenus: Array<Object>
    posts: Array<Object>

    constructor(sideMenuService: SideMenuService, postsService :PostsService) {
        this.sideMenus = sideMenuService.getMenu()
        this.posts = postsService.getPosts()
        // this.posts = []
        $("#menu-toggle").click(function(){
          $('#side-menu').toggleClass('collapsed');
          $('.top-fixed').slideToggle();
          $('#notice-board').toggleClass('expanded');
          $('.menu-details').slideToggle();
          $('.menus').toggleClass('active');
        })
        $(document).ready(function(){
            $('.modal-trigger').leanModal()
            console.log('you just clicked the modal button')
        })
    }

    menuToggle(){
        this.isExpanded = !this.isExpanded
    }

    test = {
        totalLikes: 10,
        iLike: false
    }
}