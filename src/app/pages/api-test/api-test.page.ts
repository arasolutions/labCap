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

  getBouchonData(){
    this.createLoading();
    setTimeout(async() => {
      this.data = JSON.stringify(await this.httpData.getBouchonData().toPromise());
      await this.loading.dismiss();
    }, 1000);
    
  }

  ngOnDestroy() {
    console.log('OnDestroy');
    this.httpSus$.unsubscribe();
  }

}
