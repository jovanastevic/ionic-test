import {Component, inject} from '@angular/core';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonButton} from '@ionic/angular';
import {Router} from "@angular/router";
import {Data} from "../../services/data";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  private router = inject(Router);
  public data = inject(Data);

  constructor() {
    console.log("constructor home page")
  }

  showQuestion(){
    this.router.navigate(['/question-list']);
  }
}
