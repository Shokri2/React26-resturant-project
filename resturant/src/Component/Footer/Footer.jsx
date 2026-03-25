import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#111",
          color: "#fff",
          mt: 8,
          pt: 6,
          pb: 3,
        }}
      >
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Steak House
              </Typography>
              <Typography variant="body2" color="gray">
                Serving premium steaks and delicious meals with the finest
                ingredients. Experience the taste of perfection.
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2"> Amman, Jordan</Typography>
              <Typography variant="body2"> +962 7 0000 0000</Typography>
              <Typography variant="body2"> info@steakhouse.com</Typography>

              <Box sx={{ mt: 2 }}>
                <IconButton sx={{ color: "#fff" }}>
                  <FacebookIcon />
                </IconButton>
                <IconButton sx={{ color: "#fff" }}>
                  <InstagramIcon />
                </IconButton>
                <IconButton sx={{ color: "#fff" }}>
                  <TwitterIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>

          <Box
            sx={{
              borderTop: "1px solid #333",
              mt: 4,
              pt: 2,
              textAlign: "center",
            }}
          >
            <Typography variant="body2" color="gray">
              © {new Date().getFullYear()} Steak House. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
