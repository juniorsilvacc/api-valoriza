interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  admin: boolean;
  created_at: Date;
  updated_at: Date;
}

export { IUser };
