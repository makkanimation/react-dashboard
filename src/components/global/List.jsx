import React from 'react';
import PropTypes from 'prop-types';

export default class List extends React.Component {
  constructor(props) {
    
	super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e){
    this.props.handleClickSubmit(e);
  }

  render() {
    return (
        <li onClick={this.handleClick}>
        {this.props.anchTag && <a href={this.props.anchUrl} >{this.props.value}</a>}
        {!this.props.anchTag && this.props.value}
        </li>
    );
  }
}

List.defaultProps = {
    anchTag:false,
};

List.propTypes = {
  value: PropTypes.number.isRequired,
  handleClickSubmit:PropTypes.func,
  anchTag:PropTypes.bool.isRequired,
  anchUrl:PropTypes.string,
}