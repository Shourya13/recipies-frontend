"use client";

import data from "../../assets/nutritionData.json";

import "./modal.scss";

export default function Modal({
  toggleShow,
  showModal,
}: {
  showModal: boolean;
  toggleShow: () => void;
}) {
  return (
    <div className={`modal ${showModal && "is-flex"}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head p-4 px-5">
          <p className="modal-card-title">Nutrition Information</p>
          <button
            className="delete"
            aria-label="close"
            onClick={() => toggleShow()}
          ></button>
        </header>
        <section className="modal-card-body p-2 px-5">
          <div className="nutrition-table-wrapper">
            <table border={1} cellPadding="10" className="table is-striped">
              <tbody>
                <tr className="is-size-6 has-text-weight-bold">
                  <th className="no-border">Display macronutrients</th>
                </tr>
                <tr className="table-row">
                  <th className="is-size-7 has-font-weight-bold">
                    Nutrition Name
                  </th>
                  <th className="is-size-7 has-font-weight-bold">
                    Required Value
                  </th>
                  <th className="is-size-7 has-font-weight-bold">
                    Actual Value
                  </th>
                </tr>
                {Object.entries(data.macronutrients).map(([key, value]) => (
                  <tr key={key}>
                    <td className="is-size-7">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </td>
                    <td className="is-size-7">
                      {value.daily_requirement} {value.unit}
                    </td>
                    <td className="is-size-7">
                      {value.value} {value.unit}
                    </td>
                  </tr>
                ))}

                <tr className="is-size-6 has-text-weight-bold my-2">
                  <th className="no-border pt-4">Display micronutrients</th>
                </tr>
                <tr className="table-row">
                  <th className="is-size-7 has-font-weight-bold">
                    Nutrition Name
                  </th>
                  <th className="is-size-7 has-font-weight-bold">
                    Required Value
                  </th>
                  <th className="is-size-7 has-font-weight-bold">
                    Actual Value
                  </th>
                </tr>
                {Object.entries(data.micronutrients).map(([key, value]) => (
                  <tr key={key}>
                    <td className="is-size-7">
                      {key.replace("_", " ").toUpperCase()}
                    </td>
                    <td className="is-size-7">
                      {value.daily_requirement} {value.unit}
                    </td>
                    <td className="is-size-7">
                      {value.value} {value.unit}
                    </td>
                  </tr>
                ))}

                <tr className="is-size-6 has-text-weight-bold my-2">
                  <th className="no-border pt-4">Display total calories</th>
                </tr>
                <tr className="table-row">
                  <th className="is-size-7 has-font-weight-bold">
                    Nutrition Name
                  </th>
                  <th className="is-size-7 has-font-weight-bold">
                    Required Value
                  </th>
                  <th className="is-size-7 has-font-weight-bold">
                    Actual Value
                  </th>
                </tr>
                <tr>
                  <td className="is-size-7">Calories</td>
                  <td className="is-size-7">
                    {data.daily_calories_requirement} kcal
                  </td>
                  <td className="is-size-7">{data.total_calories} kcal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <footer className="modal-card-foot p-4 px-5 is-flex is-justify-content-flex-end border-top">
          <button
            className="button is-small is-danger mx-1"
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
