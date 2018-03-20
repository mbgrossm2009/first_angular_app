import { Component } from "@angular/core";

@Component({
    selector: 'app-root', //selects html tag
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    emoji: string[] = this.emoji = ['🎉', '😍', '😜', '👍'];
 }
