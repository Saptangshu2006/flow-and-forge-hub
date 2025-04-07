
import Layout from "../components/layout/Layout";

const Calendar = () => {
  // Mock calendar data - in a real implementation we would use a proper calendar library
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentMonth = "April 2025";
  
  // Generate calendar grid (simplified)
  const generateCalendarDays = () => {
    // This is a simplified mockup - normally we'd use date-fns or similar
    const days = [];
    for (let i = 1; i <= 30; i++) {
      days.push(i);
    }
    return days;
  };

  const calendarDays = generateCalendarDays();
  
  // Mock events
  const events = [
    { id: 1, title: "Team Meeting", date: 8, color: "bg-blue-500" },
    { id: 2, title: "Project Deadline", date: 15, color: "bg-red-500" },
    { id: 3, title: "Client Call", date: 12, color: "bg-green-500" },
    { id: 4, title: "Product Demo", date: 22, color: "bg-purple-500" },
    { id: 5, title: "Weekly Review", date: 8, color: "bg-productivity-purple" },
  ];

  return (
    <Layout>
      <div className="animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold">Calendar</h1>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white border rounded-md shadow-sm hover:bg-muted/20 transition-colors">Today</button>
            <div className="flex">
              <button className="px-3 py-2 bg-white border rounded-l-md shadow-sm hover:bg-muted/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button className="px-3 py-2 bg-white border-t border-b border-r rounded-r-md shadow-sm hover:bg-muted/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
            <select className="px-4 py-2 bg-white border rounded-md shadow-sm">
              <option>Month</option>
              <option>Week</option>
              <option>Day</option>
            </select>
          </div>
        </div>

        <div className="bg-white rounded-lg border shadow-sm p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">{currentMonth}</h2>
            <button className="text-sm px-3 py-1.5 bg-productivity-purple text-white rounded-md hover:bg-productivity-purple/80 transition-colors">
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14" />
                  <path d="M5 12h14" />
                </svg>
                Add Event
              </span>
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1">
            {/* Day headings */}
            {daysOfWeek.map((day) => (
              <div key={day} className="p-2 text-center font-medium text-sm text-muted-foreground">
                {day.substring(0, 3)}
              </div>
            ))}
            
            {/* Calendar days */}
            {calendarDays.map((day) => {
              const dayEvents = events.filter(event => event.date === day);
              const isToday = day === 7; // Just for the mock-up
              
              return (
                <div 
                  key={day} 
                  className={`h-32 border rounded-md p-2 ${isToday ? 'bg-productivity-purple/10 border-productivity-purple' : ''}`}
                >
                  <div className="text-right mb-1">
                    <span className={`inline-block text-sm rounded-full w-6 h-6 flex items-center justify-center ${isToday ? 'bg-productivity-purple text-white' : ''}`}>
                      {day}
                    </span>
                  </div>
                  <div className="space-y-1">
                    {dayEvents.map(event => (
                      <div 
                        key={event.id} 
                        className={`${event.color} text-white text-xs p-1 rounded truncate cursor-pointer`}
                      >
                        {event.title}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Calendar;
