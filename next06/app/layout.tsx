import "./globals.css";
// components
import NavBar from "./components/NavBar";
import MyProfilePic from "./components/MyProfilePic";

export const metadata = {
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
                <MyProfilePic />
                {children}
            </body>
        </html>
    );
}
