import React from 'react';

export class Footer extends React.Component {
  render() {
    return (
      <footer className="main-footer">
        <div className="pull-right hidden-xs">
          <b>Version</b> 0.0.1
        </div>
        <strong>Made by <a href="http://www.javiersl.com">JavierSL</a>.</strong>
      </footer>
    );
  }
}
