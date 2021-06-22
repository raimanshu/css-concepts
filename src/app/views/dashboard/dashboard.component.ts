import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  forms = 'forms';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.fragment.subscribe(f => {
    //   const element = document.querySelector("#" + f)
    //   if (element) element.scrollIntoView()
    // })
  }

}
