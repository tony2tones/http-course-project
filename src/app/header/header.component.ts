import { Component } from "@angular/core";
import { DataService } from "../shared/data.service";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  constructor(private dataService: DataService, private authService : AuthService) {}

  onSaveData() {
    this.dataService
      .storeRecipes()
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }

  getData() {
    this.dataService.fetchRecipes();
  }

  logout() {
    this.authService.logout();
  }
}
