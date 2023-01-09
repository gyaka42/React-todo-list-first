import React, { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import Todo from "./components/Todo";
import List from "./Assets/List.gif";

function App() {
  const [yapilacaklar, setYapilacaklar] = useState([]);

  return (
    <div className="container">
      <h1 className="text-center my-5">Todo App</h1>
      <AddTodoForm
        yapilacaklar={yapilacaklar}
        setYapilacaklar={setYapilacaklar}
      />
      {yapilacaklar.length === 0 ? (
        <div className="d-flex flex-column align-items-center">
          <img className="w-50 h-50" src={List} />
          <p className="text-center fw-bold">
            Henuz Yapilacak bir isiniz yok !
          </p>
        </div>
      ) : (
        <div className="container my-5">
          {yapilacaklar.map((item, index) => (
            <Todo ket={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
