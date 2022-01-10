
import rootStore from '@/redux/root';

describe('Root Module', () => {
  describe('State', () => {
    it('should get the initialState', () => {
      const initialState = rootStore.state;
      expect(initialState).toEqual(initialState);
    });
  });

  describe('Getters', () => {
    const state = { loading: false, error: null };
    it('should get the loading state', () => {
      const loading = rootStore.getters.loading(state);
      expect(loading).toBe(false);
    });

    it('should get the error state', () => {
      const error = rootStore.getters.error(state);
      expect(error).toBe(null);
    });
  });

  describe('Actions', () => {
    describe('loading', () => {
      const commit = jest.fn();
      rootStore.actions.loading({ commit });
      expect(commit).toHaveBeenCalledTimes(1);
      expect(commit).toHaveBeenCalledWith({ type: 'loading' });
    });

    describe('error', () => {
      const commit = jest.fn();
      const credentials = {error: 'error'};
      rootStore.actions.error({ commit }, { credentials });
      expect(commit).toHaveBeenCalledTimes(1);
      expect(commit).toHaveBeenCalledWith({ type: 'error', credentials });
    });
  });

  describe('Mutations', () => {
    const state = { loading: false, error: null };
    describe('loading', () => {
      rootStore.mutations.loading(state);
      expect(state).toEqual({
        loading: true,
        error: null,
      });
    });
    describe('error', () => {
      state.loading = false;
      rootStore.mutations.error(state, { credentials: 'error' });
      expect(state).toEqual({
        loading: false,
        error: 'error',
      });
    });
  });
});
