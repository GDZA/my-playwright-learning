type Credentials = {
  email: string;
  password: string;
  role?: string;
};

export const validUser: Credentials = {
  email: "user@test.com",
  password: "Password123",
  role: "user",
};

export function getLoginUrl(env: string): string {
  return `https://${env}.example.com/login` ; }