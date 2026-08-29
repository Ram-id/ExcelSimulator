import { UserAccount, UserSession } from '@/types/simulator';

const USERS_KEY = 'exsim_users';
const SESSION_KEY = 'exsim_session';

// Hash password with SHA-256 via Web Crypto API
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + '_exsim_salt_2026');
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

// Get all registered users
function getUsers(): UserAccount[] {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

// Save users array
function saveUsers(users: UserAccount[]): void {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Register a new user
export async function registerUser(
  username: string,
  displayName: string,
  password: string
): Promise<{ success: boolean; error?: string }> {
  const trimmedUsername = username.trim().toLowerCase();
  const trimmedName = displayName.trim();

  if (!trimmedUsername || trimmedUsername.length < 3) {
    return { success: false, error: 'Username minimal 3 karakter.' };
  }
  if (/[^a-z0-9_]/.test(trimmedUsername)) {
    return { success: false, error: 'Username hanya boleh huruf kecil, angka, dan underscore.' };
  }
  if (!trimmedName || trimmedName.length < 2) {
    return { success: false, error: 'Nama lengkap minimal 2 karakter.' };
  }
  if (!password || password.length < 4) {
    return { success: false, error: 'Password minimal 4 karakter.' };
  }

  const users = getUsers();
  if (users.find((u) => u.username === trimmedUsername)) {
    return { success: false, error: 'Username sudah digunakan. Pilih username lain.' };
  }

  const passwordHash = await hashPassword(password);
  const newUser: UserAccount = {
    username: trimmedUsername,
    displayName: trimmedName,
    passwordHash,
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  saveUsers(users);

  // Auto-login after register
  setSession({ username: trimmedUsername, displayName: trimmedName });

  return { success: true };
}

// Login
export async function loginUser(
  username: string,
  password: string
): Promise<{ success: boolean; error?: string; session?: UserSession }> {
  const trimmedUsername = username.trim().toLowerCase();
  const users = getUsers();
  const user = users.find((u) => u.username === trimmedUsername);

  if (!user) {
    return { success: false, error: 'Username tidak ditemukan.' };
  }

  const passwordHash = await hashPassword(password);
  if (user.passwordHash !== passwordHash) {
    return { success: false, error: 'Password salah.' };
  }

  const session: UserSession = {
    username: user.username,
    displayName: user.displayName,
  };
  setSession(session);

  return { success: true, session };
}

// Session management
function setSession(session: UserSession): void {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function getSession(): UserSession | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function logout(): void {
  localStorage.removeItem(SESSION_KEY);
}

// Per-user namespaced storage helpers
export function userKey(username: string, key: string): string {
  return `exsim_${username}_${key}`;
}

export function getUserData<T>(username: string, key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(userKey(username, key));
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function setUserData<T>(username: string, key: string, value: T): void {
  localStorage.setItem(userKey(username, key), JSON.stringify(value));
}

export function removeUserData(username: string, key: string): void {
  localStorage.removeItem(userKey(username, key));
}
