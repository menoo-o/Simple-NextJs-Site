import Link from "next/link";
import Image from "next/image";



export default async function Home() {
  const title = await fetchTitle(); // Async fetching of title

  return (
   <>
     <h1>HOME PAGE</h1>
      <main>
        <Link href='/events/london'>
          <Image src='/london.jpg' width={250} height={250} alt="London"/>
          <h2>Events in London</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem repudiandae fuga, dolor nobis cum perferendis ipsa non iste.</p>
        </Link>

        <Link href='/events/sanfrancisco'>
          <Image src='/san.jpg' width={250} height={250} alt="San Francisco"/>
          <h2>Events in San Francisco</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem repudiandae fuga, dolor nobis cum perferendis ipsa non iste.</p>
        </Link>

        <Link href='/events/barcelona'>
          <Image src='/barcelona.jpg' width={250} height={250} alt="Barcelona"/>
          <h2>Events in Barcelona</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem repudiandae fuga, dolor nobis cum perferendis ipsa non iste.</p>
        </Link>
      </main>
   </>
  );
}

async function fetchTitle() {
  return "hello world"; // Simulated data
}