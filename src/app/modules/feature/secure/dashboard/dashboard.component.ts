import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutheticationService } from 'src/app/modules/shared/services/authentication/authetication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private autheticationService: AutheticationService, private router: Router) { }
  photos: any;
  isLoading: boolean = true;
  ngOnInit(): void {
    this.connectToGPhotos();
  }
  connectToGPhotos() {
    this.autheticationService.connectToPhotos().subscribe(data => {
      console.log(data);
      this.photos = data;
      this.isLoading = false;
      
    }, error => {
      console.log(error);
      this.router.navigate(['login']);
    })
  }

}
