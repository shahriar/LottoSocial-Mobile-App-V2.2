import { Component } from '@angular/core';
import { NavController, NavParams, Events, LoadingController, AlertController } from 'ionic-angular';

import { AccountService } from '../../../services/account.service';

@Component({
	selector: 'page-edit-profile-email',
	templateUrl: 'edit-profile-email.html'
})
export class EditProfileEmail {
	
	public email = {
		current_email:"",
		new_email:"",
		confirm_email:"",
		current_password:""
	};

	private warningEmail:boolean = false;

	constructor(
		public events:Events, 
	    public navParams: NavParams,
		public navCtrl: NavController, 
		private srvAccount:AccountService,
	    private loadingCtrl:LoadingController,
	    private alertCtrl: AlertController) {

		console.log('EditProfileEmail ', navParams.data);
		this.email.current_email = navParams.data.accountData.email_address;
	}

	ionViewDidLoad() {
    	console.log('ionViewDidLoad EditProfileEmail');
	}

	submitEmail(emailForm){
		console.log('EditProfileEmail::submitEmail() ', this.email);

		if (this.email.new_email != this.email.confirm_email) {
			this.warningEmail = true;
			return;
		}else{
			this.warningEmail = false;
		}

		let loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();

    	// load data
    	this.srvAccount.saveEmail(this.email).take(1)
        .subscribe( (success:any) => {
            loader.dismiss();

            console.log("EditProfileDetails::submitDetails", success );
            if (success) {
            	let res = success.response[0].update_customer_email.response;

	            console.log("EditProfileDetails::submitDetails", res );

	            let alert = this.alertCtrl.create({
	            	title: res.status,
	            	subTitle: res.message,
	            	buttons: ['Dismiss']
	            });
	            alert.present();
            }
            

        }, err => {
            loader.dismiss();
            console.log("AccountPage::ionViewDidLoad", err);
        });
	}

	closeMe() {
		console.log('EditProfileEmail::dismiss() ');
  		let data = { 'foo': 'bar' };
		this.events.publish('closeMe', data);
	}

	showPassword(input: any): any {
		input.type = input.type === 'password' ? 'text' : 'password';
	}


}
