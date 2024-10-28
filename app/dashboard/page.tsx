import LogoutButton from "@/components/LogoutButton"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
// import { transactions } from '@/utils/data';
import Card from '@/components/Card';
// import LineChart from '@/components/LineChart';
// import BarChart from '@/components/BarChart';
// import Filters from '@/components/Filters';

export default async function Page() {
    const session = await getServerSession()

    if(!session)  {
        redirect("/")
    }
    return (
        <div>
            <div>Olá, {session?.user?.name} </div>
            <div>Dashboard</div>
            <Card title="Transações" value="transactions"></Card>
            <div><LogoutButton /></div>
        </div>
    )
}