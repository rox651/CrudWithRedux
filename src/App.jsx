import { DataUsers, Form, Footer, Header } from "./components/";
import { LoginForm } from "./components/auth/LoginForm";

function App() {
  return (
    <>
      {/* <Form />
      <main className="bg-white overflow-hidden w-11/12 md:w-[730px] h-[500px] lg:w-[90%] lg:max-w-7xl rounded-sm py-6 px-5 flex flex-col justify-between ">
        <Header />
        <DataUsers />
        <Footer />
      </main> */}
      <LoginForm/>
    </>
  );
}

export default App;
