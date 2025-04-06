import { Component, VERSION as ngVersion } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  get title(): string {
    return `routing-scss-material using Angular ${ngVersion.full}`;
  }
}
