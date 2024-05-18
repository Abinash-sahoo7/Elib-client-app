import Banner from "@/app/(home)/components/Banner";
import Image from "next/image";
import BookList from "./components/BookList";


export default async function Home() {

  const response = await fetch(`${process.env.BACKEND_URL}/books`);
  if(!response.ok){
    throw new Error("An error occure while fetching the books");
  }

  const books = await response.json();
  // console.log("Books", books);
  

  return (
    <>
      <Banner />
      <BookList books={books} />
      {/* <h1>Welcome to elib-client</h1> */}
    </>
  );
}
