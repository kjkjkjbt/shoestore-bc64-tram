import React, { Component } from 'react';

export default class CartDetail extends Component {
  render() {
    //
    let { shoe, handleXemChiTiet } = this.props;
    return (
      <div className="card">
        <img
          className="card-img-top"
          height={300}
          src={shoe.hinhAnh}
          alt="Title"
        />
        <div className="card-body">
          <h4 className="card-title">{shoe.tenSP}</h4>
          <button
            onClick={() => {
              handleXemChiTiet(shoe);
            }}
            className="btn btn-success "
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
