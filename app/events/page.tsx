// EVENTS PAGE
import Image from "next/image"
import Link from "next/link"
import data from '@/db/data.json'
import './eventspg.css'

export default function events1() {
  const cateogries = data.events_categories;
  
  return (
    <>
      <div className="events-page">
        <h1 className="events-page-title">Events Page</h1>
        <div className="categories-grid">
          {cateogries.map((category) => (
            <div key={category.id} className="category-card">
              <Link href={`/events/${category.id}`} className="category-link">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={450}
                  height={495}
                  className="category-image"
                />
                <h2 className="category-title">{category.title}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
