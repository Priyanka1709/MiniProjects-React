import { FaCaretRight, FaCaretDown, FaCircle } from "react-icons/fa";
import { useState, useEffect } from "react";

const MenuItem = ({ item, activeItem, onItemClick }) => {
  const [isExpanded, setIsExpnaded] = useState(false);
  const isActive = activeItem === item.id;

  useEffect(() => {
    if (isActive) {
      setIsExpnaded(true);
    } else {
      setIsExpnaded(false);
    }
  }, [isActive]);

  const handleClick = () => {
    setIsExpnaded((isExpanded) => !isExpanded);
  };
  const handleKeyUp = (e) => {
    e.stopPropagation();
    if (e.which === 13) {
      setIsExpnaded((isExpanded) => !isExpanded);
    }
  };

  const itemLabel = (
    <li tabindex={-1} onKeyUp={handleKeyUp}>
      <a href="#">{item.name}</a>
    </li>
  );
  const handleItemClick = (e) => {
    onItemClick(item.id);
    e.stopPropagation();
  };

  return (
    <div onClick={handleItemClick}>
      {item.children ? (
        <>
          <div className={`menu-item ${isActive ? "active" : ""}`}>
            <div onClick={handleClick}>
              {isExpanded ? <FaCaretDown /> : <FaCaretRight />}
            </div>
            {itemLabel}
          </div>
          {isExpanded && (
            <NavigationList
              items={item.children}
              activeItem={activeItem}
              onItemClick={onItemClick}
            />
          )}
        </>
      ) : (
        <div className={`menu-item ${isActive ? "active" : ""}`}>
          <div className="circle-icon">
            <FaCircle />
          </div>
          {itemLabel}
        </div>
      )}
    </div>
  );
};

const NavigationList = ({ items, activeItem, onItemClick }) => {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <MenuItem
            key={item.id}
            item={item}
            activeItem={activeItem}
            onItemClick={onItemClick}
          />
        );
      })}
    </ul>
  );
};

export default NavigationList;
