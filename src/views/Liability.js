import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/pro-light-svg-icons";

import TransactionList from "../components/transaction-list";

const Liability = () => {
  const test = [
    {
      id: 1,
      category: "Home",
      name: "Chase Mortgage",
      date: "June 20 2015",
      amount: 235698.0,
      payment: 1200.5,
      term: 30,
    },
    {
      id: 2,
      category: "Auto",
      name: "Chase",
      date: "April 20 2019",
      amount: 35035.0,
      payment: 350.0,
      term: 3,
    },
  ];

  const [trans, setTrans] = useState(test);

  return (
    <div className="page">
      <div className="page-grid">
        <div className="main">
          <div className="sub-header">
            {/* Refactor to component*/}
            <div className="page-title">
              <h2>liabilties</h2>
            </div>
            {/* Refactor to component*/}
            <div className="btn-circle">
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
          {/* Refactor to component*/}
          <div className="search">
            <input type="text" placeholder="Search" />
          </div>
          <div className="sub-header">
            {/* Refactor to component*/}
            <div className="info">
              <div className="small-title">Total Liability</div>
              <div className="money">$12365.56</div>
            </div>
            <div className="info">
              <div className="small-title">Monthly Payments</div>
              <div className="money">$1569.36</div>
            </div>
          </div>
          <hr />
          {trans.map((trans) => (
            <TransactionList trans={trans} key={trans.id} />
          ))}
        </div>
        {/* Side Bar*/}
        <div className="sidebar">Reports</div>
      </div>
    </div>
  );
};

export default Liability;
