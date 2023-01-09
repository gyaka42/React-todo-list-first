import React, { useState } from "react";

const AddTodoForm = ({ yapilacaklar, setYapilacaklar }) => {
  const [yapilacakText, setYapilacakText] = useState("");

  const formuDenetle = (event) => {
    event.preventDefault();
    /* validation */
    if (yapilacakText === "") {
      alert("Bos kayit yapilamaz");
      return;
    }
    const newTodo = {
      id: String(new Date().getTime()),
      text: yapilacakText,
      date: new Date(),
      yapildimi: false,
    };
    setYapilacaklar([...yapilacaklar, newTodo]);
    setYapilacakText("");
  };
  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={formuDenetle} className="w-75">
        <div className="input-group mb-3">
          <input
            id="textCap"
            type="text"
            className="form-control"
            placeholder="Yapilacaklari yazin..."
            value={yapilacakText}
            onChange={(event) =>
              setYapilacakText(
                event.target.value.charAt(0).toUpperCase() +
                  event.target.value.slice(1)
              )
            }
          />
          <button className="btn btn-primary" type="submit">
            Ekle
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodoForm;
