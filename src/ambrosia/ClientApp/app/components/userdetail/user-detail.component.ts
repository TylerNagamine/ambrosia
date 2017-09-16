import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { UserDto } from '../../../models/Ambrosia';

@Component({
    selector: 'user-detail',
    templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit, OnDestroy {
    public user: UserDto;
    private sub: Subscription;

    constructor(@Inject('BASE_URL') private baseUrl: string,
        private http: Http,
        private router: ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.router.params.subscribe(params => {
            const id = params['id'];

            this.getUser(id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    private getUser = (id: string): void => {
        this.http.get(this.baseUrl + `api/user/${id}`).subscribe(result => {
            this.user = result.json() as UserDto;
        }, error => console.error(error));
    }
}
