import Image from "next/image"
import Link from "next/link"

export default function events1() {
  return (
    <>
      <div>
        <h1>Events Page</h1>  
        <div> 
            <Link href='/events/london'>
                <Image src='/london.jpg' width={250} height={250} alt="London"/>
                <h2>Events in London</h2>
            </Link>

            <Link href='/events/sanfrancisco'>
                <Image src='/san.jpg' width={250} height={250} alt="San Francisco"/>
                <h2>Events in San Francisco</h2>
            </Link>

            <Link href='/events/barcelona'>
                <Image src='/barcelona.jpg' width={250} height={250} alt="Barcelona"/>
                <h2>Events in Barcelona</h2>    
            </Link>`
        </div>
      </div> 
    </>
  )
}
