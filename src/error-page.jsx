import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page"> 
      <h1>Ops!</h1>
      <p>Desculpe mas um erro inesperado ocorreu...</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}