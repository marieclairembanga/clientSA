import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import {Http, Headers, RequestOptions}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
/*import 'rxjs/add/operator/map';*/
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SuiviPersoPage } from '../suivi-perso/suivi-perso';
import { HomePersonnelPage } from '../home-personnel/home-personnel';
//import 'rxjs'

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {


  @ViewChild("email") email;
  @ViewChild("username") username;
  @ViewChild("mobile") mobile;
  @ViewChild("password") password;
  @ViewChild("firstname") firstname;


  constructor(public navCtrl: NavController, public alertCtrl: AlertController,  private http: Http,
              public loading: LoadingController) {

  }

  Register(){
    //// check to confirm the username, email, telephone and password fields are filled

    if(this.username.value=="" ){

      let alert = this.alertCtrl.create({

        title:"ATTENTION",
        subTitle:"Username field is empty",
        buttons: ['OK']
      });

      alert.present();
    } else
    if(this.email.value==""){

      let alert = this.alertCtrl.create({

        title:"ATTENTION",
        subTitle:"Email field is empty",
        buttons: ['OK']
      });

      alert.present();

    }
    else
    if(this.mobile.value=="" ){

      let alert = this.alertCtrl.create({

        title:"ATTENTION",
        subTitle:"Mobile number field is empty",
        buttons: ['OK']
      });

      alert.present();
    }  else
    if(this.firstname.value=="" ){

      let alert = this.alertCtrl.create({

        title:"ATTENTION",
        subTitle:"firstname name field is empty",
        buttons: ['OK']
      });

      alert.present();
    }
    else
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
        password: this.password.value,
        mobile: this.mobile.value,
        email: this.email.value,
        firstname: this.firstname.value
      };


      let loader = this.loading.create({
        content: 'Processing please wait...',
      });

      loader.present().then(() => {  ///JSON.stringify(res.url)  JSON.stringify(data)
        this.http.post("http://localhost/devdb/register.php",data, options)
          //.map(res => JSON.stringify(data))
          .pipe(map((res: any) => res.json()))
          //.pipe(map((res: any) => res.json()))
          .subscribe(res => {

            loader.dismiss()
            if(res=="Registration successfull"){
              let alert = this.alertCtrl.create({
                title:"CONGRATS",
                subTitle:(res),
                buttons: ['OK']
              });

              alert.present();
              this.navCtrl.setRoot(SuiviPersoPage);

            }else
            {
              let alert = this.alertCtrl.create({
                title:"ERROR",
                subTitle:(res),
                buttons: ['OK']
              });

              alert.present();
            }
          });
      });
    }

  }
  Registerpersonnel(){
    this.navCtrl.setRoot(HomePersonnelPage);
  }
}
