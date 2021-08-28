import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/api/services/auth.service';
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
  loggedUser: any = null;

  constructor(
    public dialog: MatDialog,
    private storageService: StorageService,
    private authService: AuthService,
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
    this.loggedUser = this.storageService.getUser();
    if (!this.loggedUser) {
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

  logout() {
    // do logout
    this.storageService.clearAuthentication();
    window.location.reload();
  }


}
