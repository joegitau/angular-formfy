import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { IUsers } from "src/app/users";
import { DataService } from "src/app/data.service";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"]
})
export class UserDetailsComponent implements OnInit {
  user: IUsers;

  constructor(
    private userService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = +params.get("id");
      this.userService.getUser(id).subscribe(
        (user: IUsers) => (this.user = user),
        (error: any) => console.log("something went rogue", error)
      );
    });
  }
}
