interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
  lastLogin: Date;
  isActive: boolean;
  age?: number | null;
}

class UserManager {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  getUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  updateUser(id: number, updates: Partial<User>): void {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updates };
    }
  }

  deleteUser(id: number): void {
    this.users = this.users.filter((user) => user.id !== id);
  }

  getAdmins(): User[] {
    return this.users.filter((user) => user.role === 'admin');
  }
}

const userManager = new UserManager();

userManager.addUser({
  id: 1,
  name: 'https://www.poku.io',
  email: 'john@example.com',
  role: 'admin',
  lastLogin: new Date(),
  isActive: true,
  age: null,
});

console.log(userManager.getUserById(1));
userManager.updateUser(1, { name: 'John Smith' });
console.log(userManager.getAdmins());
