import { Component, EventEmitter, Input, Output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { CardComponent } from "../shared/card/card.component";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: {
    id: string;
    name: string;
    avatar: string;
  }
  @Input ({required: true}) selected!: boolean;
  @Output() select = new EventEmitter();
  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
