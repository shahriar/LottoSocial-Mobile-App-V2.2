import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController, App } from 'ionic-angular';
import { Leave2Page } from '../leave2/leave2';
import { TandcPage } from '../tandc/tandc';
import { RecentDrawPage } from '../recent-draw/recent-draw';
import { YourTicketsPage } from '../your-tickets/your-tickets';

/*
  Generated class for the ManageSyndicate2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-manage-syndicate2',
  templateUrl: 'manage-syndicate2.html'
})
export class ManageSyndicate2Page {

 constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController, public app: App) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageSyndicatePage');
  }
   ionViewWillEnter() {
        this.viewCtrl.showBackButton(false);
    }
    close() {
      this.navCtrl.pop();
    }
    leaveSyndicate() {
      let leave2Modal = this.modalCtrl.create(Leave2Page);
      leave2Modal.onDidDismiss(data => {
        console.log(data);
      });
      leave2Modal.present();
    }
    agreement() {
      this.navCtrl.push(TandcPage);
    }
    viewRecent() {
      this.navCtrl.push(RecentDrawPage);
    }
    viewTicket() {
      this.navCtrl.push(YourTicketsPage);
    }

}
