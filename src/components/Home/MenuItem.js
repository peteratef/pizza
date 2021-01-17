import React from "react";

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var { item } = this.props;

    return (
      <div className="card" key={item.id}>
        <div className="card-image">
          <img src={item.img} alt={item.title} />
        </div>

        <div className="card-content">
          <div className="card-details">
            <div className="card-dep">{item.type}</div>
            <div className="card-title">{item.title}</div>
          </div>
          <div className="card-price">{item.price}$</div>
          <div className="card-desc">{item.desc}</div>
        </div>
        <div className="editDelete">
          <div
            className="centerLeftRight"
            onClick={() => this.props.onEditItem(item.id)}
          >
            edit
          </div>
          <div
            className="centerLeftRight"
            onClick={() => this.props.onDeletePizza(item.id)}
            style={{ color: "red" }}
          >
            delete
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
