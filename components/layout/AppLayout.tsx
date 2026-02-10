"use client";

import { ReactNode, useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Button,
  Drawer,
} from "@mui/material";
import {
  ShoppingCart,
  Menu as MenuIcon,
  Search,
  Person,
} from "@mui/icons-material";
import Navigation from "./Navigation";
import Link from "next/link";

interface AppLayoutProps {
  children: ReactNode;
}

/**
 * AppLayout Component
 *
 * Main application layout containing header, navigation, and content area.
 *
 * @param children - Page content to be rendered
 */
export default function AppLayout({ children }: AppLayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const cartItems = "0"; // This should come from context/state

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar position="sticky" color="default" elevation={1}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
                E-Store
              </Typography>
            </Box>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Navigation />
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton color="inherit">
                <Search />
              </IconButton>
              <IconButton color="inherit">
                <Person />
              </IconButton>
              <IconButton component={Link} href="/cart" color="inherit">
                <Badge badgeContent={cartItems} color="primary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <Navigation mobile onClose={handleDrawerToggle} />
      </Drawer>

      <Container component="main" maxWidth="xl" sx={{ flex: 1, py: 3 }}>
        {children}
      </Container>

      <Box component="footer" sx={{ bgcolor: "grey.100", py: 3, mt: "auto" }}>
        <Container maxWidth="xl">
          <Typography variant="body2" color="text.secondary" align="center">
            © 2024 E-Commerce Store. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
