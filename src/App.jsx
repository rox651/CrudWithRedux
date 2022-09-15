import { DataUsers, Form, Footer, Header } from "./components/";

function App() {
  return (
    <>
      <Form />
      <main className="bg-white overflow-hidden w-4/5 md:w-[730px] h-[500px] lg:w-[1100px] rounded-sm py-4 px-10 flex flex-col justify-between ">
        <Header />
        <DataUsers />
        <Footer />
      </main>
    </>
  );
}

export default App;
