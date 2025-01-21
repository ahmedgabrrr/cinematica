import styled from "styled-components";

export const NavbarWrapper = styled.div`

.logo {
    font-family: "Shadows Into Light", serif;
    color: #fff;
    font-size: 2.5rem;
    letter-spacing: 2px;
    background: linear-gradient(to right, #eaff0, f8d4d4);
	-webkit-background-clip:text';
	-webkit-text-fill-color:transparent;
	
}
.toolbar{
	display:flex;
	justify-content:space-between;
}
.links{
	font-family: "Acme", serif;
	&:hover{
		background-color:red;
	}
}
.closeIcon{
	color: white;

}
.css-b7dj7n-MuiList-root{
    color: white;
	background-color:#063970;
	font-weight:bold;
	width: 200px;
	height:100vh;
}

`;

export const MovieShowsWrapper = styled.div`
  body {
    background-color: white;
  }
  .loadingOverlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(3, 37, 65, 0.4);
	display:flex;
	justify-content:center;
	align-items:center;
	flex-direction:column:
	color:#fff;
  }
	.loadingOverlay p{
	font-family:'Roboto', sans-serif;
	color:#063970;
	font-weight:bold;
	margin-left:8px;
	letter-spacing:2px;
	}
	.movieHeading{
		font-family:Acme, sans-serif;
		width:100%;
		margin-bottom:2.5rem;
		>h1{
			padding-left: 2.5rem;
			color:#063970;
		}
	}
	.movieImage{
		height:100%;
		position:relative;
		&:hover{
			transform:scale(1.04);
			transition: all .4s ease-in-out; 

		}
		>img{
			border-radius:10px;
			border-bottom-right-radius:30px;
			box-shadow:1px 1px 10px 1px #000;
			padding:8px;
			height:20rem;
		}
		>span{
			padding: 10px;
			border-radius:50%;
			background-color:#ff4800;
			position:absolute;
			left: 0;
			color:white;
		}
			
	}
	.headingIcon{
		padding-right:8px;
		color:#ff4800;
	}
	.container{
		margin-right:15px;
	}
	.movie{
		display:flex;
		flex-direction:column;
		justify-content:space-between;
		width:100%;
	}
	.movieCard{
		font-family:Acme, sans-serif;
		display:flex;
		justify-content: space-around;
		flex-wrap:wrap;
		cursor:pointer;	
	}
	.movieInfo{
		max-width:100%;
		overflow:hidden;
		text-align:center;
		>h4{
			font-size: 13px;
		}
		>p{
			color:grey;
			font-size: 12px;
		}
	}
	.btnPrev{
		cursor:pointer;
		color:#ff4800;

	}
	.pageNumber{
		color:#063970;
		font-weight:bold;

	}
		.buttons{
		display:flex;
		align-items:center;
		justify-content:space-around;
		font-size:20px;
		}
`;
