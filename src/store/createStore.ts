import { create } from 'zustand';
import { initialState } from './initialState';
import type { State } from './initialState';

interface Actions {

}

export type Store = State & Actions;

export const useStore = create<Store>((set) => ({
  ...initialState
}));
