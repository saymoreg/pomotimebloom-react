import Header from "./components/Header";
import Footer from "./components/Footer";
import PomodoroTimer from "./components/PomodoroTimer";

function App() {
  return (
    <div className="flex flex-col h-screen px-10 py-2">
      <Header />
      <main className="flex-grow bg-secondary rounded-md">
        <PomodoroTimer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
