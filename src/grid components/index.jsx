const grid = ({ title = "tile", description = "des", ...rest }) => {
  return (
    <div className="border shadow border p-4 rounded bg-white flex flex-col gap-2">
      <h1 className="text-blue-900 font-semibold text-xl">{title}</h1>
      <p className=" text-grey-500">{description}</p>
    </div>
  );
};

export default grid;
