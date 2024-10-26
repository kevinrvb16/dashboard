import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    pages: {
        signIn: "/"
    },
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "Email", type: "email", placeholder: "ex@email.com"},
            password: {  label: "Password", type: "password", placeholder: "123" }
          },
          async authorize(credentials, req) {
            if(!credentials) {
                return null
            }
            if(credentials.email === "ex@email.com" && credentials.password === "123") {
                return {
                    id: "1",
                    name: "kevin",
                    email: "kevin@gmail.com"
                }
            }
          }
        })
      ]
})

export { handler as GET, handler as POST}