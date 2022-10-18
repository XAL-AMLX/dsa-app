import React from 'react'
import { QuestionsContext } from '../../App';
import QueRequest from './QueRequest';

const BMan = () => {
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

export default BMan