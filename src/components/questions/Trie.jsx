import React from 'react'
import { QuestionsContext, functionContext } from '../../App';
import QueRequest from './QueRequest';

const Trie = () => {
  return (
    <div>
      <functionContext.Consumer>
        {(value2) => (
          <QuestionsContext.Consumer>
            {(value) =>
              value?.map((val) => {
                return <QueRequest question={val} getKeyAndUpdate={value2} />;
              })
            }
          </QuestionsContext.Consumer>
        )}
      </functionContext.Consumer>
    </div>
  );
}

export default Trie