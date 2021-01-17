import {
  ADD_PIZZA,
  DELETE_PIZZA,
  EDIT_PIZZA,
  CHANGE_FILTER,
  ON_INIT_FUNCTION,
} from "./action-types/pizza-actions";

//add cart action
export const initFunction = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: ON_INIT_FUNCTION,
    });
  };
};
export const changeFilter = (value, selectedValue) => {
  return async (dispatch, getState) => {
    const state = getState();
    let filteredProducts = [];

    if (value.length > 0 || selectedValue.length > 0) {
      filteredProducts = state.items.filter((each) => {
        if (selectedValue !== "select_Department") {
          return (
            each.title.includes(value) && each.type.includes(selectedValue)
          );
        } else {
          return each.title.includes(value);
        }
      });
    } else {
      filteredProducts = state.items;
    }

    dispatch({
      type: CHANGE_FILTER,
      filteredProducts,
    });
  };
};
/////////////delete item (pizza)///////
export const deletePizza = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    let new_items = state.items.filter((item) => id !== item.id);
    dispatch({
      type: DELETE_PIZZA,
      items: new_items,
    });
  };
};
////// edit pizza /////

export const editPizza = (formValues) => {
  return async (dispatch, getState) => {
    const state = getState();

    const index = state.items.findIndex(
      (item) => item.id === parseInt(formValues.id)
    );
    let items = [...state.items]; // important to create a copy, otherwise you'll modify state outside of setState call
    items[index] = {
      ...items[index],
      title: formValues.name,
      price: formValues.price,
      type: formValues.type,
      img: formValues.img,
      desc: formValues.desc,
    };
    dispatch({
      type: EDIT_PIZZA,
      items: items,
    });
  };
};
////// ADD Pizza /////
export const addPizza = (formValues) => {
  return async (dispatch, getState) => {
    const state = getState();
    let updatedItems = state.items;
    let addedItem = [
      {
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        activeDiscount: "",
        discount: 5,
        title: formValues["name"],
        desc: formValues["desc"],
        price: formValues["price"],
        img: formValues["img"],
        type: formValues["type"],
      },
    ];
    //check if the action id exists in the addedItems
    // updatedItems = state.items.concat(addedItem);
    updatedItems = addedItem.concat(state.items);
    dispatch({
      type: ADD_PIZZA,
      items: updatedItems,
    });
  };
};
