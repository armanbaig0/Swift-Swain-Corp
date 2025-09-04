'use client';
import { Box } from '@mui/material';
import Header from "../../components/header";
import Footer from "../../components/footer";

function Template() {
    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                px : 2 
            }}>
                <Header />
                <Box sx={{ flex: 1, p: 2 }}>
                    This is Swift Swain Corp
                </Box>
                <Footer />
            </Box>
        </>
    );
}

export default Template