import { Component } from '@angular/core';
import { CurrencyapidataService } from './currencyapidata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myapp2';
  currjson: any = [];
  base = 'USD';
  cont2 = 'USD';
  result: string = '1';
  changebase(a: string) {
    this.base = a;
  }

  tocountry(b: string) {
    this.cont2 = b;
  }

  constructor(private currency: CurrencyapidataService) {}

  convert() {
    // console.log(this.base);
    // console.log(this.cont2);

    this.currency.getcurrencydata(this.base).subscribe((data) => {
      this.currjson = JSON.stringify(data);
      // console.log(this.currjson);
      this.currjson = JSON.parse(this.currjson);
      console.log(this.currjson);

      if (this.cont2 == 'USD') {
        this.result = this.currjson.rates.USD;
      }

      if (this.cont2 == 'INR') {
        this.result = this.currjson.rates.INR;
      }

      if (this.cont2 == 'EUR') {
        this.result = this.currjson.rates.EUR;
      }

      if (this.cont2 == 'KWD') {
        this.result = this.currjson.rates.KWD;
      }

      if (this.cont2 == 'AFN') {
        this.result = this.currjson.rates.AFN;
      }

      if (this.cont2 == 'KYD') {
        this.result = this.currjson.rates.KYD;
      }

      if (this.cont2 == 'JPY') {
        this.result = this.currjson.rates.JPY;
      }

      if (this.cont2 == 'CZK') {
        this.result = this.currjson.rates.CZK;
      }

      if (this.cont2 == 'NZD') {
        this.result = this.currjson.rates.NZD;
      }

      if (this.cont2 == 'OMR') {
        this.result = this.currjson.rates.OMR;
      }

      if (this.cont2 == 'QAR') {
        this.result = this.currjson.rates.QAR;
      }

      if (this.cont2 == 'EGP') {
        this.result = this.currjson.rates.EGP;
      }

      if (this.cont2 == 'AMD') {
        this.result = this.currjson.rates.AMD;
      }

      if (this.cont2 == 'CNH') {
        this.result = this.currjson.rates.CNH;
      }

      if (this.cont2 == 'CNY') {
        this.result = this.currjson.rates.CNY;
      }

      if (this.cont2 == 'AUD') {
        this.result = this.currjson.rates.AUD;
      }

      if (this.cont2 == 'PHP') {
        this.result = this.currjson.rates.PHP;
      }

      if (this.cont2 == 'MYR') {
        this.result = this.currjson.rates.MYR;
      }

      if (this.cont2 == 'NAD') {
        this.result = this.currjson.rates.NAD;
      }

      if (this.cont2 == 'PKR') {
        this.result = this.currjson.rates.PKR;
      }
    });
  }
}
