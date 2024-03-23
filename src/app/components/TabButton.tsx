import React from "react";

interface TabButtonProps {
  active: boolean;
  selectTab: any;
  children: React.ReactNode;
}

const TabButton = ({ active, selectTab, children }: TabButtonProps) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
