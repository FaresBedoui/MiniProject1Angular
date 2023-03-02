import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly storageKey = 'auth-user';

  register(email: string, password: string) {
    const users = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    const user = { email, password };
    users.push(user);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  login(email: string, password: string) {
    const users = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password);
    if (!user) {
      throw new Error('Invalid login credentials');
    }
    localStorage.setItem('authenticated', 'true');
  }

  logout() {
    localStorage.removeItem('authenticated');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('authenticated') === 'true';
  }
}
