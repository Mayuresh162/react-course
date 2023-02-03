const Error = ({useRouteError}) => {
  const err = useRouteError();
  return (
    <div>
      <h1 className="text-2xl">Oops!!</h1>
      <h2 className="text-xl">Something went wrong.</h2>
      <h2 className="text-xl">{err.status + " :  " + err.statusText}</h2>
    </div>
  );
}

export default Error;