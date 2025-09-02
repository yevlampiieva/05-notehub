import axios from "axios";
import { Note, NoteId } from "../types/note";

interface fetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

interface newNote {
  title: string;
  content?: string;
  tag: "Work" | "Personal" | "Meeting" | "Shopping" | "Todo";
}

export const fetchNotes = async (query: string, page: number): Promise<fetchNotesResponse> => {
  const response = await axios.get<fetchNotesResponse>(
    `https://notehub-public.goit.study/api/notes`,
    {
      params: {
        search: query,
        page,
        perPage: 12,
      },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
      },
    }
  );
  return response.data;
};

export const createNote = async (newNote: newNote): Promise<Note> => {
  const response = await axios.post<Note>(`https://notehub-public.goit.study/api/notes`, newNote, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
    },
  });
  return response.data;
};

export const deleteNote = async (noteId: NoteId): Promise<Note> => {
  const response = await axios.delete<Note>(
    `https://notehub-public.goit.study/api/notes/${noteId}`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
      },
    }
  );
  return response.data;
};
