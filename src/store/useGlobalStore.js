import { create } from "zustand";

const useGlobalStore = create((set, get) => ({
  apps: [],
  showStart: false,
  showAbout: false,
  showProjects: false,
  showResume: false,
  alert: false,
  warning: false,
  warningName: "",
  warningMsg: "",
  name: "",
  link: "",
  image: "",
  screenHeight: 0,
  screenWidth: 0,
  vol: true,
  isfull: false,

  setIsFull: (val) => {
    set({ isfull: val });
  },

  setScreenHeight: (val) => {
    set({ screenHeight: val });
  },
  setScreenWidth: (val) => {
    set({ screenWidth: val });
  },

  setVol: (val) => {
    set({ vol: val });
  },

  setShowStart: (val) => {
    set({ showStart: val });
  },

  setShowAbout: (val) => {
    set({ showAbout: val });
  },
  setShowProjects: (val) => {
    set({ showProjects: val });
  },
  setShowResume: (val) => {
    set({ showResume: val });
  },
  setAlert: (val) => {
    set({ alert: val });
  },
  setWarning: (val) => {
    set({ warning: val });
  },
  setWarningName: (val) => {
    set({ warningName: val });
  },
  setWarningMsg: (val) => {
    set({ warningMsg: val });
  },
  setName: (val) => {
    set({ name: val });
  },
  setLink: (val) => {
    set({ link: val });
  },
  setImage: (val) => {
    set({ image: val });
  },

  handleRecent: (name, image, fun) => {
    const apps = get().apps;

    const exists = apps.find((i) => i.name === name);

    const item = {
      name,
      image,
      fun,
      index: apps.length,
    };

    let updated;
    if (!exists) {
      updated = [...apps, item];
    } else {
      updated = apps.filter((i) => i.name !== name);
      updated.push(item);
    }

    let updatedRecent = updated.map((i, indx) => {
      i.index = indx;
      return i;
    });


    set({ apps: updatedRecent });
  },

  handleClose: (name) => {
    const apps = get().apps;
    const updated = apps.filter((i) => i.name !== name);
    set({ apps: updated });
  },
}));

export default useGlobalStore;
