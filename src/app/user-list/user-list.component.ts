import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { IUsers } from "../users";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  users: IUsers[];

  constructor(private userService: DataService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (results: IUsers[]) => (this.users = results),
      (error: any) => console.log("something went rogue", error)
    );
  }
}
