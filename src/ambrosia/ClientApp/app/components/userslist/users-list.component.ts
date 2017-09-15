import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { UserDto } from '../../../models/Ambrosia';

@Component({
    selector: 'users',
    templateUrl: './users-list.component.html'
})
export class UsersListComponent {
    public users: UserDto[];

    constructor(private http: Http,
        @Inject('BASE_URL') private baseUrl: string) {
        this.getUsers();
    }

    private handleClick = (): void => {
        this.getUsers();
    }

    private getUsers = (): void => {
        this.http.get(this.baseUrl + 'api/user').subscribe(result => {
            this.users = result.json() as UserDto[];
        }, error => console.error(error));
    }
}
