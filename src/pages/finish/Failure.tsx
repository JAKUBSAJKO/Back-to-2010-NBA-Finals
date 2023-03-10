import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { texts } from "../../constants/static-text";
import { removeUserExistToken } from "../../features/userExistSlice";
import { routes } from "../../routes/routes";

export default function Failure() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const userExist = useAppSelector(
    (state: RootState) => state.userExistToken.value
  );

  const endGame = () => {
    dispatch(removeUserExistToken());
    navigate(routes.root);
  };

  return (
    <div className="w-full h-screen bg-failure bg-top bg-no-repeat bg-foto-bg flex flex-col justify-center items-center gap-4">
      {userExist ? (
        <>
          <h1 className="text-lg font-bold italic text-white 2xl:text-2xl">
            Niestety!
          </h1>
          <p className="max-w-lg text-sm font-bold text-center italic text-white px-8 md:text-base 2xl:text-2xl 2xl:max-w-2xl">
            {texts.lose}
          </p>
          <button
            className="border-2 border-white rounded-md mt-4 text-white text-sm px-4 py-2 transition-all hover:bg-white hover:text-black 2xl:scale-125"
            onClick={endGame}
          >
            Spróbuj ponownie
          </button>
        </>
      ) : null}
    </div>
  );
}
