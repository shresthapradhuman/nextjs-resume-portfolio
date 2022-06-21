export const ServicesCard = ({ icon, title, description }) => {
  return (
    <div>
      <div className="mt-4">
        <h3 className="text-xl font-medium uppercase text-center mb-6">
          {title}
        </h3>
        <div className=" pr-5 py-6 border-t-2 border-stone-200 border-r-2 relative transition-all ease-in-out duration-700 before:absolute before:w-0 before:h-1 before:bg-stone-200 before:bottom-0 before:right-0 before:transition-all before:ease-in before:duration-700 hover:cursor-pointer hover:border-yellow-400 hover:before:w-6/12 hover:before:bg-yellow-400 group">
          <p className="text-lg font-light m-0 leading-7">{description}</p>
          <span className="flex justify-center items-center w-12 h-12 leading-10 border-2 border-stone-200 rounded-full bg-white absolute -top-7 -left-2 group-hover:border-yellow-400">{icon}</span>
        </div>
      </div>
    </div>
  );
};
