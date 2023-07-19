import Menu from "../Menu";

const CarCustomizationMenu = () => {
  return (
    <Menu>
      <div className="flex flex-col">
        <h3 className="text-white font-medium capitalize">Body Color:</h3>
        <span className="h-10 w-10 block bg-red-400 rounded-full" />
      </div>
      <div className="flex flex-col">
        <h3 className="text-white font-medium capitalize">wheel Color:</h3>
        <span className="h-10 w-10 block bg-red-400 rounded-full" />
      </div>
      <div className="flex flex-col">
        <h3 className="text-white font-medium capitalize">Mirror Color:</h3>
        <span className="h-10 w-10 block bg-red-400 rounded-full" />
      </div>
    </Menu>
  );
};

export default CarCustomizationMenu;
