import NavigationList from "./navigationList";
import { useEffect, useState } from "react";
import { fetchData } from "./list";

export default function App() {
  const [data, setData] = useState([]);
  const [activeItem, setActiveItem] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const response = await fetchData();
        setData(response);
        setActiveItem(response[0].id);
      } catch (e) {
        console.log("No data");
      }
    })();
  }, []);

  const handleClick = (id) => {
    setActiveItem(id);
  };

  if (data.length === 0) {
    return null;
  }

  return (
    <div className="sidebar">
      <NavigationList
        items={data}
        activeItem={activeItem}
        onItemClick={handleClick}
      />
    </div>
  );
}
