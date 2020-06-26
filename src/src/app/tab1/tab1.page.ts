import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { Router} from '@angular/router'
import{ AlertController } from '@ionic/angular'




@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  username: string = ""
	password: string = ""
	cpassword: string = ""
  alertController: any;

	constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public router: Router
		) { }

	ngOnInit() {
	}


	async register() {
		const { username, password, cpassword } = this
		if(password !== cpassword) {
      this.showAlert("Error!", "Passwords don't match")
			return console.error("Passwords don't match")
		}

		try {
	  const res = await this.afAuth.createUserWithEmailAndPassword(username + '@boun.edu.tr', password) 
    console.log(res)
    //this.showAlert("Success!", "Welcome")
    this.router.navigate(['/tabs/tab4'])
    }catch(error) {
      console.dir(error)
      this.showAlert("Error", error.message)
		}
  }
  
 async showAlert( header:string, message:string) {
   const alert = await this.alert.create({
     header,
     message,
     buttons: ["Ok"]
   })
   await alert.present()
 }

}
