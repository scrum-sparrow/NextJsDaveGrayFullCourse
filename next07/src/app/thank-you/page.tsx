import Link from "next/link";

export default function ThankYou() {
    return (
        <main className="grid place-content-center min-h-screen">
            <h1 className="text-3xl">Thank you for your feedback!</h1>
            <Link href={"/"}>Back to Home Page</Link>
        </main>
    );
}
