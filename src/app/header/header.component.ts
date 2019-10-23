import {Component} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {AutheService} from '../auth/authe.service';
@Component ({
  selector : 'app-header',
  templateUrl : './header.component.html'

})
export class HeaderComponent {
  constructor(
    private dataStorageServices:DataStorageService,
    private authService:AutheService
  ){}
  onSaveDate(){
    this.dataStorageServices.storeRecipes().subscribe(

    );
  }
  onFetchData(){
    this.dataStorageServices.getRecipes();
  }
  onLogout(){
    this.authService.logout();
  }
}
