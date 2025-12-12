import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";

export const theme = definePreset(Aura, {
  semantic: {
    colorScheme: {
      // light: {
      //   primary: {
      //     color: "linear-gradient(90deg, #ff9900 0%, #0077ff 100%)",
      //     inverseColor: "rgb(255, 255, 255)",
      //     activeColor: "rgb(148, 227, 255)",
      //     hoverColor: "rgb(197, 242, 255)",
      //   },
      //   highlight: {
      //     background: "rgb(255, 255, 255)",
      //     focusBackground: "rgb(148, 227, 255)",
      //     color: "rgb(255, 255, 255)",
      //     focusColor: "rgb(255, 255, 255)"
      //   },
      // },
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
        },
        background: "rgb(18, 18, 18)",
        text: {
          h1: {
            color: "rgb(255, 255, 255)",
          },
          h2: {
            color: "rgb(255, 255, 255)",
          },
        }
      }
    }
  }
});
