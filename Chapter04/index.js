import React from "react";
import ReactDOM from "react-dom/client";

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
        <div className="header">
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

const Body = () => {
    return(
        <h2>Body</h2>
    );
};

const Footer = () => {
    return(
        <h2>Footer</h2>
    );
};

// As JSX expression can have only one parent, and we dont want multiple extra <div>s in our code therefore
// React.Fragement is a component which is exported by React. So that we don't have to use multiple <div>s
// It is similar to an empty tag
// <React.Fragement></React.Fragement> and <></> is one and the same thing.

const AppLayout = () => {
    return (
        <>
            <HeaderComponent />
            <Body />
            <Footer />
        </>
    )
}






const creatingRoot = ReactDOM.createRoot(document.getElementById("root"));

creatingRoot.render(<AppLayout />);