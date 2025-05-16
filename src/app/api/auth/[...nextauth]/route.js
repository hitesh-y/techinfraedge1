import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/mongoose';
import User from '@/models/User';

// Default admin user for development/testing
const defaultAdmin = {
  id: "default-admin-id",
  name: "Admin User",
  email: "admin@jsbglobalinfotech.com",
  password: "admin123", // In production, use hashed passwords
  role: "admin"
};

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        try {
          await dbConnect();
          
          // Check for default admin first (for development/testing)
          if (credentials.email === defaultAdmin.email && 
              credentials.password === defaultAdmin.password) {
            return {
              id: defaultAdmin.id,
              name: defaultAdmin.name,
              email: defaultAdmin.email,
              role: defaultAdmin.role,
            };
          }
          
          // Find user by email in database
          const user = await User.findOne({ email: credentials.email });
          
          // Check if user exists and password is correct
          if (user && bcrypt.compareSync(credentials.password, user.password)) {
            return {
              id: user._id.toString(),
              name: user.name,
              email: user.email,
              role: user.role,
            };
          }
        } catch (error) {
          console.error("Auth error:", error);
          // If database connection fails, still allow default admin
          if (credentials.email === defaultAdmin.email && 
              credentials.password === defaultAdmin.password) {
            return {
              id: defaultAdmin.id,
              name: defaultAdmin.name,
              email: defaultAdmin.email,
              role: defaultAdmin.role,
            };
          }
        }
        
        // Authentication failed
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    }
  },
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, // 24 hours
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };