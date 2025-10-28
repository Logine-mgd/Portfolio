import { ChangeDetectionStrategy,Component,inject } from '@angular/core';
import {MatDialog, MatDialogActions,
  MatDialogClose,MatDialogContent, MatDialogModule,
  MatDialogRef, MatDialogTitle,MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { PopupContentComponent } from '../popup-content/popup-content.component';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(PopupContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  }
