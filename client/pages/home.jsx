import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
    this.handleDrawer = this.handleDrawer.bind(this);
    this.handleDarkTab = this.handleDarkTab.bind(this);
    this.handleDarkTabColumn = this.handleDarkTabColumn.bind(this);
    this.homepageDrawerClose = this.homepageDrawerClose.bind(this);

  }

  componentDidMount() {
    fetch('/api/images')
      .then(res => res.json())
      .then(images => {
        this.setState({ images });
      });
  }

  handleDrawer(event) {
    this.props.onDrawerClick();
  }

  homepageDrawerClose(event) {
    if (this.props.isOpen === 'yes') {
      this.props.onDrawerClick();
    }
  }

  handleDarkTab() {
    if (this.props.isOpen === 'yes') { return 'open-tab'; }
    if (this.props.isOpen === 'no') { return ''; }
  }

  handleDarkTabColumn() {
    if (this.props.isOpen === 'yes') { return 'open-tab-column'; }
    if (this.props.isOpen === 'no') { return ''; }
  }

  render() {
    const darkTab = this.handleDarkTab();
    const darkTabColumn = this.handleDarkTabColumn();
    return (
      <>
      <div className="header my-row position-fixed width-100p">
        <div className="column-75 flex align-items-center space-between">
          <p className="home-logo">ERIN PENNY <a className="home-logo-designs">DESIGNS</a></p>
        </div>
        <div className={`column-25 flex align-items-center justify-content-right ${darkTabColumn}`}>
          <i className={`fas fa-align-justify home-tab ${darkTab}`} onClick={this.handleDrawer}></i>
        </div>
      </div>
      {
          <Carousel controls={false} indicators={false} fade>
            <Carousel.Item>
              {
                this.state.images.filter(images => images.homepage === true && images.photoId === 3)
                  .map(firstBackground => {
                    return (
                      <img key={firstBackground.photoId} src={firstBackground.url} className="background my-container" />
                    );
                  })
              }
            </Carousel.Item>
            <Carousel.Item>
              {
                this.state.images.filter(images => images.homepage === true && images.photoId !== 3)
                  .map(background => {
                    return (
                    <img key={background.photoId} src={background.url} className="background my-container" />
                    );
                  })
              }
            </Carousel.Item>
          </Carousel>
      }
      </>
    );
  }
}
