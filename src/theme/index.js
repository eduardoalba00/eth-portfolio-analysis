import PropTypes from "prop-types";
import { useMemo } from "react";
// material ui
import { CssBaseline } from "@mui/material";
import {
    ThemeProvider,
    createTheme,
    StyledEngineProvider,
} from "@mui/material/styles";
//
import typography from "./typography";
import componentsOverride from "./overrides";
import palette from "./palette";
import shape from "./shape";

ThemeConfig.propTypes = {
    children: PropTypes.node,
};

export default function ThemeConfig({ children }) {
    const themeOptions = useMemo(
        () => ({
            typography,
            palette,
            shape,
        }),
        []
    );

    const theme = createTheme(themeOptions);
    theme.components = componentsOverride(theme);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
}
