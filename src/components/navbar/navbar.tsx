"use client";

import Image from "next/image";

import logo from "../../assets/images/logo.jpg";

import "./navbar.scss";

export default function Navbar() {
  // const [isFlipped, setIsFlipped] = useState(false);
  // const [isAnimating, setIsAnimating] = useState(false);

  // const [showModal, setShowModal] = useState(false);

  // const handleFlip = () => {
  //   if (!isAnimating) {
  //     setIsFlipped(!isFlipped);
  //     setIsAnimating(true);
  //   }
  // };

  return (
    <nav className="navbar mb-2" role="navigation" aria-label="main navigation">
      <div className="navbar-brand p-2 px-4">
        <Image src={logo} height={50} width={100} alt="logo" />
      </div>
    </nav>
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
