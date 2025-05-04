import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, UserCredential, onAuthStateChanged } from '@angular/fire/auth';
import { Router } from '@angular/router'; // Import Router

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Use a more descriptive key for the Firebase token
  private readonly TOKEN_STORAGE_KEY = 'firebase_id_token';

  constructor(
    private auth: Auth,
    private router: Router // Inject Router
  ) { }

  async loginFB(email: string, password: string): Promise<boolean> {
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(this.auth, email, password);
      if (userCredential.user) {
        const idToken = await userCredential.user.getIdToken();
        sessionStorage.setItem(this.TOKEN_STORAGE_KEY, idToken);
        console.log('Login successful, token stored.');
        return true;
      }
      return false; // Should not happen if signInWithEmailAndPassword resolves successfully
    } catch (error) {
      console.error("Firebase Login Error:", error);
      // Clear any potential stale token on login failure
      sessionStorage.removeItem(this.TOKEN_STORAGE_KEY);
      return false;
    }
  }

  register(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  async logoutFB(): Promise<void> {
    await signOut(this.auth);
    sessionStorage.removeItem(this.TOKEN_STORAGE_KEY);
    console.log('User signed out and token removed.');
    this.router.navigate(['/login']); // Navigate to login after logout
  }

  private hashPassword(password: string): string {
    // Simple hash for demo - in production use a proper hashing library
    return btoa(password);
  }

  private verifyPassword(plainPassword: string, hashedPassword: string): boolean {
    return this.hashPassword(plainPassword) === hashedPassword;
  }

  // Method to check if the user is currently authenticated based on stored token
  isAuthenticated(): boolean {
    return sessionStorage.getItem(this.TOKEN_STORAGE_KEY) !== null;
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.TOKEN_STORAGE_KEY);
  }
}