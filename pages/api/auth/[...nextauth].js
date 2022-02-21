import NextAuth from "next-auth/next"
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret:  process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  pages: {
    signIn: '/auth/signin'
  } ,
  callbacks: {
    async session({session, token, user}){
      session.user.username = session.user.email.substring(0, session.user.email.indexOf('@'));
      session.user.uid = token.sub;
      return session;
    }
  },
  theme: {
    colorScheme: "auto", // "auto" | "dark" | "light"
    brandColor: "", // Hex color code
    logo: "https://aplicativomaisescola.online/instamigos.png" // Absolute URL to image
  }
})
