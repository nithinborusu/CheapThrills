
const Contact = ()=>{

    return (
        <div className="text-center my-10">

            <h1 className="text-3xl font-bold p-2 ">Welcome to the contact page</h1>
            <span className="text-xl p-2 text-slate-700">Feel free to ask any doubts in the form below</span>
            <form className=" bg-slate-500 w-6/12 mx-auto  my-4 p-8 border-2 border-black flex flex-col gap-5 justify-center items-center">
                
                <input className="appearance-none  border-2  rounded-lg p-2 leading-tight  focus:outline-none " type="text" placeholder="Enter your name"   required/>
                <input className="appearance-none p-2 rounded-lg border-2 leading-tight focus:outline-none" type="email" placeholder="Enter your email" required />
                <textarea className="p-4 rounded-lg border-2" placeholder="Type your message here....." />
                <button className="bg-black text-white  rounded-lg p-2 hover:cursor-pointer " type="submit">Submit</button>
            </form>
        </div>
        
    );
}

export default Contact;