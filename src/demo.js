import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { log, dom, extension } from '@Utils';
import { Provider } from '@Models';

const { addClass } = dom;

const mainF = () => {
  const pf = 'et';

  const R = () => {
    return <>Hello Demo</>;
  };

  if (true) {
    let div = document.createElement('div');
    addClass(`${pf}-demo-wrap`, div);

    document.body.appendChild(div);

    ReactDOM.render(
      <Provider>
        <R />
      </Provider>,
      div
    );
  }
};

try {
  mainF();
} catch (err) {
  console.log(`%cmainF catch%c: ${err}`, 'background: #fff; color:  #f49cec;', 'color: #149cec;', err);
}
