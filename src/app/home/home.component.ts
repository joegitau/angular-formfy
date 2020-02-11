import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Users } from "../users";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  users: object;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.fetchUsers().subscribe(
      results => (this.users = results),
      error => console.error("Something ainr right!", error)
    );
  }
}
