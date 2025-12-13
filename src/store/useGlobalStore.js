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
  vol: true,

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
      index: apps.length > 0 ? apps[apps.length - 1].index + 1 : 0,
    };

    let updated;
    if (!exists) {
      updated = [...apps, item];
    } else {
      updated = apps.filter((i) => i.name !== name);
      updated.push(item);
    }

    set({ apps: updated });
  },

  handleClose: (name) => {
    const apps = get().apps;
    const updated = apps.filter((i) => i.name !== name);
    set({ apps: updated });
  },
}));

export default useGlobalStore;
