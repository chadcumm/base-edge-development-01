import { Component } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-project-version',
  templateUrl: './project-version.component.html',
  styleUrls: ['./project-version.component.scss']
})
export class ProjectVersionComponent {

  currentApplicationVersion = environment.appVersion;

}
