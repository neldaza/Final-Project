import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: 'no' };
    this.renderDrawer = this.renderDrawer.bind(this);
    this.handleDrawer = this.handleDrawer.bind(this);

  }

  handleDrawer(event) {
    this.props.onDrawerClick();
  }

  renderDrawer() {
    if (this.props.isOpen === 'no') { return ''; }
    if (this.props.isOpen === 'yes') { return 'tab-out'; }
  }

  render() {
    const open = this.renderDrawer();
    return (
        <div className="my-container">
          <div className={`my-row tab ${open}`}>
            <div className="column-full drawer-text-top">
              <p className="index-p"><a>LOGIN</a></p>
              <p className="index-p"><a>ABOUT</a></p>
              <p className="index-p"><a>CONTACT</a></p>
              <p className="index-p"><a href="#projects" onClick={this.handleDrawer}>PROJECTS</a></p>
              <p className="index-p"><a>REVIEWS</a></p>
              <p className="index-p"><a href="#register" onClick={this.handleDrawer}>REGISTER</a></p>
            </div>
          </div>
        </div>
    );
  }
}
