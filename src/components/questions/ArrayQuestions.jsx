import React, { useState } from 'react'
import { QuestionsContext } from '../../App'
import QueRequest from './QueRequest';
import ArrayQueRe from './QueRequest'




const ArrayQuestions = () => {
  
  return (
    <div>
      
        <QuestionsContext.Consumer>
          
            {(value) =>
              value?.map((val) => {
                return <QueRequest question={val} />;
              })
            }
          
        </QuestionsContext.Consumer>
      
    </div>
  );
}

export default ArrayQuestions