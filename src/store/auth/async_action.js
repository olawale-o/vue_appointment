import useRootStore from '../root';
import { registerService, loginService } from '@/services';

export const onLogin = async (credentials, cb, setState) => {
  const rootStore = useRootStore();
  rootStore.setLoading();
  try {
    const response = await loginService(credentials);
    setState(response);
    rootStore.setLoading();
    cb('/');
  } catch (error) {
    rootStore.setError(error.response.data.error);
    rootStore.setLoading();
  }
};

export const oRegister = async (credentials, cb, setState) => {
  const rootStore = useRootStore();
  rootStore.setLoading();
  try {
    const response = await registerService(credentials);
    setState(response);
    rootStore.setLoading();
    cb('/');
  } catch (error) {
    rootStore.setError(error.response.data.error);
    rootStore.setLoading();
  }
};
