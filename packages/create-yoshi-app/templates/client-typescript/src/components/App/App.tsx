import React from 'react';
import { withNamespaces, WithNamespaces } from 'react-i18next';
import * as s from './App.scss';

interface AppProps extends WithNamespaces {}

class App extends React.Component<AppProps> {
  render() {
    const { t } = this.props;

    return (
      <div className={s.root}>
        <div className={s.header}>
          <h2>{t('app.title')}</h2>
        </div>
        <p className={s.intro}>{t('app.intro')}</p>
      </div>
    );
  }
}

export default withNamespaces()(App);
