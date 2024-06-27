import Rating from "./rating";
import { useState } from "react";

function App() {
  const [totalStars, setTotalStars] = useState(5);

  const debouncedSetTotalStars = (value) => {
    if (value < 1 || isNaN(value)) {
      setTotalStars(0);
    } else {
      setTotalStars(value);
    }
  };

  return (
    <div className="App">
      <div className="star-input">
        <label>Total number of Stars:</label>
        <input
          className="number-input"
          type="number"
          step={1}
          min={0}
          value={totalStars}
          onChange={(e) => {
            debouncedSetTotalStars(parseInt(e.target.value, 10));
          }}
        />
      </div>
      <Rating totalStars={totalStars} />
    </div>
  );
}

export default App;
