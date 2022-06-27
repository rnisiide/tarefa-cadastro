import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newBook(): void {
    console.log(`New book works!!`)
   /* modal.style.display = 'block';
    modalSpan.onclick = function() {
      modal.style.display = "none";
    }*/
  }

}
