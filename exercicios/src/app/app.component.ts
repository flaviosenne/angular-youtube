import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username = 'joao flavio'
  user = {
    email: 'joao@email.com',
    role: 'admin'
  }
  title = 'curso-angular-youtube';
}
