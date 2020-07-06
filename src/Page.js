import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchImages } from "./reducer";
import { LazyLoadImage } from 'react-lazy-load-image-component';


class Page extends PureComponent {
  // TODO: Intiiate fetching of image
  constructor(props) {
    super(props);
    this.props.images();
  }


  render() {
    return (
      <div>
        <h1>Images</h1>
        {/* TODO: Images should be rendered here */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {this.props.imageList.map((img, index) => (
            <LazyLoadImage
              key={index}
              alt={img}
              height={300}
              src={img}
              width={200} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  imageList: state
});

const mapDispatchToProps = dispatch => ({
  images: () => dispatch(fetchImages())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
