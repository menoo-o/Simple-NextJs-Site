import Link from "next/link";
import Image from "next/image";
import data from '@/db/data.json'


export default async function Home() {
  const categories = data.events_categories;
  


  return (
   <>
      <main className="home-main">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <h2 className="category-title">{category.title}</h2>
            <p className="category-description">{category.description}</p>
            <Link href={`/events/${category.id}`} className="category-link">
              <Image
                src={category.image}
                alt={category.title}
                width={300}
                height={300}
                className="category-image"
              />
      </Link>
    </div>
  ))}
</main>

   </>
  );
}
