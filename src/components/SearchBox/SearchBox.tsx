import css from "./SearchBox.module.css";

interface SearchBoxProps {
  value: string;
  onSearch: (newQuery: string) => void;
}

export default function SearchBox({ value, onSearch }: SearchBoxProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => onSearch(event.target.value);

  return (
    <input
      defaultValue={value}
      onChange={handleChange}
      className={css.input}
      type="text"
      placeholder="Search notes"
    />
  );
}
