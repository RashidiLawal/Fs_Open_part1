import React from 'react';
import StatisticLine from './StatisticLine';


const Statistics = (props) => {
   
   
  return <div>
          <StatisticLine text="good" value={props.good}/>
          <StatisticLine text="neutral" value={props.neutral}/>
          <StatisticLine text="bad" value={props.bad}/>
         
          <StatisticLine text="all" value={props.total}/>
          <StatisticLine text="average" value={props.average}/>
          <StatisticLine text="positive" value={props.positive}/>
         
          
           
         </div>;
};

export default Statistics;
