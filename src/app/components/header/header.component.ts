import { Component, HostBinding, HostListener } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  name = 'Angular';

  constructor( private router: Router , private route: ActivatedRoute){}




  about(){
    this.router.navigate(['/about'],{relativeTo:this.route})
  }
  loginAdmin(){
    this.router.navigate(['/login'],{relativeTo:this.route})
  }

  members(){
    this.router.navigate(['/members'],{relativeTo:this.route});
  }
  terms(){
    this.router.navigate(['/terms-condition'],{relativeTo:this.route});
  }


  
}
