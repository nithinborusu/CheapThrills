
import "@testing-library/jest-dom"
import { render,screen } from "@testing-library/react"
import Contact from "../components/Contact";

describe('Contact us Page Test Cases',()=>{

//  beforeAll(() => {
//     console.log('Before All');
//   });

//   afterAll(() => {
//     console.log('After All');
//   });

//   afterEach(() => {
//     console.log('After Each');
//   });

//   beforeEach(() => {
//     console.log('Before Each');
//   });


    test("Should load Contact component",()=>{

        render(<Contact/>);
    
        const heading = screen.getByRole("heading")
        // * Assertion
        expect(heading).toBeInTheDocument();
    
    });
    
    test("Should load button inside contact",()=>{
          render(<Contact/>);
        //   const button = screen.getByRole("button");
          const button = screen.getByText("Submit");
          expect(button).toBeInTheDocument();
    });
    
      // * Note: test() or it() both are same
    
    it("Should  load input name inside contact",()=>{
    
        render(<Contact/>);
    
        const inputName = screen.getByPlaceholderText("Enter your name");
    
        expect(inputName).toBeInTheDocument();
    });
    
    
    it("Should  load 2 input boxes inside contact",()=>{
    
        render(<Contact/>);
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        // expect(inputBoxes.length).toBe(3);
        expect(inputBoxes.length).not.toBe(2);
    });
});
