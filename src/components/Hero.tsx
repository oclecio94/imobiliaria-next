import React from "react";

const Hero = () => {
  return (
    <div className="">
      <nav className="flex justify-between items-center py-5">
        <h1 className="text-xl md:text-2xl font-bold">Logo</h1>
        <ul className="flex items-center space-x-5 text-xs md:text-base">
          {/* <li>Features</li>
          <li>Trending</li>
          <li>About</li> */}
        </ul>
        <button className="bg-yellow-400 px-5 py-2 rounded-xl text-xs md:text-base">
          Contato
        </button>
      </nav>
      <div className="h-[500px] relative">
        <img
          src="/image6.jpg"
          alt=""
          className="w-full h-full object-cover rounded-md relative"
        />

        <div className="absolute bottom-5 w-full">
          <div className=" bg-white w-11/12 xl:w-4/5 m-auto grid grid-cols-2 lg:flex justify-between items-center p-5 drop-shadow-2xl md:space-x-5 md:rounded-md">
            <div className=" flex flex-col space-y-2 ">
              <label htmlFor="location">Localização</label>
              <input
                type="text"
                placeholder="Cotia"
                className="outline-0 text-xs"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="property">Tipo</label>
              <input
                type="text"
                placeholder="Casa"
                className="outline-0 text-xs"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="property">Pretenção</label>
              <input
                type="text"
                placeholder="Alugar"
                className="outline-0 text-xs"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="price">Preço maximo</label>
              <input
                type="text"
                placeholder="$2,000"
                className="outline-0 text-xs"
              />
            </div>
            <div>
              <button className="bg-yellow-400 px-5 py-2 mt-5 md:mt-0 md:rounded-full">
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

//exemplo select
{
  /* <form class="max-w-sm mx-auto">
  <label
    for="countries"
    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
    Select an option
  </label>
  <select
    id="countries"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
    <option selected>Choose a country</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
</form>; */
}
