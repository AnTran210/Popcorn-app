import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isLoggedIn = false;
  userName = 'John Doe';

  searchForm = new FormGroup({
    searchQuery: new FormControl(''),
  })

  login() {
    // your login logic
    this.isLoggedIn = true;
  }

  logout() {
    // your logout logic
    this.isLoggedIn = false;
  }

  handleSearch() {
    alert(this.searchForm.value.searchQuery);
  }
}
