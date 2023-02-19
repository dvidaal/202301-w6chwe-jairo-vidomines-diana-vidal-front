import { useCallback } from "react";
import { useAppDispatch } from "../store/hooks";
import { loadRobotsActionCreator } from "../store/features/robots/robotsSlice";

const useApi = () => {
  const dispatch = useAppDispatch();

  const getRobots = useCallback(async () => {
    try {
      const response = await fetch(process.env.REACT_APP_URL_API!);
      const robots = await response.json();

      dispatch(loadRobotsActionCreator(robots.robots));
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch]);
  return { getRobots };
};

export default useApi;
