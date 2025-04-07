
import { useState } from "react";
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Note {
  id: number;
  title: string;
  content: string;
  category: string;
  createdAt: string;
  isPinned: boolean;
}

const initialNotes: Note[] = [
  {
    id: 1,
    title: "Project Ideas",
    content: "Brainstorming session for the new client project. Key points:\n- Focus on mobile-first design\n- Incorporate user feedback from previous projects\n- Research competitors in the space",
    category: "Work",
    createdAt: "2025-04-01",
    isPinned: true,
  },
  {
    id: 2,
    title: "Meeting Notes",
    content: "Key points from the marketing team discussion:\n- Q2 campaign planning\n- Budget allocation\n- Social media strategy",
    category: "Work",
    createdAt: "2025-04-03",
    isPinned: false,
  },
  {
    id: 3,
    title: "Travel Plans",
    content: "Flight options and accommodation for summer vacation:\n- Check prices for June-July\n- Consider beach destinations\n- Make a list of activities",
    category: "Personal",
    createdAt: "2025-04-05",
    isPinned: true,
  },
  {
    id: 4,
    title: "Book Recommendations",
    content: "Books to read:\n- Atomic Habits by James Clear\n- Deep Work by Cal Newport\n- The Psychology of Money by Morgan Housel",
    category: "Education",
    createdAt: "2025-04-06",
    isPinned: false,
  },
  {
    id: 5,
    title: "Weekly Goals",
    content: "Goals for this week:\n- Finish project proposal\n- Schedule team meeting\n- Review quarterly results\n- Start learning React Native",
    category: "Personal",
    createdAt: "2025-04-07",
    isPinned: false,
  },
];

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [searchQuery, setSearchQuery] = useState("");

  const pinnedNotes = notes.filter(note => note.isPinned);
  
  const filteredNotes = notes
    .filter(note => !note.isPinned) // Not pinned
    .filter(note => 
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const togglePin = (noteId: number) => {
    setNotes(notes.map(note => 
      note.id === noteId ? { ...note, isPinned: !note.isPinned } : note
    ));
  };

  return (
    <Layout>
      <div className="animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold">Notes</h1>
          <div className="flex gap-2">
            <Input
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-80"
            />
            <Button>Create Note</Button>
          </div>
        </div>

        {pinnedNotes.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-3">Pinned Notes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pinnedNotes.map(note => (
                <div key={note.id} className="bg-white rounded-lg border shadow-sm p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{note.title}</h3>
                    <button 
                      onClick={() => togglePin(note.id)} 
                      className="text-yellow-500 hover:text-yellow-600"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3 whitespace-pre-line">
                    {note.content}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">
                      {note.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {note.createdAt}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          <h2 className="text-lg font-semibold mb-3">All Notes</h2>
          {filteredNotes.length === 0 ? (
            <div className="bg-white rounded-lg border shadow-sm p-8 text-center">
              <p className="text-muted-foreground">
                {searchQuery ? "No notes matching your search" : "No notes found. Create your first note!"}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredNotes.map(note => (
                <div key={note.id} className="bg-white rounded-lg border shadow-sm p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{note.title}</h3>
                    <button 
                      onClick={() => togglePin(note.id)} 
                      className="text-muted-foreground hover:text-yellow-500"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3 whitespace-pre-line">
                    {note.content}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">
                      {note.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {note.createdAt}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Notes;
