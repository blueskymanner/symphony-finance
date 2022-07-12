import React, {useEffect, useState} from "react";
import '../Style/style.css';
import FundData from './fundData.js';
import FundHoldings from './fundHoldings.js';


function Table() {
  return (
    <> 
      <div className="total-body">
        <FundData />
        <FundHoldings />
      </div>
    </>
  );
}

export default Table;
