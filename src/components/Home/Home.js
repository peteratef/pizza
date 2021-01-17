import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions/pizzaActions";
import Pagination from "../Pagination/Pagination";
import MenuItem from "./MenuItem";
import "./Home.css";
class Home extends Component {
  constructor(props) {
    super(props);
    var exampleItems = this.props.items;

    this.state = {
      inputValue: "",
      depSelectedValue: "select_Department",
      exampleItems: exampleItems,
      pageOfItems: [],
    };
    this.onChangePage = this.onChangePage.bind(this);
  }
  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }
  componentDidMount() {
    this.props.onInitFunction("");
  }

  handleDepChange = (value) => {
    let inputValuee = value.target.value;
    this.setState({ depSelectedValue: inputValuee });

    this.props.onChangeFilter(this.state.inputValue, inputValuee);
  };
  handleInputChange = (value) => {
    let inputValueq = value.target.value;
    this.setState({ inputValue: inputValueq });

    this.props.onChangeFilter(inputValueq, this.state.depSelectedValue);
  };
  render() {
    let itemList = this.state.pageOfItems.map((item) => {
      return (
        <MenuItem
          key={item.id}
          item={item}
          onDeletePizza={(id) => {
            this.props.deletePizza(id);
          }}
          onEditItem={(id) => {
            // this.props.editItem(id);
            this.props.history.push(`/cart/edit/${id}`);
          }}
        />
      );
    });

    return (
      <div className="container">
        <div className="search">
          <div className="searchFor">
            <input
              className="input_field"
              type="text"
              placeholder="search For Pizza"
              onChange={this.handleInputChange}
              value={this.state.inputValue}
            />
          </div>
          <div>
            <select
              className="input_field"
              onChange={this.handleDepChange}
              value={this.state.depSelectedValue}
            >
              <option value="select_Department">Select Course Type</option>
              <option value="main course">Main Course</option>
              <option value="side course">Side Couse</option>
            </select>
          </div>
        </div>
        <h3 className="center">Menu Items</h3>

        <div className="box">{itemList}</div>
        <center>
          <div className="text-center">
            <Pagination
              items={
                this.state.inputValue.length > 0 ||
                this.state.depSelectedValue !== "select_Department"
                  ? this.props.fitlteredItems
                  : this.props.items
              }
              onChangePage={this.onChangePage}
            />
          </div>
        </center>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
    fitlteredItems: state.fitlteredItems,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onInitFunction: (mainObject) => dispatch(actions.initFunction(mainObject)),
    deletePizza: (id) => {
      dispatch(actions.deletePizza(id));
    },
    onChangeFilter: (inputValue, selectedValue) =>
      dispatch(actions.changeFilter(inputValue, selectedValue)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
