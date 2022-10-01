import { Box } from "@mui/system";
import HeaderIntro from "../Header/HeaderSection";
import Navigation from "../Header/Navigation";

export function Homepage() {
    return (
        <Box>
            <Navigation />
            <HeaderIntro />
        </Box>
    )
}