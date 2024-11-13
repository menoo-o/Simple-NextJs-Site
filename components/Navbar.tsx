import Link from "next/link"
import './nav.css'

export default function Navbar() {
  return (
    <>
    <header>
        <nav className="navbar">
            <Link href='/' className="links">Home</Link>
            <Link href='/events' className="links">Events</Link>
            <Link href='/about' className="links">About Us</Link>
        </nav>
    </header>
      
    </>
  )
}
