import { Component } from '@angular/core';
import { MovieItemComponent } from '../components/movie-item/movie-item.component';
import { Movie } from '../models/movie.model';
import moviesData from '../../../public/movies.json';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MovieItemComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  movieItemList: Movie[] = [];
  paginatedItems: Movie[] = [];

  currentPage = 1;
  itemsPerPage = 10;                 // mặc định 5x10
  totalPages = 1;

  ngOnInit() {
    // fetch movieItemList từ API hoặc service
    this.movieItemList = moviesData as Movie[];
    this.updatePagination();
    window.addEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.calculateItemsPerPage();
    this.updatePagination();
  };

  calculateItemsPerPage() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1200) {
      this.itemsPerPage = 5 * 2; // 5 cột x 10 hàng
    } else if (screenWidth >= 768) {
      this.itemsPerPage = 3 * 2;
    } else {
      this.itemsPerPage = 2 * 2;
    }
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.movieItemList.length / this.itemsPerPage);
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedItems = this.movieItemList.slice(start, end);
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.handleResize);
  }
}
