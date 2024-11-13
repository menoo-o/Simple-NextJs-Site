import Link from "next/link";
import Image from "next/image";
import data from '@/db/data.json'
import './globals.css'


export default async function Home() {
  const categories = data.events_categories;
  


  return (
   <>
      <main>
        {categories.map((category)=>(
          <div key={category.id}>
            <h2>{category.title}</h2>
            <p>{category.description}</p>
            <Link href={`/events/${category.id}`}>
             <Image src={category.image} alt={category.title} width={300} height={300} />
            </Link>
            
          </div>
        ))}

        
      </main>
   </>
  );
}
