import Header from "./components/Header";
import Footer from "./components/Footer";
import PomodoroTimer from "./components/PomodoroTimer";

function App() {
  return (
    <div className="flex flex-col justify-center px-10 py-2 w-full h-screen">
      <Header />
      <PomodoroTimer />
      <Footer />
    </div>
  );
}

export default App;
