type Props = {
  type: string;
  message: string;
};

const Alert = ({ type, message }: Props) => {
  return (
    <div
      className={`${
        type === "error" ? "text-red-500" : "text-green-500"
      } p-2 text-white sm:text-md text-xs leading-none lg:rounded-full flex lg:inline-flex items-center`}
      role="alert"
    >
      <p
        className={`flex rounded-full ${
          type === "error" ? "bg-red-500" : "bg-green-500"
        } uppercase px-2 py-1 text-xs font-semibold mr-3`}
      >
        {type === "error" ? "Error" : "Success"}
      </p>
      <p className="mr-2 sm:text-base text-xs text-left text-black">
        {message}
      </p>
    </div>
  );
};

export default Alert;
