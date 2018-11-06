import { Component, ViewChild  } from '@angular/core';
import { NavController, AlertController, Events} from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { ProfilePage } from '../profile/profile';
import { Http, Headers, RequestOptions }  from "@angular/http";
import { LoadingController } from 'ionic-angular';
/*import 'rxjs/add/operator/map';*/
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SoinsPage } from '../soins/soins';
import { BilanPage } from '../bilan/bilan';
import { RegimesPage } from '../regimes/regimes';
import { SuiviPersoPage } from '../suivi-perso/suivi-perso';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  @ViewChild("username") username;
  @ViewChild("password") password;
  data:string;
  items:any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
              private http: Http, public loading: LoadingController, public events: Events) {

  }

  signUp(){
    this.navCtrl.push(RegisterPage);
  }

  signIn(){

    //// check to confirm the username and password fields are filled

    if(this.username.value=="" ){

      let alert = this.alertCtrl.create({

        title:"ATTENTION",
        subTitle:"Username field is empty",
        buttons: ['OK']
      });

      alert.present();
    } else

    if(this.password.value==""){

      let alert = this.alertCtrl.create({

        title:"ATTENTION",
        subTitle:"Password field is empty",
        buttons: ['OK']
      });

      alert.present();

    }
    else
    {

      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );
      let options = new RequestOptions({ headers: headers });


      let data = {
        username: this.username.value,
        password: this.password.value
      };



      let loader = this.loading.create({
        content: 'Processing please wait...',
      });

      loader.present().then(() => {

        //ionicdon.com/mobile/ JSON.stringify(data)
        this.http.post("http://localhost/devdb/login.php",data,options)
          //.map(res => res.json())
          .pipe(map((res: any) => res.text()))
          .subscribe(res => {

            loader.dismiss()
            if(res=="Your Login success"){

              let alert = this.alertCtrl.create({
                title:"CONGRATS",
                subTitle:(res),
                buttons: ['OK']
              });

              alert.present(); //  this.navCtrl.push(SuiviPersoPage, data);
              this.events.publish('user:loggedin');
             this.navCtrl.setRoot(SuiviPersoPage);
             //this.navCtrl.push(Tab1Page);
            }else
            {
              let alert = this.alertCtrl.create({
                title:"ERROR",
                subTitle:(res), //"Your Login Username or Password is invalid",
                buttons: ['OK']
              });
              this.navCtrl.setRoot(SuiviPersoPage);

              alert.present();
            }
          });
      });
    }

  }

}
