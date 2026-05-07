const badgeStyles = {
  "Best Seller": "bg-[#FEF3C6] text-[#DCA063]",
  "Popular": "bg-[#E1E7FF] text-[#C398FC]",
  "New": "bg-[#DBFCE7] text-[#0A883E]"
};

const Badge = ({ name }) => {
    
  const style = badgeStyles[name] || badgeStyles["Best Seller"]; 
  
  return (
    <div className={`badge font-medium ${style}`}>
      {name}
    </div>
  );
};

export default Badge;