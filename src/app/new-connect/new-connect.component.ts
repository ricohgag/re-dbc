import { Component } from '@angular/core';

@Component({
  selector: 'app-new-connect',
  standalone: true,
  imports: [],
  templateUrl: './new-connect.component.html',
  styleUrl: './new-connect.component.css'
})
export class NewConnectComponent {
  cancelNewConnect() {
    const newConnect = document.getElementById("new-connect");
    console.log("newConnect", newConnect);
    if (newConnect == null) {
      return
    }

    newConnect.style.display = "none";
  }
}
