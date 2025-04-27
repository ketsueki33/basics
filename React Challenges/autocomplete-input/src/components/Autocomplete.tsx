import { useEffect, useState } from "react"

interface User {
  id: Number;
  firstName: String;
  lastName: String;
}

interface Data {
  users: User[];
}

const Autocomplete = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const showSuggestions = search !== "" && suggestions.length != 0;

  const fetchSuggestions = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(`https://dummyjson.com/users/search?q=${search}`)
      const result: Data = await data.json();

      const temp = result.users.slice(0, 15);
      setSuggestions(temp);
    }
    catch (e) {
      console.error(e)
    }
    finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!search)
      return;
    fetchSuggestions();
  }, [search])

  return (
    <div className="relative">
      <div className="flex gap-5">
        <input value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="text-black rounded-lg" placeholder="Search..." />
        <button
          onClick={() => setSearch("")}
          className="rounded-lg bg-blue-400/70 px-4 hover:bg-blue-600">Clear</button>
      </div>
      {
        showSuggestions &&
        <div className="bg-blue-100 text-black absolute w-[150%] top-full mt-5 left-1/2 -translate-x-1/2 rounded-lg p-2">
          {
            isLoading ? "Loading..." : suggestions.map((item) => (
              <p className="p-2 hover:bg-blue-300 cursor-pointer rounded-md" key={item.id.toString()}
                onClick={() => setSearch(item.firstName + " " + item.lastName)}
              >
                {item.firstName + " " + item.lastName}
              </p>
            ))
          }
        </div>
      }
    </div>
  )
}

export default Autocomplete
