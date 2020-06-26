import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { Router} from '@angular/router'
import{ AlertController } from '@ionic/angular'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  

  username: string = ""
	password: string = ""
  user: any;
  
  alertController: any;

  constructor(public afAuth: AngularFireAuth,
    public alert: AlertController,
    public router: Router) { }

	ngOnInit() {
	}

	async login() {
		const { username, password } = this
		try {
      const res = await this.afAuth.signInWithEmailAndPassword(username + '@boun.edu.tr', password)
      console.log(res)
   
      this.router.navigate(['/tabs/tab4'])
			} catch(err) {
			console.dir(err)
			if(err.code === "auth/user-not-found") {
        this.showAlert("Error!", "User not found")
      }
      if(err.code === "auth/invalid-email") {
        this.showAlert("Error!", "Invalid username")
      }
      if(err.code === "auth/wrong-password") {
        this.showAlert("Error!", "Wrong password")
			}
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



