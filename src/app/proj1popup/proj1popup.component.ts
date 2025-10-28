import { ChangeDetectionStrategy,  Component,inject  } from '@angular/core';
import {  MatDialogModule, MatDialogContent, MatDialogActions ,MatDialogClose} from "@angular/material/dialog";

@Component({
  selector: 'app-proj1popup',
  standalone: true,
  imports: [MatDialogModule,MatDialogContent, MatDialogActions, MatDialogClose],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './proj1popup.component.html',
  styleUrl: './proj1popup.component.css'
})
export class Proj1popupComponent {

}
