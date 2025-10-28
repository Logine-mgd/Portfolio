import { ChangeDetectionStrategy,  Component ,inject } from '@angular/core';
import { MatDialogContent, MatDialogActions, MatDialogClose, MatDialogTitle } from "@angular/material/dialog";

@Component({
  selector: 'app-proj2popup',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatDialogClose, MatDialogTitle],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './proj2popup.component.html',
  styleUrl: './proj2popup.component.css'
})

export class Proj2popupComponent {

}

