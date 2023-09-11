import type { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";


export const options: NextAuthOptions = {
    providers:[
        CredentialsProvider({
            name:"credentials",
            credentials: {
                userEmail: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your-cool-username"
                },
                userPassword: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-awesome-password"
                }
            },
            async authorize(credentials, req) {
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)
                const res = await fetch("https://localhost:7043/LoginAdmin'", {
                  method: 'POST',
                  body: JSON.stringify(credentials),
                })
                const user = await res.json()
                console.log(res)
          
                // If no error and we have user data, return it
                if (res.ok && user) {
                  return user
                }
                // Return null if user data could not be retrieved
                return null
              }
        })
    ],
    // pages:{
    //     signIn:"/auth/signin",
    // },
}