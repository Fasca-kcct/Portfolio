import Header from "../components/Header";
import Contacts from "../components/Contacts"

export default function Home() {
  return (
    <>
      <Header />
      <div className="m-7 mx-16">
        <h1 className="text-4xl font-black my-10">
          Hayatann.com
        </h1>
        <div>
          <Contacts/>
        </div>
      </div>
      
    </>
  );
}
