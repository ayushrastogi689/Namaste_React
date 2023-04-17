import React from "react";
import ReactDOM from "react-dom";

// App Layout
// 1. Header
   // 1.1 Logo
   // 1.2 Navbar
      // 1.2.1 Navbar Items : 
      // 1.2.2 Cart
   // 1.3 
   // 1.4   


// 2. Body
   // 2.1 Search bar
   // 2.2 Resturant List
      // 2.2.1 Resturant Card
         // 2.2.1.1 Image
         // 2.2.1.2 Name
         // 2.2.1.3 Rating
         // 2.2.1.4 Cusines
   // 2.3
   // 2.4


// 3. Footer
   // 3.1 Links
   // 3.2 Copyrights
   // 3.3
   // 3.4
   // 3.5


const Title = () => (
    <h2 id="title" key="h2">
        FoodBites
    </h2>
);

const HeaderComponent = () => {
    return(
        <div>
            <Title />
            <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
            </div>
        </div>
    );
};










const creatingRoot = ReactDOM.createRoot(document.getElementById("root"));

creatingRoot.render(<HeaderComponent />);