import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";

export const theme = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        primary: {
          color: "rgb(79, 220, 255)",
        },
        secondary: {
          color: "rgb(41, 101, 170)",
        },
        tertiary: {
          color: "rgb(0, 106, 255)",
        },
        quaternary: {
          color: "rgb(70, 120, 134)",
        },
        fifth: {
          color: "rgb(0, 0, 0)",
        },
        accent: {
          color: "rgb(0, 176, 80)",
        },
        surface: {
          color: "rgb(250, 250, 250)",
          border: "rgb(230, 230, 230)",
        },
        background: "rgb(255, 255, 255)",
        text: {
          h1: {
            color: "rgb(0, 0, 0)",
          },
          h2: {
            color: "rgb(190, 190, 190)",
          },
          p: {
            color: "rgb(56, 56, 56)",
            title: "rgb(79, 220, 255)",
          },
        }
      },
      dark: {
        primary: {
          color: "rgb(79, 220, 255)",
        },
        secondary: {
          color: "rgb(41, 101, 170)",
        },
        tertiary: {
          color: "rgb(0, 17, 255)",
        },
        quaternary: {
          color: "rgb(70, 120, 134)",
        },
        fifth: {
          color: "rgb(255, 255, 255)",
        },
        accent: {
          color: "rgb(146, 208, 80)",
        },
        surface: {
          color: "rgb(23, 23, 23)",
          border: "rgb(38, 38, 38)",
        },
        background: "rgb(18, 18, 18)",
        text: {
          h1: {
            color: "rgb(255, 255, 255)",
          },
          h2: {
            color: "rgb(58, 58, 58)",
          },
          p: {
            color: "rgb(217, 217, 217)",
            title: "rgb(79, 220, 255)",
          },
        }
      }
    }
  }
});
