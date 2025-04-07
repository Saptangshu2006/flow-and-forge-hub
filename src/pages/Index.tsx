
import { useState } from "react";
import Layout from "../components/layout/Layout";

// Dummy data for initial UI
const initialTasks = [
  { id: 1, title: "Complete project proposal", completed: false, dueDate: "2025-04-10", category: "Work" },
  { id: 2, title: "Schedule team meeting", completed: false, dueDate: "2025-04-08", category: "Work" },
  { id: 3, title: "Grocery shopping", completed: true, dueDate: "2025-04-07", category: "Personal" },
  { id: 4, title: "Read chapter 5", completed: false, dueDate: "2025-04-12", category: "Education" },
];

const initialNotes = [
  { id: 1, title: "Project Ideas", preview: "Brainstorming session for the new client project...", category: "Work" },
  { id: 2, title: "Meeting Notes", preview: "Key points from the marketing team discussion...", category: "Work" },
  { id: 3, title: "Travel Plans", preview: "Flight options and accommodation for summer vacation...", category: "Personal" },
];

const Dashboard = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTaskCompletion = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <Layout>
      <div className="animate-fade-in">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg border shadow-sm p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Total Tasks</h3>
              <span className="h-10 w-10 rounded-full bg-blue-100 text-productivity-blue flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
              </span>
            </div>
            <h4 className="text-3xl font-bold">{tasks.length}</h4>
            <p className="text-sm text-muted-foreground">4 tasks due this week</p>
          </div>
          
          <div className="bg-white rounded-lg border shadow-sm p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Completed</h3>
              <span className="h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </span>
            </div>
            <h4 className="text-3xl font-bold">{tasks.filter(t => t.completed).length}</h4>
            <p className="text-sm text-muted-foreground">1 completed today</p>
          </div>
          
          <div className="bg-white rounded-lg border shadow-sm p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Notes</h3>
              <span className="h-10 w-10 rounded-full bg-purple-100 text-productivity-purple flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" x2="8" y1="13" y2="13" />
                  <line x1="16" x2="8" y1="17" y2="17" />
                  <line x1="10" x2="8" y1="9" y2="9" />
                </svg>
              </span>
            </div>
            <h4 className="text-3xl font-bold">{initialNotes.length}</h4>
            <p className="text-sm text-muted-foreground">Last update 2 hours ago</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Tasks Due Soon</h2>
              <button className="text-sm text-productivity-blue hover:underline">View All</button>
            </div>
            <div className="bg-white rounded-lg border shadow-sm p-4">
              <div className="space-y-1">
                {tasks.filter(task => !task.completed).slice(0, 4).map(task => (
                  <div key={task.id} className="task-item flex items-center">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTaskCompletion(task.id)}
                      className="h-5 w-5 rounded border-gray-300 mr-3 cursor-pointer"
                    />
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${task.completed ? 'task-done' : ''}`}>{task.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                            <line x1="16" x2="16" y1="2" y2="6" />
                            <line x1="8" x2="8" y1="2" y2="6" />
                            <line x1="3" x2="21" y1="10" y2="10" />
                          </svg>
                          {task.dueDate}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">{task.category}</span>
                      </div>
                    </div>
                    <button className="p-1 hover:bg-muted rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="5" r="1" />
                        <circle cx="12" cy="19" r="1" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Recent Notes</h2>
              <button className="text-sm text-productivity-blue hover:underline">View All</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {initialNotes.map(note => (
                <div key={note.id} className="note-card bg-white">
                  <h3 className="font-semibold mb-1">{note.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{note.preview}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">{note.category}</span>
                    <button className="text-xs text-productivity-purple hover:underline">Open</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Upcoming Calendar</h2>
            <button className="text-sm text-productivity-blue hover:underline">View Full Calendar</button>
          </div>
          <div className="bg-white rounded-lg border shadow-sm p-4">
            <div className="grid grid-cols-7 gap-1">
              <div className="text-center text-sm font-medium text-muted-foreground">Mon</div>
              <div className="text-center text-sm font-medium text-muted-foreground">Tue</div>
              <div className="text-center text-sm font-medium text-muted-foreground">Wed</div>
              <div className="text-center text-sm font-medium text-muted-foreground">Thu</div>
              <div className="text-center text-sm font-medium text-muted-foreground">Fri</div>
              <div className="text-center text-sm font-medium text-muted-foreground">Sat</div>
              <div className="text-center text-sm font-medium text-muted-foreground">Sun</div>
              
              {[...Array(7)].map((_, i) => (
                <div 
                  key={i} 
                  className={`h-20 border rounded-md p-1 ${i === 0 ? 'bg-productivity-purple/10 border-productivity-purple' : ''}`}
                >
                  <div className="text-right text-sm mb-1">{i + 7}</div>
                  {i === 0 && (
                    <div className="bg-productivity-purple text-white text-xs p-1 rounded mb-1 truncate">
                      Team Meeting
                    </div>
                  )}
                  {i === 2 && (
                    <div className="bg-blue-100 text-blue-700 text-xs p-1 rounded mb-1 truncate">
                      Project Due
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
