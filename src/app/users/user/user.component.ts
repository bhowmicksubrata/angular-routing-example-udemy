import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  private paramSubscription: Subscription;

  constructor(private activatedRout: ActivatedRoute, 
  private router: Router) { }

  ngOnInit() {
    this.user = {
      id: this.activatedRout.snapshot.params["id"],
      name: this.activatedRout.snapshot.params["name"]
    }

    this.paramSubscription = this.activatedRout.params.subscribe(params => {
      this.user.id = params["id"],
      this.user.name = params["name"]
    });
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }

  showPrevUser() {
    this.router.navigate(["/users/1/Max"]);
  }

  showNextUser() {
    this.router.navigate(["/users/2/Ana"]);
  }
}
