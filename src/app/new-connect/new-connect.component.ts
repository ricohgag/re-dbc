import { Component, Input } from '@angular/core';
import { FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { invoke } from '@tauri-apps/api/tauri';
import { message } from '@tauri-apps/api/dialog';

@Component({
  selector: 'app-new-connect',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-connect.component.html',
  styleUrl: './new-connect.component.css'
})

export class NewConnectComponent {
  public connectModel: ConnectModel = new ConnectModel('abasd','101.35.6.67',3306,'root','woaini89');


  constructor(
  ) {}

  cancelNewConnect() {
    const newConnect = document.getElementById("new-connect");
    console.log("newConnect", newConnect);
    if (newConnect == null) {
      return
    }

    newConnect.style.display = "none";
  }

  testConnect() {
    console.log("connectModel", this.connectModel);
    let dbUrl = `mysql://${this.connectModel.username}:${this.connectModel.password}@${this.connectModel.host}:${this.connectModel.port}`;

    // let dbUrl = "mysql://root:woaini89xyq@101.35.6.67:3306/rs_dbc";
    console.log("db_url", dbUrl);
    
    invoke<string>("test_connect", { dbUrl }).then(async (text) => {
      console.log("text", text);
      await message(text);
    });
  }
}

export class ConnectModel {
  constructor(
    public connectName: string,
    public host: string,
    public port: number,
    public username: string,
    public password: string,
  ) {}
  
}