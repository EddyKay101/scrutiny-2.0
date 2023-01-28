import { ColorTheme, Theme } from "@/models/Theme.model";
import styles from "../styles/theme.module.scss";
const DARK_COLOR_THEME: ColorTheme = {
    primary: styles.primaryDark, // black
    secondary: styles.secondaryDark, // white
    tertiary: styles.tertiaryDark, // opp gold
    accents: styles.accentsDark, // opp midnight blue
    background: styles.backgroundDark, // opp grey
    misc: styles.miscDark,
};

export const DARK_THEME_ID = "dark";

export const DARK_THEME: Theme = {
    id: DARK_THEME_ID,
    color: DARK_COLOR_THEME,
};
