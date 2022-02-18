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
    signIn: '/auth/sigin'
  } ,
  theme: {
    colorScheme: "auto", // "auto" | "dark" | "light"
    brandColor: "", // Hex color code
    logo: "https://aplicativomaisescola.online/instamigos.png" // Absolute URL to image
  }
})
