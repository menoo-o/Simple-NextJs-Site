import Link from "next/link"
import './nav.css'
import Image from "next/image"


export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Image src='/logo.jpg' alt="logo" width={500} height={500} />
        </div>
        <div className="nav-links">
          <Link href='/' className="links">Home</Link>
          <Link href='/events' className="links">Events</Link>
          <Link href='/about' className="links">About</Link>
        </div>
      </nav>
    </header>
  );
}