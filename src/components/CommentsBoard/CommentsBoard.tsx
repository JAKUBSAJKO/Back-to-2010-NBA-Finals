import { GiOldMicrophone } from "react-icons/gi";

import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { replaceWordsInComments } from "../../helpers/replaceWordsInComments";
import { IResponse } from "../../hooks/useQuestion";
import { UserPoints } from "../UserPoints/UserPoints";

interface Props {
  data: IResponse | undefined;
  isAfterPick: boolean;
  isCorrectAnswer: boolean;
}

export function CommentsBoard({ data, isAfterPick, isCorrectAnswer }: Props) {
  const user = useAppSelector((state: RootState) => state.user.value);

  return (
    <div className="hidden lg:w-full lg:h-16 bg-gray-300 lg:flex lg:justify-center lg:items-center lg:gap-4 2xl:h-24">
      <div className="w-full h-full mx-52 flex items-center gap-4 xl:max-w-5xl 2xl:max-w-7xl">
        <div className="text-sm w-4/5 flex items-center">
          <GiOldMicrophone className="text-2xl mr-2 2xl:text-4xl" />
          <p className="2xl:text-xl">
            {!isAfterPick
              ? replaceWordsInComments(
                  data?.allQuestions[0].initialcomment || "",
                  user
                )
              : isCorrectAnswer
              ? replaceWordsInComments(
                  data?.allQuestions[0].goodcomment || "",
                  user
                )
              : replaceWordsInComments(
                  data?.allQuestions[0].badcomment || "",
                  user
                )}
          </p>
        </div>
        <UserPoints />
      </div>
    </div>
  );
}
