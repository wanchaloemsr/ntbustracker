import { Component, OnInit, Injectable } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

	public isCollapsed = true;

	public side = false;

	show(){
		if(this.side === false){
			return "menu-hide";
		}else{
			return "menu-show";
		}
	}

	hide(){
		if(this.side === true){
			return "menu-hide";
		}else{
			return "menu-show";
		}
	}

	 openNav() {
    document.getElementById("mySidenav").style.width = "80%";
    this.side = true;
}

 closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    this.side = false;
	}


}
