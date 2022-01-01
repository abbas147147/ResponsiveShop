import React, { useReducer, createContext } from "react";

const initialState = {
  selectItems: [],
  itemCounter: 0,
  total: 0,
  checkout: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      if (!state.selectItems.find((item) => item.id === action.payload.id)) {
        state.selectItems.push({
          ...action.payload,
          quantity: 1,
        });
        return {
          ...state,
          selectItems: [...state.selectItems],
          checkout: false,
        };
      }
      break;
    case "REMOVE":
      const newSelectItems = state.selectItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectItems: [...newSelectItems],
      };
    case "INCREASE":
      const indexI = state.selectItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectItems[indexI].quantity++;
      return {
        ...state,
      };
    case "DECREASE":
      const inedxD = state.selectItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectItems[inedxD].quantity--;
      return {
        ...state,
      };
    case "CLEAR":
      return {
        selectItems: [],
        itemCounter: 0,
        total: 0,
        checkout: false,
      };
    case "CHECKOUT":
      return {
        selectItems: [],
        itemCounter: 0,
        total: 0,
        checkout: true,
      };
    default:
      return state;
  }
};
export const CounterContext = createContext();

const CountContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <CounterContext.Provider value={{ state, dispatch }}>
        {children}
      </CounterContext.Provider>
    </div>
  );
};

export default CountContextProvider;
