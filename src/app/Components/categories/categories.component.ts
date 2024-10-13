import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatService } from 'src/app/serves/cat.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  constructor(private _CatService: CatService) {}
  catData: any[] = [];

  ngOnInit(): void {
    this._CatService.getCategories().subscribe({
      next: (response) => {
        this.catData = response.data;
        console.log(this.catData);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
