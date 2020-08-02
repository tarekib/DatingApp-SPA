import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  users: User[];
  likesParam: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  loadLikers() {
    this.userService.getLikers().subscribe((data: User[]) => { this.users = data; },
    );
    this.likesParam = 'Likees';
  }

  loadLikees() {
    this.userService.getLikees().subscribe((data: User[]) => { this.users = data; },
    );
    this.likesParam = 'Likers';
  }
}
