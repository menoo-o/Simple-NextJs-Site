import Link from "next/link";
import './footer.css';

export default function Footer() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

  return (
    <footer className="footer">
        <p className="footer-text">
            &copy; {currentYear} Time to Code - A project by 
            <Link href="https://github.com/menoo-o" target="_blank" className="footer-link">
                @menoo
            </Link>
        </p>
    </footer>
  );
}
