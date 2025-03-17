import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
  imports: [CommonModule]
})
export class DatatableComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() columns: string[] = [];
  @Input() pageSize: number = 10;

  currentPage: number = 1;
  totalPages: number = 1;
  paginatedData: any[] = [];

  ngOnInit() {
    this.totalPages = Math.ceil(this.data.length / this.pageSize);
    this.updatePaginatedData();
  }

  updatePaginatedData() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedData = this.data.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedData();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedData();
    }
  }
}
