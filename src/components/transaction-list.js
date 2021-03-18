const TransactionList = ({ trans }) => {
  const { id, category, name, date, amount, payment, term } = trans;
  return (
    <div className="lists">
      <div className="list-section-head">
        <div className="icon">{category}</div>
        <div className="head">
          <div className="list-title">
            <h4>{name}</h4>
          </div>
          <div className="date">{date}</div>
        </div>
      </div>
      <div className="list-amount">${amount}</div>
    </div>
  );
};

export default TransactionList;
