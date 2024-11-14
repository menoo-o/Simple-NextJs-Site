// components/BuyTicketButton.js
"use client"; // Marks this component as a client component

import styles from './BuyTicketButton.module.css';

export default function BuyTicketButton({ onClick }) {
  return (
    <button className={styles.buyTicketBtn} onClick={onClick}>
      Buy Ticket
    </button>
  );
}
