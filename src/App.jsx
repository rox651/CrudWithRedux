import { DataUsers, Form } from "./components/";
import { Footer, Header } from "./layout";

function App() {
  return (
    <>
      <Form />
      <main className=" bg-white overflow-hidden w-4/5 md:w-[830px] h-[500px] rounded-sm py-4 px-10 flex flex-col justify-between">
        <Header />
        <DataUsers />
        <Footer />
      </main>
    </>
  );
}

export default App;
