import { Component } from '@angular/core';
import { NewConnectComponent } from '../new-connect/new-connect.component';

@Component({
  selector: 'app-head-menu',
  standalone: true,
  imports: [NewConnectComponent],
  templateUrl: './head-menu.component.html',
  styleUrl: './head-menu.component.css'
})
export class HeadMenuComponent {
  /* 点击按钮，下拉菜单在 显示/隐藏 之间切换 */
  switchMenuDisplay(state:number) {
    const menus = document.getElementById("menus-ul");
    console.log("menus", menus);
    if (menus == null) {
      return
    }

    if (state === 1) {
      menus.style.display = "block";
    } else {
      menus.style.display = "none";
    }
    
  }

  /* 点击按钮，打开新建连接页面 */
  openNewConnect() {
    const newConnect = document.getElementById("new-connect");
    console.log("newConnect", newConnect);
    if (newConnect == null) {
      return
    }

    newConnect.style.display = "block";
  }
}
