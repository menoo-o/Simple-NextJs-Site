import Link from "next/link"
import '../app/globals.css'

export default function Footer() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

  return (
    <>
        <footer>
            <p>
                &copy; {currentYear} Time to Code - A project by <Link href='https://github.com/menoo-o' target="_blank">@menoo</Link>
            </p>
        </footer>
    </>
  )
}
