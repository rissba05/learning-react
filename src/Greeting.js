const Greeting = (props) => {

    console.log(props);

    return (
      <h2>
        Hello {props.name} !
      </h2>
    );
  };

export default Greeting;