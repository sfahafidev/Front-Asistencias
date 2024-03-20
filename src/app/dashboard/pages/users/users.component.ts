import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // en tsconfig.json dentro de compilerOptions y dentro de paths
import { UsersService } from '../../../services/users.service';
import { TitleComponent } from '@shared/title/title.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent, RouterModule],
  templateUrl: './users.component.html',
  styles: ``
})
export default class UsersComponent {

  public userService = inject(UsersService) //forma nueva tambien puede ser por constructor 

}
