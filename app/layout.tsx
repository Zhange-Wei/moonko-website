import "./globals.css";
import type { Metadata } from "next";
export const metadata:Metadata={title:"MOONKO ($MNKO) | A Bigger Moon Awaits",description:"Meet MOONKO, the astronaut raccoon on a cosmic community adventure. Launch details to be announced."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
