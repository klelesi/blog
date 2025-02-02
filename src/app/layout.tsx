import type {Metadata} from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata: Metadata = {
    title: "Klele.si Blog",
    description: "Zapisi ob ustvarjanju spletne strani klele.si.",
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="sl-SI">
        <head>
            <link rel="shortcut icon" type="image/jpg" href="/images/favicon.png"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Kulim+Park:wght@400;600;700&display=swap"
                rel="stylesheet"/>
        </head>
        <body className={'sans flex flex-col bg-beige'}
              style={{backgroundImage: 'url(/images/bg.png)', backgroundRepeat: 'repeat'}}>
        <Navbar/>
        <div className="py-6">
            {children}
        </div>
        </body>
        </html>
    );
}
