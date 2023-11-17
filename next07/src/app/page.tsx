import Link from "next/link";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className={inter.className}>
            <div className="grid place-content-center min-h-screen">
                <h1 className="text-3xl">Hello World!</h1>
                <Link href={"/feedback/"}>feedback page</Link>
            </div>
        </main>
    );
}
