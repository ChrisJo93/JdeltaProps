import React from "react"
import { Grid } from "@mui/material"

const Header = () => {
  return (
    <header>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ backgroundColor: "white", color: "rgb(78, 81, 82)" }}
      >
        <Grid item marginLeft={10}>
          <h2>JDelta Properties</h2>
        </Grid>
        <Grid item marginRight={10}>
          <h2>Listings</h2>
        </Grid>
      </Grid>
    </header>
  )
}

export default Header
