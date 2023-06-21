import { Component } from '@angular/core';
import { LoginService } from './service/login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public router:ActivatedRoute){}
}

