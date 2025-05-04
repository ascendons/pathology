import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly STORAGE_KEY = 'user_credentials';

  constructor(
    private auth: Auth
  ) {
    const storedUser = localStorage.getItem(this.STORAGE_KEY);

  }

  loginFB(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  register(email: string, password: string) :Promise<any>{
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  async login(username: string, password: string): Promise<boolean> {
    const storedUserString = 'cGFzc3dvcmQ=';
    console.log(storedUserString);
    if (this.verifyPassword(password, storedUserString)) {
      sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify({ username, password }));
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  private hashPassword(password: string): string {
    // Simple hash for demo - in production use a proper hashing library
    return btoa(password);
  }

  private verifyPassword(plainPassword: string, hashedPassword: string): boolean {
    return this.hashPassword(plainPassword) === hashedPassword;
  }
} 