"use client";

import Recipe from "@/interfaces/recipesInterface";

import "./instructionsModal.scss";

export default function InstructionsModal({
  toggleShow,
  showModal,
  recipe,
}: {
  showModal: boolean;
  toggleShow: () => void;
  recipe: Recipe;
}) {
  return (
    <div className={`modal ${showModal && "is-flex"}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head p-4 px-5">
          <p className="modal-card-title">Instructions</p>
          <button
            className="delete"
            aria-label="close"
            onClick={() => toggleShow()}
          ></button>
        </header>
        <section className="modal-card-body p-5">
          {recipe.instructions.map((instruction, index) => (
            <div className="ml-4 is-flex" key={index}>
              <p className="is-display-list-item is-size-7">{instruction}</p>
            </div>
          ))}
        </section>
        <footer className="modal-card-foot p-4 px-5 is-flex is-justify-content-flex-end border-top">
          <button
            className="button is-small is-danger is-color-white mx-1"
            onClick={() => toggleShow()}
          >
            Cancel
          </button>
          <button className="button is-small mx-1">Save changes</button>
        </footer>
      </div>
    </div>
  );
}
