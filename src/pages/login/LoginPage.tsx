/* eslint-disable react/react-in-jsx-scope */

const LoginPage = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex w-[450px] flex-col items-center">
        <h1 className="mb-5 text-xl font-semibold text-red-500">
          Entre com a sua conta
        </h1>
        <p className="my-5 mt-5 w-full border-b border-b-red-500 pb-5 text-center font-medium text-red-500">
          ou entre com o seu e-mail
        </p>
        <div className="mb-5 w-full">
          <label>Email</label>
          <input type="text" />
        </div>

        <div className="mb-1 w-full font-semibold">
          <label>Senha</label>
          <input type="password" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
