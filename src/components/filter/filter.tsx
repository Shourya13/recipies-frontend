"use client";

import React, { useState, ChangeEvent } from "react";

import Recipe from "../../interfaces/recipesInterface";
import RecipeCard from "../../components/recipeCard/recipeCard";

import "./filter.scss";

export default function Filter({ recipes }: { recipes: Recipe[] }) {
  // State to hold checked values
  const [isChecked, setIsChecked] = useState<string[]>(["Easy", "Medium"]);

  // Handle checkbox changes
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;

    setIsChecked((prev) => {
      const newCheckedValues = event.target.checked
        ? [...prev, value] // Add to array if checked
        : prev.filter((item) => item !== value); // Remove if unchecked

      console.log(newCheckedValues);

      return newCheckedValues;
    });
  };

  return (
    <>
      <div className="is-flex is-justify-content-flex-end mb-3">
        <div className="difficulty-checkbox-wrapper is-flex is-align-items-center p-2 px-4">
          <p className="has-text-weight-bold is-size-6">Difficulty : </p>
          <div className="checkboxes">
            <label className="checkbox mx-1">
              <input
                className="mx-1"
                type="checkbox"
                value="Easy"
                onChange={handleCheckboxChange}
                checked={isChecked.includes("Easy")}
              />
              Easy
            </label>

            <label className="checkbox mx-1">
              <input
                className="mx-1"
                type="checkbox"
                value="Medium"
                onChange={handleCheckboxChange}
                checked={isChecked.includes("Medium")}
              />
              Medium
            </label>
          </div>
        </div>
      </div>

      <div className="columns is-gapless is-multiline">
        {recipes.map((recipe: Recipe, index: number) => {
          return (
            isChecked.includes(recipe.difficulty) && (
              <div className="column is-one-fifth" key={index}>
                <div className="m-3">
                  <RecipeCard recipe={recipe} />
                </div>
              </div>
            )
          );
        })}
      </div>
    </>
  );
}
