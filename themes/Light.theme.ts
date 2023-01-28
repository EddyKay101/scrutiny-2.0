import { ColorTheme, Theme } from "@/models/Theme.model";
import styles from "../styles/theme.module.scss";
const LIGHT_COLOR_THEME: ColorTheme = {
    primary: styles.primaryLight, // white
    secondary: styles.secondaryLight, // black
    tertiary: styles.tertiaryLight, // gold
    accents: styles.accentsLight, //midnight blue
    background: styles.backgroundLight, // grey
    misc: styles.miscLight,
};

export const LIGHT_THEME_ID = "light";

export const LIGHT_THEME: Theme = {
    id: LIGHT_THEME_ID,
    color: LIGHT_COLOR_THEME,
};
