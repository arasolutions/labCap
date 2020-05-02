import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { HttpDataService } from '../../providers/http-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.page.html',
  styleUrls: ['./api-test.page.scss'],
})
export class ApiTestPage {

  data: any;
  httpSus$: Subscription;
  loading:HTMLIonLoadingElement;

  constructor(private httpData: HttpDataService, private loadingController: LoadingController) { }

  ngOnInit() {
    console.log('OnInit');
  }

  async createLoading(){
    this.loading = await this.loadingController.create({
      message: 'Patientez...'
    });
    await this.loading.present();
  }

  /**
   * Appel d'un observable (attente d'un flux)
   * Ne pas oulbier de le unsuscribe en quittant la page
   */
  getExampleData() {
    this.createLoading();
    this.httpSus$ = this.httpData.getDataExample().subscribe(
      res => {
        this.data = JSON.stringify(res);
      },
      err => console.error('HTTP Error', err),
      async () => {
        console.log('HTTP request completed.');
        await this.loading.dismiss();
    }
    );
  }

  /**
   * Appel d'un observable qui ne renvoit qu'une donnée => on peut le convertir en Promise et utiliser await
   */
  async getExampleDataToProm() {
    this.createLoading();
    try {
      this.data = JSON.stringify(await this.httpData.getDataExample().toPromise());
    }
    catch (err) {
      console.error('HTTP Error', err)
    }
    finally{
      console.log('HTTP request completed.');
      await this.loading.dismiss();
    }
  }

  /**
   * Utilisation d'un bouchon, aucune gestion d'erreur
   */
  getBouchonData(){
    this.createLoading();
    setTimeout(async() => {
      this.data = JSON.stringify(await this.httpData.getBouchonData().toPromise());
      await this.loading.dismiss();
    }, 1000);
    
  }

  /**
   * Détruire les suscribes en cours avant de quitter
   */
  ngOnDestroy() {
    if (this.httpSus$){
      console.log('unsubscribe : OK');
      this.httpSus$.unsubscribe();
    } 
  }

}
