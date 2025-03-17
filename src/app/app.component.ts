import { Component } from '@angular/core';
import { DatatableComponent } from "./datatable/datatable.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [DatatableComponent]
})
export class AppComponent {
  title = 'DataTable';

  tableData = [
    { name: 'John', age: 25, city: 'New York' },
    { name: 'Jane', age: 30, city: 'San Francisco' },
    { name: 'Mike', age: 35, city: 'Chicago' },
    { name: 'Sara', age: 28, city: 'Boston' },
    { name: 'Paul', age: 32, city: 'Seattle' },
    { name: 'Anna', age: 22, city: 'Austin' },
    { name: 'Tom', age: 27, city: 'Denver' },
    { name: 'Lucy', age: 24, city: 'Miami' },
    { name: 'Mark', age: 29, city: 'Dallas' },
    { name: 'Emma', age: 31, city: 'Los Angeles' }
  ];

  tableColumns = ['name', 'age', 'city'];
}
