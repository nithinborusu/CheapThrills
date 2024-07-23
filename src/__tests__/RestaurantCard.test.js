
import { render,screen } from "@testing-library/react";
import RestroCard from "../components/RestroCard";
import MOCK_DATA from  "../mocks/resCardMock"

import "@testing-library/jest-dom"
it('should load Restaurant Card Component', ()=>{

    render(<RestroCard resData={MOCK_DATA}/>);
   

    const name = screen.getByText("Wow! Momo");

    expect(name).toBeInTheDocument();

})