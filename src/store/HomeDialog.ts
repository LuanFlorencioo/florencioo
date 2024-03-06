import { create } from 'zustand';

type ImageData = {
  src: string;
  alt: string;
}

type Actions = {
  handleOpenDialog: () => void;
  handleChangeImage: (imageData: ImageData) => void;
}

type States = {
  isOpenDialog: boolean;
  image: ImageData | null;
}

type Store = Actions & States;

export const useHomeDialogStore = create<Store>()((set, get) => ({
  isOpenDialog: false,
  image: null,
  handleOpenDialog: () => {
    document.body.style.overflowY = get().isOpenDialog ? 'scroll' : 'hidden';
    set(({ isOpenDialog }) => ({ isOpenDialog: !isOpenDialog }));
  },
  handleChangeImage: (imageData: ImageData) => set(() => ({ image: imageData })),
}))