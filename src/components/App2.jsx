import {useState} from "react";

export default function App() {
  const [name, setName] = useState("Bob");
  const [newName, setNewName] = useState("");
  const [showStory, setShow] = useState(false);
  const insertX = [["Willy the Goblin"],["Big Daddy"],["Father Christmas"]];
  const insertY = [["the soup kitchen"],["Disneyland"],["the White House"]];
  const insertZ = [["spontaneously combusted"],["melted into a puddle on the sidewalk"],["turned into a slug and crawled away"]];
  const [xItem, setX] = useState("");
  const [yItem, setY] = useState("");
  const [zItem, setZ] = useState("");
  const [ukus, setUKUS] = useState("us");
  const [temp, setTemp] = useState(94);
  const [tempType, setTempType] = useState("fahrenheit");
  const [weight, setWeight] = useState(300);
  const [weightType, setWeightType] = useState("pounds")

  function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }

  function trans(){
    const defaultTemp = 94;
    const defaultTempType = "fahrenheit";
    const defaultWeight = 300;
    const defaultWeightType = "pounds";
    if(ukus === "us"){
      setTemp(defaultTemp);
      setTempType(defaultTempType);
      setWeight(defaultWeight);
      setWeightType(defaultWeightType);
    }else if(ukus === "uk"){
      setTemp(Math.round((defaultTemp - 32) * (5.0 / 9.0))); //デフォルトの華氏を摂氏に変換します
      setTempType("centigrade");
      setWeight(Math.round(defaultWeight / 14.0));
      setWeightType("stone");
    }
  }
  
  function buttonClicked(event) {
    setShow(true);
    setX(randomValueFromArray(insertX));
    setY(randomValueFromArray(insertY));
    setZ(randomValueFromArray(insertZ));
    if(newName !== ""){
      setName(newName);
    }else{
      setName("Bob");
    }
    trans();
  }
  return (
    <>
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input type="text" placeholder="" onChange={(event) => {setNewName(event.target.value)}}/>
      </div>
      <div>
        <label htmlFor="us">US</label>
        <input type="radio" value="us" checked={ukus === "us"} onChange={() => setUKUS("us")}/>
        <label htmlFor="uk">UK</label>
        <input type="radio" value="uk" checked={ukus === "uk"} onChange={() => setUKUS("uk")}/>
      </div>
      <div>
        <button onClick={buttonClicked}>Generate random story</button>
      </div>
      {showStory && (
        <p>
          It was {temp} {tempType} outside, so {xItem} went for a walk. When they
          got to {yItem}, they stared in horror for a few moments, then {zItem}.
          {name} saw the whole thing, but was not surprised — {xItem} weights {weight}
          {weightType}, and it was a hot day.
        </p>
      )}
    </>
  );
}