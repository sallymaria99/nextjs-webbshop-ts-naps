import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MUILink from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
	const imageLogo = "/IceLogo.svg";

	return (
		<AppBar
			component="header"
			position="static"
			sx={{
				background: "linear-gradient(to right, #c0c0c0, #f0f0f0)",
				// alignItems: "center",
			}}
		>
			<Toolbar
				sx={{
					padding: 0,
					display: "flex",
				}}
			>
				<Box sx={{ flexGrow: 1 }}>
					<IconButton
						data-cy="admin-link"
						component={Link}
						href="/admin"
						size="large"
						edge="start"
						color="inherit"
						aria-label="open drawer"
						sx={{ mr: 2 }}
					>
						<ManageAccountsIcon sx={{ color: "#ffff" }} />
					</IconButton>
				</Box>

				<MUILink
					component={Link}
					href="/"
					sx={{
						display: "flex",
						alignItems: "center",
						// padding: 0,
						// margin: 0,
						cursor: "pointer",
					}}
				>
					<Image
						src={imageLogo}
						width={130}
						height={60}
						alt="IceLogo"
						priority
					/>
				</MUILink>
				<Box sx={{ flexGrow: 1 }} />
			</Toolbar>
		</AppBar>
	);
}
