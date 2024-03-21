"use client";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useCart } from "../contexts/CartContext";

//"Payment details",

export default function Confirmation() {
	const { cart } = useCart();
	const [totalPrice, setTotalPrice] = React.useState(0);

	React.useEffect(() => {
		const itemCount: any = cart.reduce(
			(total, item) => total + item.quantity * item.price,
			0
		);
		setTotalPrice(itemCount);
	}, [cart]);

	const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];

	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar
				position="absolute"
				color="default"
				elevation={0}
				sx={{
					position: "relative",
					borderBottom: (t) => `${t.palette.divider}`,
				}}
			>
				{/* <Toolbar>
					<Typography variant="h6" color="inherit" noWrap>
						Company name
					</Typography>
				</Toolbar> */}
			</AppBar>
			<Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
				<Paper
					variant="outlined"
					sx={{ my: { xs: 6, md: 14 }, p: { xs: 2, md: 3 } }}
				>
					<Typography component="h1" variant="h4" align="center">
						Order confirmation
					</Typography>
					<Grid container spacing={2} margin-left="0px">
						<Grid item xs={12} sm={6}>
							<Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
								Shipping
							</Typography>
							<Typography gutterBottom>John Smith</Typography>
							<Typography gutterBottom>{addresses.join(", ")}</Typography>
							<Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
								Payment details
							</Typography>
							<List disablePadding>
								{cart.map((item) => (
									<Grid container spacing={2} key={item.title} sx={{ my: 1 }}>
										<Grid item xs={12}>
											<Typography variant="body1">
												{item.description}
											</Typography>
										</Grid>
										<Grid item xs={12} sx={{ mt: 1 }}>
											<Typography variant="body2" sx={{ fontWeight: "bold" }}>
												Total : $ {item.price * item.quantity}
											</Typography>
										</Grid>
									</Grid>
								))}
								<ListItem sx={{ py: 1, px: 0 }}>
									<ListItemText
										primary={
											<Typography
												variant="subtitle1"
												sx={{ fontWeight: "bold", marginRight: "0px" }}
											>
												Totalprice
											</Typography>
										}
									/>
									<Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
										$ {totalPrice} USD
									</Typography>
								</ListItem>
							</List>
						</Grid>
						{/* Additional grid items for other content if needed */}
					</Grid>
					<Typography variant="subtitle1" gutterBottom>
						Your satisfaction is our top priority, and we are committed to
						delivering only the finest quality products to your doorstep. Our
						team will be working diligently to ensure that your order will be
						processed promptly and delivered to you on time. Thank you for
						buying our quality ice, we look forward in serving you once again in
						the future.
					</Typography>
					<Typography variant="subtitle2">
						Your order number is #2001539. We have emailed your order
						confirmation, and will send you an update when your order has
						shipped. Have an splendid day.
					</Typography>
				</Paper>
			</Container>
		</React.Fragment>
	);
}

//import console from "console";
