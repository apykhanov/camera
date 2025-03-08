import {fetchCameras} from '../../store/api-actions';
import {useAppDispatch} from '../../hooks/use-app-dispatch.tsx';

export default function ErrorScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <div>
      <p>Не удалось загрузить предложения</p>
      <button
        onClick={() => {
          dispatch(fetchCameras());
        }}
        type="button"
      >
        Попробовать ещё раз
      </button>
    </div>
  );
}
