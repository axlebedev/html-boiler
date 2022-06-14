console.log('%c11111', 'background:#00FF00', 'hello');

const {
  useState,
  useCallback,
  useRef,
  useEffect,
} = React

const Comp3 = () => {
  const rcount = useRef(0)
  useEffect(() => console.log('Comp3 ', ++(rcount.current)))
  // return <div>Comp3</div>
  return React.createElement("div", null, "Comp3");
}

const Comp2 = () => {
  const rcount = useRef(0)
  useEffect(() => console.log('Comp2 ', ++(rcount.current)))
  // return <div style={{color: 'red'}}>Comp2</div>
  return React.createElement("div", { style: {color: 'red'} }, "Comp2");
}


const Comp1 = () => {
  const rcount = useRef(0)
  useEffect(() => console.log('Comp1 ', ++(rcount.current)))
  const [count, setCount] = useState(0)
  const increase = useCallback(() => setCount((c) => c+1), []);
  // return <div onClick={increase}>{count}</div>
  return React.createElement("div", { onClick: increase, }, "Comp1 "+count);
}

const Wrapper = () => {
  const rcount = useRef(0)
  useEffect(() => console.log('Wrapper ', ++(rcount.current)))
  // return (
  //   <div>
  //     <Comp1 />
  //     <Comp2 />
  //     <Comp3 />
  //   </div>
  // );
  return React.createElement(
    "div",
    null,
    React.createElement(Comp1, null),
    React.createElement(Comp2, null),
    React.createElement(Comp3, null),
  );;
}

console.log('%c11111', 'background:#00FF00', 'document.getElementById("app")=', document.getElementById("app"));
const root = ReactDOM.createRoot(document.getElementById("app"));
console.log('%c11111', 'background:#00FF00', 'root=', root);
root.render(React.createElement(Wrapper, null));
