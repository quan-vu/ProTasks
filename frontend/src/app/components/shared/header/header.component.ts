import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StorageService } from 'src/app/api/services/storage.service';
import { SignupDialogComponent } from 'src/app/components/shared/signup-dialog/signup-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu: Array<any>;
  isLoggedin: boolean = false;

  constructor(
    public dialog: MatDialog,
    private storageService: StorageService,
  ) { 
    this.menu = [
      // {
      //   name: "",
      //   key: "",
      //   route: "",
      //   target: ""
      // },
    ]
  }

  ngOnInit(): void {
    const loggedUser = this.storageService.getUser();
    if (!loggedUser) {
      this.openDialog();
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(SignupDialogComponent, {
      minWidth: '400px',
      maxWidth: '600px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
