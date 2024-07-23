import { fireEvent, render,screen } from "@testing-library/react";
import Header from "../components/Header";
import appStore from "../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "@testing-library/jest-dom"

it("Should load header Component with login button",()=>{
    render(

    <BrowserRouter>
     <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
);
 
const LoginButton = screen.getByRole("button");

expect(LoginButton).toBeInTheDocument();
      
});

it("Should load header Component with Cart",()=>{
    render(

    <BrowserRouter>
     <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
);
 
const  Cart = screen.getByText(/Cart/);

expect(Cart).toBeInTheDocument();
      
});


it("Should change to Logout when clicked login button ",()=>{
    render(

    <BrowserRouter>
     <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
);
 
const LoginButton = screen.getByRole("button");

 fireEvent.click(LoginButton);

 const LogoutButton = screen.getByRole("button");

expect(LogoutButton).toBeInTheDocument();
      
});
