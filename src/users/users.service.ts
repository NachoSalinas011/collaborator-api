import { Injectable } from '@nestjs/common';
import { User } from './models/auth.model';

@Injectable()
export class UsersService {
    private readonly users: User[] = [{
        user: 'nachosalinas@live.com.ar',
        password: '123',
        id: 1
    },
    {
        user: 'vaninamaacosta@gmail.com',
        password: '456',
        id: 2
    },
    {
        user: 'darascon@gmail.com',
        password: '789',
        id: 3
    }];

    async getByUsername(username: string): Promise<User> {
        return this.users.find(user => user.user === username);
    }
}
