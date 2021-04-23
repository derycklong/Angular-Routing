import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart,NavigationEnd,NavigationError,NavigationCancel } from '@angular/router'

import { AuthService } from './user/auth.service';
import { MessageService } from './messages/message.service';



@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pageTitle = 'Acme Product Management';
  loading = true
  messages:string = 'Show Messages'


  constructor(private authService: AuthService, 
              private router:Router,
              private messageService:MessageService) {
      router.events.subscribe((routerEvent:Event) => {
      this.checkRouterEvent(routerEvent)
      })

}

  ngOnInit(){
    console.log(this.messageService.isDisplayed)
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  getMessage(): Boolean{
    return this.messageService.isDisplayed
  }
  
  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError) {
      this.loading = false;
    }
  }
  logOut(): void {
    this.authService.logout();
    //this.router.navigate(['/welcome'])
    this.router.navigateByUrl('welcome')
    console.log('Log out');
  }

  onMessages(){

    if (!this.messageService.isDisplayed){
      this.messages = "Hide Messages"
      this.router.navigate([{outlets: { popup: ['messages'] }}]) 
    }
    else{
       this.messages = "Show Messages"
       this.router.navigate([{outlets: { popup: null }}])
    }
    
    this.messageService.isDisplayed = !this.messageService.isDisplayed


  }
}
