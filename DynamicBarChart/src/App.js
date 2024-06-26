import { useEffect, useState, useMemo } from "react";
import { getData } from "./data";
// import Bar from "./Bar";

function Bar({ item, highestTicket }) {
  const height = (item.ticketCount / highestTicket) * 100;
  return (
    <div
      className="bar"
      style={{
        height: `${height}%`,
        "background-color": item.colour,
      }}
      title={`${item.name} (${item.ticketCount})`}
    ></div>
  );
}

export default function App() {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData();
        setData(response);
        setOriginalData(response);
      } catch (e) {
        console.error("Error fetch data:", error);
      }
    };

    fetchData();
  }, []);

  const getHighestTicketCount = useMemo(() => {
    const val = data?.reduce((acc, item) => {
      if (item.ticketCount > acc) {
        return item.ticketCount;
      }
      return acc;
    }, 0);
    return val;
  }, [data]);

  if (data.length === 0) {
    return;
  }

  const highestTicket = getHighestTicketCount;
  const handleSelectChange = (e) => {
    const newData = [...data];

    if (e.target.value === "ascending") {
      const sortedData = newData.sort(
        (item1, item2) => item1.ticketCount - item2.ticketCount
      );
      setData(sortedData);
    } else if (e.target.value === "descending") {
      const sortedData = newData.sort(
        (item1, item2) => item2.ticketCount - item1.ticketCount
      );
      setData(sortedData);
    } else {
      setData(originalData);
    }
  };

  return (
    <>
      <select name="Sort" id="sort" onChange={handleSelectChange}>
        <option value="default">Default</option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
      <div className="bar-container">
        {data.map((item) => {
          return (
            <Bar key={item.id} item={item} highestTicket={highestTicket} />
          );
        })}
      </div>
    </>
  );
}
