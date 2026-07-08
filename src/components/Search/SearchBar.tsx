// SearchBar bekommt den Suchbegriff und eine Funktion zum Ändern
type SearchBarProps = {
  searchQuery: string;
  onSearchChange: (query: string) => void;
};

export default function SearchBar({ searchQuery, onSearchChange }: SearchBarProps) {
  return (
    <div>
      <input
        type="text"
        // der aktuelle Suchbegriff kommt von Dashboard.tsx
        value={searchQuery}
        // bei jedem Tastendruck wird onSearchChange aufgerufen
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Habit suchen..."
      />
    </div>
  );
}