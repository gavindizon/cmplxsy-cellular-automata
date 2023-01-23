import { FunctionComponent } from "react";

type RulesType = {
  currRule: number;
};

const Rules: FunctionComponent<RulesType> = ({ currRule }) => {
  const KEY_COLOR: any = {
    "-1": "#ccc",
    "0": "white",
    "1": "black",
  };
  const ruleStr = currRule.toString(2).padStart(8, "0");
  return (
    <>
      <div className="flex justify-center">
        {[7, 6, 5, 4, 3, 2, 1, 0].map((num, idx) => {
          const binaryString = num.toString(2).padStart(3, "0");
          return binaryString.split("").map((val, index) => (
            <div key={index}>
              <div
                className={`w-12 h-12 border-2 border-yellow-300 ${
                  (index + 1) % 3 === 0 ? "mr-7" : ""
                }`}
                style={{ backgroundColor: KEY_COLOR[val] }}
              ></div>
              <div
                className={`w-12 h-12 border-yellow-300 ${
                  (index + 1) % 2 === 0 && "border-2"
                }`}
                style={{
                  backgroundColor:
                    (index + 1) % 2 === 0 ? KEY_COLOR[ruleStr.charAt(idx)] : "",
                }}
              ></div>
            </div>
          ));
        })}
      </div>
    </>
  );
};

export default Rules;
