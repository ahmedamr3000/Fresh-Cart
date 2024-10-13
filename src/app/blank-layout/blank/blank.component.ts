import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BlankNavComponent } from 'src/app/Components/blank-nav/blank-nav.component';
import { FooterComponent } from 'src/app/Components/footer/footer.component';

@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BlankNavComponent, FooterComponent],
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss'],
})
export class BlankComponent {}
