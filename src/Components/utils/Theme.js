import { extendTheme } from "@chakra-ui/react";

const colors = {
    customPrimary: {
        1: "#641220",
        2: "#6E1423",
        3: "#85182A",
        4: "#A11D33",
        5: "#A71E34",
        6: "#B21E35",
        7: "#BD1F36",
        8: "#C71F37",
        9: "#DA1E37"
    }
}

const customTheme = extendTheme({colors});

export default customTheme;