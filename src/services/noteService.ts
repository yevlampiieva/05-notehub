import axios from "axios";
import { Note } from "../types/note";

// const myKey = import.meta.env.VITE_NOTEHUB_TOKEN;

export interface fetchNotesResponse {
  notes: Note[];
  totalPages: number;
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

export function createNote() {}

export function deleteNote() {}
