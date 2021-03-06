import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { CheckWinningsPage } from '../check-winnings/check-winnings'
import { MySyndicatePage } from '../my-syndicate/my-syndicate';
import { Params } from '../../services/params';

import { CreateSyndicateTab } from '../create-syndicate-tab/create-syndicate-tab';
import { AppSoundProvider } from '../../providers/app-sound/app-sound';

@Component({
	selector: 'page-syndicates',
	templateUrl: 'syndicates.html'
})
export class SyndicatesPage {
    tab1child = MySyndicatePage;
    tab2child = CreateSyndicateTab;

    indexSelected: number;

    constructor(
        public params:Params,
        public navCtrl: NavController, 
        public appSound:AppSoundProvider,
        public navParams: NavParams) {
        }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SyndicatePage');
    }

    ionViewWillEnter() {
        this.indexSelected = this.navParams.data.tabIndex || 0;
    }

    goHomePage(){
        this.params.goHomePage();
    }

    tabChange(){
        this.appSound.play('menuClick');
    }

}
