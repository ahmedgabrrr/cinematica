import React, { useState, useEffect } from 'react'
import { MovieShowsWrapper } from "../styles/Styles.modules";
import axios from 'axios';
import { CircularProgress, } from '@mui/material';
import { ArrowCircleLeftSharp, ArrowCircleRightSharp, SmartDisplay, SmartScreenOutlined, SmartScreenRounded } from '@mui/icons-material';


interface Movie {
	id: number,
	title: string,
	poster_path: string,
	release_date: string,
	vote_average: number

	//for Tv shows
	first_air_date: string,
	name: string,

}

interface DataProps {
	apiEndpoint: string,
	numberOfMovies: number,
	showButtons: boolean,
	tvShowOn: boolean,
	moviesOn: boolean,
	itemHeading: string,
}


const DisplayItems: React.FC<DataProps> = ({ apiEndpoint, numberOfMovies, showButtons, tvShowOn, moviesOn, itemHeading }) => {
	const [showItems, setShowItems] = useState<Movie[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [loading, setLoading] = useState(false)

	//pagination

	async function fetchMovies() {
		try {
			const response = await axios.get(`${apiEndpoint}`, {
				params: {
					page: currentPage,
				},
				headers: {
					accept: 'application/json',
					Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3M2RhZWViODg1OTA3ZjlmMzZmZWQ2ZmU3MjI3YjIxNCIsIm5iZiI6MTczNjAyMDAwNy4yOTIsInN1YiI6IjY3Nzk5MDI3ODMwYThmNGNjNzY2OTg1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.McS_t9W1WPbGf3z3CRbjGgJiytpHWMJLAkaIPv9uOOQ'
				}
			});
			console.log(response.data)
			const { results, total_pages } = response.data;
			setShowItems(results.slice(0, numberOfMovies));
			setTotalPages(total_pages);
			setTimeout(() => {
				setLoading(true)
			}, 2000);
		} catch (err) {
			console.log("error is", err)
		}
	}

	useEffect(() => {
		fetchMovies()

	}, [currentPage, apiEndpoint, showButtons])

	const nextItemsPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage((nextPage) => nextPage + 1)
		}
	}


	const prevItemsPage = () => {
		if (currentPage > 1) {
			setCurrentPage((nextPage) => nextPage - 1)
		}
	}

	function getFormattedDate(dateString: string | number | Date) {
		const options = {
			year: "numeric",
			month: "short",
			day: "numeric"
		} as Intl.DateTimeFormatOptions;
		const date = new Date(dateString);
		return date.toLocaleDateString("en-Us", options);
	}

	return (
		<MovieShowsWrapper>
			{!loading ? (
				<div className="loadingOverlay">
					<CircularProgress size={50} color='info' />
					<p>Loading</p>
				</div>
			) : (
				<>
					<div className="movieHeading">

						<h1>
							{

								itemHeading === "Trending" ? <SmartDisplay className='headingIcon' /> : <SmartScreenRounded className='headingIcon' />
							}
							{itemHeading}
						</h1>
					</div>
					<div className="movieCard">
						{
							showItems.map((items) => {
								const percentage = (items.vote_average / 10) * 100;
								return (
									<>
										{
											items.name !== 'David Lynch' ? <div className="container" key={items.id}>
												<div className="movie">
													{
														<div className="movieImage">
															<img src={`https://image.tmdb.org/t/p/w200/${items.poster_path}`} alt="film poster" />
															<span>{percentage.toFixed()}%</span>
														</div>
													}
													{
														<div className="movieInfo">
															{
																moviesOn && (
																	<>
																		<h4 className="">{items.title}</h4>
																		{
																			items.release_date ? <p>{getFormattedDate(items.release_date)}</p> : ''
																		}
																	</>
																)
															}
															{
																tvShowOn && (
																	<>
																		<h4>{items.name}</h4>
																		{
																			items.first_air_date ? <p>{getFormattedDate(items.first_air_date)}</p> : ''
																		}
																	</>
																)
															}
														</div>
													}
												</div>
											</div> : ""
										}
									</>
								)
							})
						}
					</div>
					{
						showButtons && (
							<div className="buttons">
								{
									currentPage > 1 && (
										<ArrowCircleLeftSharp className='btnPrev' onClick={prevItemsPage} />


									)
								}
								<p className='pageNumber'>
									{currentPage}
								</p>

								{
									currentPage < totalPages && (


										<ArrowCircleRightSharp className='btnPrev' onClick={nextItemsPage} />

									)
								}
							</div>
						)
					}
				</>
			)
			}
		</MovieShowsWrapper>
	)
}

export default DisplayItems
