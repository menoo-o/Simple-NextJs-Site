// EVENTS PAGE
import Image from "next/image"
import Link from "next/link"
import data from '@/db/data.json'

export default function events1() {
  const cateogries = data.events_categories;
  
  return (
    <>
      <div>
        <h1>Events Page</h1>  
      <div> 
        
      {cateogries.map((category)=>(
        <div key={category.id}>
          <Link href={`/events/${category.id}`}>
              <Image src={category.image} alt={category.title} width={450} height={495} />
              <h2>{category.title}</h2>
           </Link>
        </div>
      ))}
        </div>
      </div> 
    </>
  )
}
