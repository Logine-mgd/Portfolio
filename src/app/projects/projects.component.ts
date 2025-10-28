import { ChangeDetectionStrategy,Component,inject } from '@angular/core';
import {MatDialog, MatDialogActions,
  MatDialogClose,MatDialogContent, MatDialogModule,
  MatDialogRef, MatDialogTitle,MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { Proj1popupComponent } from '../proj1popup/proj1popup.component';
import { Proj2popupComponent } from '../proj2popup/proj2popup.component';
import { Proj3popupComponent } from '../proj3popup/proj3popup.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule,MatButtonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})

export class ProjectsComponent {
  readonly dialog = inject(MatDialog);
  openDialog1() {
    var dialogRef = this.dialog.open(Proj1popupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });};

  openDialog2() {
    var dialogRef = this.dialog.open(Proj2popupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });};

    openDialog3() {
    var dialogRef = this.dialog.open(Proj3popupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });};
}