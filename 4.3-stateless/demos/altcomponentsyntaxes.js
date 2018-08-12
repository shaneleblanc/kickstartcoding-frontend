/*
  Component Syntax #1: Class-based components, is allowed to ahve have methods
  and state. Refers to props as "this.props.XXXXX"
*/
class Button extends Component {
  render() {
    return (
      <div className="Button">
        {this.props.children}
      </div>
    );
  }
}


/*
  Component Syntax #2: Functional
    * Basically just a "render" method by itself
    * Refers to props as "props.XXXXX"
*/
const Button = (props) => {
  return (
    <div className="Button">
      {props.children}
    </div>
  );
}

/*
  Component Syntax #3: Functional expression
    * Only has the JSX, so cannot use any JS statements, only JSX expressions
      (e.g. no if, console.log, for, etc)
    * Refers to props as "props.XXXXX"
*/
const Button = (props) => (
  <div className="Button">
    {props.children}
  </div>
)
