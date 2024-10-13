import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatService } from 'src/app/serves/cat.service';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent {
  constructor(private _CatService: CatService) {}
  Brands: any[] = [];
  brandId: string = '';
  SpecificBrand: any = {};
  ngOnInit(): void {
    this._CatService.getBrands().subscribe({
      next: (res) => {
        this.Brands = res.data;
      },
    });
  }

  click(event: any): void {
    this.brandId = event.target.dataset.id;
    this._CatService.getBrandDetails(this.brandId).subscribe({
      next: (res) => {
        this.SpecificBrand = res.data;
      },
    });
  }
}
