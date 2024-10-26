"use client"
import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"

export default function LoginForm() {
    const searchParams = useSearchParams()

    const error = searchParams.get('error')

    async function login(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        const data = {
            email: formData.get("email"),
            password: formData.get("password")
        }

        signIn("credentials",{
            ...data,
            callbackUrl: "/dashboard",
        })

    }
    return (
        <form onSubmit={login} className="bg-white p-12 rounded-lg w-96 max-w-full flex justify-center items-center flex-col gap-2">
            <h2 className="font-bold text-2xl mb-6">Faça o login</h2>
            <p className="justify-start">Email:</p>
            <input name="email" type="email" placeholder="ex@email.com" className="input input-primary bg-white text-black w-full" />
            <p className="justify-start">Senha:</p>
            <input name="password" type="password" placeholder="123" className=" input input-primary bg-white text-black w-full" />
            <button type="submit" className="btn btn-primary w-full">Login</button>
            {error && error === "CredentialsSignin" && 
                (<div className="text-red-500">Erro no login</div>)
            }
        </form>
    )
}