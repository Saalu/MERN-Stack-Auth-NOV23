
const Home = () => {
  return (
    <main className="p-4 w-full h-screen bg-blue-200 flex justify-center items-center ">
    {/* <main className="flex w-full h-screen"> */}
    {/* --------Container--------- */}
    <div className="h-[400px] w-[600px]  bg-slate-100 shadow-md rounded-md">
{/* ----------Flex Items-------------- */}
  <div className="flex  justify-between p-4">
  <div className="left">
      <div className="profile-image w-[280px] h-[230px] rounded-md bg-blue-200 border  border-blue-500">
      <img className=""  src="visa.jpg" alt="" />
      </div>
    </div>
    <div className="right w-[280px] h-[250px]  border-gray-400">
      <div className="form">
        <h1 className="font-medium mb-4 text-slate-700">Quick Employee Base</h1>
        <form action="" className="flex flex-col">
          <input  type="text" name="" placeholder="Joe Ghartey"  className="my-2 p-1 rounded-md border-[.05px] border-slate-400"/>
          <input  type="text" name="" placeholder="email@example.com"  className="my-2 p-1 rounded-md border-[.05px] border-slate-400"/>
          <input  type="text" name="" placeholder="Story..."  className="my-2 p-1 rounded-md border-[.05px] border-slate-400"/>
          <button className="font-medium bg-red-500  hover:bg-red-600 w-[50%] text-slate-50 my-2 p-1 rounded-md">Save</button>
        </form>
      </div>
    </div>
  </div>
{/* ---------Footer----------- */}
    <div className="footer p-4 flex justify-between">
      <div className="item-1 flex items-center">
        <div className="icon pr-4  text-3xl font-medium text-green-400">W</div>
        <div className="desc">
        <h2 className="title font-medium text-slate-700">W-Title</h2>
         <p className="text-sm text-slate-400">Lolor sit amet is<br></br>fosoe con adipis.</p>
        </div>
      </div>
      <div className="item-1 flex items-center">
        <div className="icon pr-4  text-3xl font-medium text-green-400">M</div>
        <div className="desc">
        <h2 className="title font-medium text-slate-700">M-Title</h2>
         <p className="text-sm text-slate-400">Lolor sit amet is<br></br>fosoe con adipis.</p>
        </div>
      </div>
     
      <div className="item-1 flex items-center">
        <div className="icon pr-4  text-3xl font-medium text-green-400">X</div>
        <div className="desc">
        <h2 className="title font-medium text-slate-700">X-Title</h2>
         <p className="text-sm text-slate-400">Lolor sit amet is<br></br>fosoe con adipis.</p>
        </div>
      </div>
     
    </div>
   
   
    </div>
    </main>
  )
}

export default Home
