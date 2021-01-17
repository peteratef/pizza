import peproni from "../../images/peproni.jpg";
import margherita from "../../images/margherita.jpg";
import chicken from "../../images/chicken.jpg";
import hawaiian from "../../images/hawaiian.jpg";
import cheeselovers from "../../images/cheeselovers.jpg";
import chili from "../../images/chillii.jpg";
import stuffed from "../../images/stuffed.jpg";

import {
  CHANGE_FILTER,
  ADD_PIZZA,
  EDIT_PIZZA,
  DELETE_PIZZA,
  ON_INIT_FUNCTION,
} from "../actions/action-types/cart-actions";

const initState = {
  items: [
    {
      id: 1,
      activeDiscount: true,
      discount: 5,
      title: "pepperoni pizza",
      desc: "we just having nice pizza with peproni and cheese",
      price: 110,
      img: peproni,
      type: "main course",
    },
    {
      id: 2,
      activeDiscount: false,
      title: "margherita pizza",
      discount: 10,
      desc: "it's just a nomral pizza ",
      price: 80,
      img: margherita,
      type: "main course",
    },
    {
      id: 3,
      activeDiscount: true,
      discount: 10,
      title: "bbq chicken pizza",
      desc: "Nice Pizza with wonderfull grilled Chicken",
      price: 120,
      img: chicken,
      type: "side course",
    },
    {
      id: 4,
      activeDiscount: false,
      discount: 10,
      title: "hawaiian pizza",
      desc: "wooow, very delecious pizza with pinapples",
      price: 260,
      img: hawaiian,
      type: "side course",
    },
    {
      id: 5,
      activeDiscount: true,
      discount: 10,
      title: "cheese lovers pizza",
      desc: "enjoy more than 4 types of melted cheese in the same pizza",
      price: 160,
      img: cheeselovers,
      type: "side course",
    },
    {
      id: 6,
      activeDiscount: false,
      discount: 10,
      title: "sweet and chilli pizza",
      desc: "Sweet but spicy pizza, enjoy the multiple flavours in one pizza",
      price: 90,
      img: chili,
      type: "main course",
    },
    {
      id: 7,
      activeDiscount: false,
      discount: 10,
      title: "stuffed crust pizza",
      desc: "enjoy every bite of your pizza even its edges",
      price: 90,
      img: stuffed,
      type: "side course",
    },
  ],
  addedItems: [],
  fitlteredItems: [],
  total: 0,
};
const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ON_INIT_FUNCTION:
      return {
        ...state,
        items: state.items,
      };

    case CHANGE_FILTER:
      return {
        ...state,
        fitlteredItems: action.filteredProducts,
      };
    case ADD_PIZZA: {
      return {
        ...state,
        items: action.items,
      };
    }
    case EDIT_PIZZA: {
      return {
        ...state,
        items: action.items,
      };
    }
    case DELETE_PIZZA: {
      return { ...state, items: action.items };
    }

    default:
      return state;
  }
};

export default cartReducer;
