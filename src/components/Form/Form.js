import React, { Component } from "react";
import { connect } from "react-redux";

import "./Form.css";
import * as Actions from "../actions/pizzaActions";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      type: "",
      name: "",
      price: "",
      img: "",
      desc: "",
    };
    this.handelChange = this.handelChange.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
  }

  componentDidMount() {
    if (typeof this.props.match.params.id == "undefined") {
    } else {
      const editedId = this.props.match.params.id;
      let editableItem = this.props.items.find(
        (item) => item.id === parseInt(editedId)
      );

      this.setState({
        id: editedId,
        type: editableItem.type,
        name: editableItem.title,
        price: editableItem.price,
        img: editableItem.img,
        desc: editableItem.desc,
      });
    }
  }
  handleChangeImage(event) {
    this.setState({
      img: URL.createObjectURL(event.target.files[0]),
    });
  }
  handelChange(e) {
    let change = {};
    change[e.target.name] = e.target.value;

    this.setState(change);
  }
  render() {
    return (
      <div className="container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.state.id > 0
              ? this.props.editPizza(this.state)
              : this.props.addPizza(this.state);

            this.props.history.push("/");
          }}
        >
          <h3> {this.state.id > 0 ? "Edit Menu Item" : "Add Menu Item"}</h3>
          <center>
            <h6 style={{ color: "red" }}>{this.props.errorMessage}</h6>
          </center>

          <input type="hidden" name="id" value={this.state.id} />

          <div className="form-group">
            <div className="mainFormDiv">
              <div className="formTitle">
                <label>Type</label>
              </div>
              <div className="formInput">
                <select
                  name="type"
                  onChange={this.handelChange}
                  value={this.state.type}
                >
                  <option value="select_Department">Select Course Type</option>
                  <option value="main course">main course</option>
                  <option value="side course">side couse</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mainFormDiv">
            <div className="formTitle">
              <label>Name</label>
            </div>
            <div className="formInput">
              <input
                name="name"
                placeholder="pizza name"
                value={this.state.name}
                onChange={this.handelChange}
              />
            </div>
          </div>

          <div className="mainFormDiv">
            <div className="formTitle">
              <label>Price</label>
            </div>
            <div className="formInput">
              <input
                name="price"
                placeholder="Price"
                value={this.state.price}
                onChange={this.handelChange}
              />
            </div>
          </div>
          <div className="mainFormDiv">
            <div className="formTitle">
              <label>Description</label>
            </div>
            <div className="formInput">
              <input
                name="desc"
                placeholder="Description"
                value={this.state.desc}
                onChange={this.handelChange}
              />
            </div>
          </div>
          <div className="mainFormDiv">
            <div className="formTitle">
              <label>Photo</label>
            </div>
            <div className="formInput">
              <input type="file" onChange={this.handleChangeImage} />
              <img
                src={this.state.img}
                alt={this.state.img}
                width="200px;"
                style={{ marginTop: "10px" }}
              />
            </div>
          </div>

          <div className="mainFormDiv">
            <button type="submit" className="waves-effect waves-light btn">
              {this.state.id > 0 ? "Update Item" : "Save Item"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    //addedItems: state.addedItems
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPizza: (formValues) => {
      dispatch(Actions.addPizza(formValues));
    },
    editPizza: (formValues) => {
      dispatch(Actions.editPizza(formValues));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
