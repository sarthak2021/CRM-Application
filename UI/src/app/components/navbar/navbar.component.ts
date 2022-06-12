import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/auth.service';
import { MenuService } from 'src/app/services/menus.service';
import { MenuItem } from '../../menu-item';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  userLoggedIn:any = [];
  UserName: any = '';
  menuItems: any[] = [];
  
  constructor(private menus: MenuService,private router: Router,private authService: AuthService,) { }

  ngOnInit(): void {

  }



  onlogoutClick(): void {
    this.authService.logout();
    this.router.navigate(['/CRM/login']);
  }


  

}
