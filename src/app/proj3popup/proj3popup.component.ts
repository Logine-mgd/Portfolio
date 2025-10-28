import { ChangeDetectionStrategy, Component ,inject} from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-proj3popup',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatDialogClose, MatDialogTitle],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './proj3popup.component.html',
  styleUrl: './proj3popup.component.css'
})
export class Proj3popupComponent {

}
