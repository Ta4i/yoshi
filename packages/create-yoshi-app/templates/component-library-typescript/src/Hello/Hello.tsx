import * as React from 'react';
import * as s from './Hello.scss';

const Hello: React.FunctionComponent<{ name: string }> = ({ name }) => (
  <div>
    Hello <span className={s.underline}>{name}!</span>
  </div>
);

export default Hello;
