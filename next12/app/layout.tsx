import "./globals.css";
// components
import NavBar from "./components/NavBar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Roy's Profil",
    description: "Created by Roy Framery",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="dark:bg-slate-800">
                <NavBar />
                <main className="px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
                    {children}
                </main>
            </body>
        </html>
    );
}
