import Car from "./car";
import Example from "./components/index.jsx";
import Card from "./card/index.jsx";
import grid from "./grid components/index.jsx";
import Buttonn from "./button/index.jsx";

function App() {
  return (
    <div className="p-8  bg-red-100 h-screen">
      <Car> yellow </Car>
      <Example>kaleem</Example>
      <Example>hassan</Example>
      <Example>ali</Example>
      <Card
        title="profit"
        description="my car is vey nice and i like my car very "
      />
      <Card title=" job" description="home job and office job " />

      <div className="gap-x-2.5 gap-y-2.5 grid grid-cols-4 p-3">
        <h1 className="bg-red-400 p-2"> my car is </h1>
        <h1 className="bg-blue-400 p-2"> my car is </h1>
        <h1 className="bg-red-400 p-2"> my car is </h1>
        <h1 className="bg-blue-400 p-2"> my car is </h1>
        <h1 className="bg-red-400 p-2"> my car is </h1>
        <h1 className="bg-blue-400 p-2"> my car is </h1>
      </div>

      <grid title="My name is Hassan" description="hassan description " />
      <grid title="My name is ali " description="ali description " />

      <Buttonn a="try now " className="text-black-29" name="kaleem" b="ds">
       const x=34;
       const b=45;

      </Buttonn>
    </div>
  );
}

export default App;
