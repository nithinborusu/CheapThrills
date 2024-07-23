
import { sum } from "../components/sum";

test("Sum function should calculate sum of two numbers",()=>{

    const result = sum(60,9);
   

    expect(result).toBe(69)


   
});
