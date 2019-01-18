import React from 'react';
import { withNamespaces, WithNamespaces } from 'react-i18next';
import * as s from './App.scss';

interface IAppProps extends WithNamespaces {}

class App extends React.Component<IAppProps> {
  render() {
    const { t } = this.props;
    return (
      <div className={s.root}>
        <div className={s.header}>
          <h2 data-hook="app-title">{t('app.title')}</h2>
        </div>
        <p className={s.intro}>{t('app.intro')}</p>
      </div>
    );
  }
}

export default withNamespaces(undefined, { wait: true })(App);
