import {ChangeDetectionStrategy,  Component,inject } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-popup-content',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './popup-content.component.html',
  styleUrl: './popup-content.component.css'
})
export class PopupContentComponent {
  
}
