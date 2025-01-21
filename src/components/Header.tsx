import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, useMediaQuery, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { NavbarWrapper } from "../styles/Styles.modules";
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { CloseOutlined } from "@mui/icons-material";

const Header = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const theme = useTheme();

	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	const toggleDrawer = () => {
		setDrawerOpen(!drawerOpen);
	};

	const navLinks = ['Home', 'Playing Now', 'Popular', 'Tv Shows'];

	return <NavbarWrapper>
		<AppBar sx={{ padding: "10px", backgroundColor: "#063970" }}>
			<Toolbar>
				<div style={{ flexGrow: 1 }}>
					<Typography className="logo">Cinematica</Typography>
				</div>
				{isMobile ? (
					<>
						<IconButton color="inherit" onClick={toggleDrawer}>
							<MenuIcon />
						</IconButton>
					</>
				) : (
					<div>
						{navLinks.map((link) => (
							<Button className="navItems" color="inherit" key={link}>
								{link}
							</Button>
						))}
					</div>
				)}
			</Toolbar>
			<Drawer className="mobileNav" anchor="right" open={drawerOpen} onClose={toggleDrawer}>
				<List>
					<IconButton onClick={toggleDrawer}>
						<CloseOutlined className="closeIcon" />
					</IconButton>
					{navLinks.map((link) => (
						<ListItem key={link.length}>
							<ListItemText primary={link} />
						</ListItem>
					))}
				</List>
			</Drawer>
		</AppBar>
	</NavbarWrapper>;
};

export default Header;
