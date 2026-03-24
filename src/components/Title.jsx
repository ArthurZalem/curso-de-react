function Title(props) {
  return (
    <h1 {...props} className="text-5xl font-bold text-center">
      {props.children}
    </h1>
  );
}

export default Title;
