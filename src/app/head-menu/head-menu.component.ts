import { Component } from '@angular/core';

@Component({
  selector: 'app-head-menu',
  standalone: true,
  imports: [],
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
}
