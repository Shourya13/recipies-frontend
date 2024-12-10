"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Recipe from "../../interfaces/recipesInterface";

import Modal from "../modal/modal";

import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import FastfoodIcon from "@mui/icons-material/Fastfood";

import "./recipeCard.scss";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleFlip = () => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  };

  return (
    recipe && (
      <>
        <div
          className={`recipe-card card is-flex is-flex-direction-column flip-card`}
          onClick={handleFlip}
        >
          <motion.div
            className="flip-card-inner"
            initial={false}
            animate={{
              rotateY: isFlipped ? 180 : 360,
            }}
            transition={{
              duration: 0.6,
              animationDirection: "normal",
            }}
            onAnimationComplete={() => setIsAnimating(false)}
          >
            <div className="flip-card-front is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
              <div className="rating-container is-flex is-align-items-center is-justify-content-center m-2 p-1">
                <StarBorderRoundedIcon className="rating-icon is-size-5 has-text-weight-bold" />
                <p className="is-size-7 is-color-white mx-1">{recipe.rating}</p>
              </div>

              <p className="difficulty is-size-7 m-2 p-1 px-2">
                {recipe.difficulty}
              </p>

              <Image
                className="img"
                src={recipe.image}
                width={200}
                height={110}
                alt="Picture of the author"
              />

              <div className="timings-wrapper is-flex is-justify-content-space-evenly is-align-items-center">
                <div className="timings-container is-flex is-flex-direction-column is-align-items-center is-justify-content-center m-1">
                  <AccessTimeIcon className="prep-icon is-size-5 has-text-weight-bold" />
                  <p className="is-size-7 mx-1">
                    {recipe.prepTimeMinutes + " mins"}
                  </p>
                </div>
                <div className="timings-container is-flex is-flex-direction-column is-align-items-center is-justify-content-center m-1">
                  <WhatshotIcon className="prep-icon is-size-5 has-text-weight-bold" />
                  <p className="is-size-7 mx-1">
                    {recipe.cookTimeMinutes + " mins"}
                  </p>
                </div>
                <div className="timings-container is-flex is-flex-direction-column is-align-items-center is-justify-content-center m-1">
                  <FastfoodIcon className="prep-icon is-size-5 has-text-weight-bold" />
                  <p className="is-size-7 mx-1">
                    {recipe.servings + " people"}
                  </p>
                </div>
              </div>

              <div className="content-container is-flex is-flex-direction-column is-align-items-center p-4">
                <p className="title is-size-6 name mb-2">{recipe.name}</p>

                <span className="hr-line"></span>
                <p className="ingredient-title is-size-6 mb-2 px-2">
                  Ingredients
                </p>

                <div className="columns is-gapless is-multiline">
                  {recipe.ingredients.map((ingredient, index) => (
                    <div className="column is-6" key={index}>
                      <div className="ml-2">
                        <p className="ingredient-list-item is-size-7">
                          {ingredient}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="button is-small nutrition-value-btn"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowModal(true);
                }}
              >
                Nutritional Value
              </button>
            </div>
            <div className="flip-card-back">
              <div className="p-4">
                <p className="title is-size-6 mb-2">Instructions</p>
                {recipe.instructions.map((instruction, index) => (
                  <div className="ml-4 is-flex" key={index}>
                    <p className="is-display-list-item is-size-7">
                      {instruction}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <Modal
          toggleShow={() => setShowModal(!showModal)}
          showModal={showModal}
        />
      </>
    )
  );
}

{
  /* <Image
            className="img"
            src={recipe.image}
            width={200}
            height={110}
            alt="Picture of the author"
          />
          <div className="p-2">
            <h2 className="title is-size-6 name">{recipe.name}</h2>
          </div> */
}

// <div className="recipe-card card columns is-gapless">
//         <div className="column is-quarter">
//           <Image
//             className="img"
//             src={recipe.image}
//             width={200}
//             height={110}
//             alt="Picture of the author"
//           />
//         </div>
//         <div className="column">
//           <div>
//             <h2 className="title is-size-5">{recipe.name}</h2>
//           </div>
//         </div>
//       </div>
