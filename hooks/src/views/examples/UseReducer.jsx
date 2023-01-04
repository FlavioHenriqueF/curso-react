import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";

import { initialState, reducer } from "../../store";

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem Usuário</span>
        )}

        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => dispatch({ type: "login", payload: "Maria" })}
          >
            Login
          </button>
          <button
            className="btn"
            onClick={() =>
              dispatch({ type: "number_action", payload: state.number + 2 })
            }
          >
            +2
          </button>
          <button
            className="btn"
            onClick={() =>
              dispatch({ type: "number_action", payload: state.number * 7 })
            }
          >
            x7
          </button>
          <button
            className="btn"
            onClick={() =>
              dispatch({
                type: "number_action",
                payload: state.number / 25,
              })
            }
          >
            / 25
          </button>
          <button
            className="btn"
            onClick={() =>
              dispatch({
                type: "number_action",
                payload: parseInt(state.number),
              })
            }
          >
            Int
          </button>
        </div>
        <input
          className="input"
          type="number"
          value={state.number}
          onChange={(e) => dispatch({ type: "addN", payload: e.target.value })}
        />
      </div>
    </div>
  );
};

export default UseReducer;
