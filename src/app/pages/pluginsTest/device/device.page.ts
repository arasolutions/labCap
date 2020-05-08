import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
})
export class DevicePage {

  langData: any;
  deviceData: any;

  constructor() { }

  async init() {
    const { Device } = Plugins;
    this.deviceData = await Device.getInfo();
    console.log(this.deviceData);
    this.langData = await Device.getLanguageCode();
    console.log(this.langData);
  }

  ionViewDidEnter(){
    this.init();
  }
}
