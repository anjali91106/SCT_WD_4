import ToDoList from "@/components/todolist";
import CalendarWrapper from "@/components/calendarwrapper";

export default function Home() {

  return (
    <main className="h-screen bg-gradient-to-br from-[#E9ECE6] via-[#C8D5B9] to-[#A4C3A2]">
      <h1 className="text-6xl text-center mb-2 text-[#4B4F47] font-bold drop-shadow-sm">
        ToDoList-App
      </h1>
      <p className="text-center text-lg text-[#4B4F47] mb-4">
        Good Morning 🌞 — Let’s get things done!
      </p>


      <div className="flex justify-center gap-8 p-6">
        <div className="w-1/2">
          <div className="backdrop-blur-md bg-white/40 rounded-xl shadow-lg p-4">
            <ToDoList />
          </div>

        </div>
        <div className="w-1/3">
          <CalendarWrapper />
        </div>
      </div>
    </main>


  );
} 
