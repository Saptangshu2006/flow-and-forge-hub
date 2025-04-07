
import { useState } from "react";
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Task {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  priority: string;
  dueDate: string;
  category: string;
}

const initialTasks: Task[] = [
  { 
    id: 1, 
    title: "Complete project proposal", 
    description: "Write up the full project proposal with timeline and budget estimates",
    completed: false, 
    priority: "high",
    dueDate: "2025-04-10", 
    category: "Work" 
  },
  { 
    id: 2, 
    title: "Schedule team meeting", 
    description: "Set up the weekly review with the product team",
    completed: false, 
    priority: "medium",
    dueDate: "2025-04-08", 
    category: "Work" 
  },
  { 
    id: 3, 
    title: "Grocery shopping", 
    description: "Buy fruits, vegetables and other essentials",
    completed: true, 
    priority: "low",
    dueDate: "2025-04-07", 
    category: "Personal" 
  },
  { 
    id: 4, 
    title: "Read chapter 5", 
    description: "Complete reading assignment for the online course",
    completed: false, 
    priority: "medium",
    dueDate: "2025-04-12", 
    category: "Education" 
  },
  { 
    id: 5, 
    title: "Pay utility bills", 
    description: "Pay electricity and water bills online",
    completed: false, 
    priority: "high",
    dueDate: "2025-04-09", 
    category: "Personal" 
  },
];

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [filter, setFilter] = useState("all");

  const handleAddTask = () => {
    if (!newTaskTitle.trim()) return;
    
    const newTask: Task = {
      id: Date.now(),
      title: newTaskTitle,
      completed: false,
      priority: "medium",
      dueDate: new Date().toISOString().split("T")[0],
      category: "Personal",
    };
    
    setTasks([newTask, ...tasks]);
    setNewTaskTitle("");
  };

  const toggleTaskCompletion = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "all") return true;
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const getPriorityClass = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-700";
      case "medium": return "bg-yellow-100 text-yellow-700";
      case "low": return "bg-green-100 text-green-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <Layout>
      <div className="animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold">Tasks</h1>
          <div className="flex gap-2">
            <Input
              placeholder="Add a new task..."
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              className="w-full md:w-80"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleAddTask();
              }}
            />
            <Button onClick={handleAddTask}>Add Task</Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="mb-6">
          <TabsList>
            <TabsTrigger value="all" onClick={() => setFilter("all")}>All</TabsTrigger>
            <TabsTrigger value="active" onClick={() => setFilter("active")}>Active</TabsTrigger>
            <TabsTrigger value="completed" onClick={() => setFilter("completed")}>Completed</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="bg-white rounded-lg border shadow-sm divide-y">
          {filteredTasks.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-muted-foreground">No tasks found. Add a new task to get started!</p>
            </div>
          ) : (
            filteredTasks.map(task => (
              <div key={task.id} className="p-4 hover:bg-muted/20 transition-colors">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(task.id)}
                    className="h-5 w-5 rounded border-gray-300 mt-1 cursor-pointer"
                  />
                  <div className="flex-1">
                    <h3 className={`font-medium ${task.completed ? 'line-through opacity-70' : ''}`}>
                      {task.title}
                    </h3>
                    {task.description && (
                      <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
                    )}
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                        {task.category}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${getPriorityClass(task.priority)}`}>
                        {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                          <line x1="16" x2="16" y1="2" y2="6" />
                          <line x1="8" x2="8" y1="2" y2="6" />
                          <line x1="3" x2="21" y1="10" y2="10" />
                        </svg>
                        Due: {task.dueDate}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="p-1 hover:bg-muted rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                      </svg>
                    </button>
                    <button className="p-1 hover:bg-muted rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        <line x1="10" x2="10" y1="11" y2="17" />
                        <line x1="14" x2="14" y1="11" y2="17" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Tasks;
