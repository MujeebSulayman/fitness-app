import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

import body4 from '../assets/images/body4.jpg';
import body3 from '../assets/images/body3.jpg';
import body1 from '../assets/images/body1.jpg';

import body2 from '../assets/images/body2.jpg';
import body5 from '../assets/images/body5.jpg';
import banner from '../assets/images/banner.jpg';
import { Stack, Typography, Box } from '@mui/material';

const Imagewrapper = () => {
	return (
		<Stack
			alignItems='center'
			mt='37px'
			justifyContent='center'
			p='20px'>
			<Typography
				fontWeight={700}
				sx={{ fontSize: { lg: '33px', xs: '30px' } }}
				pb='50px'
				textAlign='center'
				color='white'>
				Body JPGs
			</Typography>

			{/* Desktop Device */}
			<Box
				className='container'
				sx={{
					display: { lg: 'block', xs: 'none' },
				}}>
				<Swiper
					spaceBetween={30}
					slidesPerView={3}
					grabCursor={true}
					loop={true}
					modules={[Pagination]}
					pagination={{ clickable: true }}
					className='container-slider'>
					<SwiperSlide className='swiper-slide'>
						<img
							src={body1}
							alt=''
						/>
					</SwiperSlide>
					<SwiperSlide className='swiper-slide'>
						<img
							src={body2}
							alt=''
						/>
					</SwiperSlide>
					<SwiperSlide className='swiper-slide'>
						<img
							src={body3}
							alt=''
						/>
					</SwiperSlide>
					<SwiperSlide className='swiper-slide'>
						<img
							src={banner}
							alt=''
						/>
					</SwiperSlide>
					<SwiperSlide className='swiper-slide'>
						<img
							src={body4}
							alt=''
						/>
					</SwiperSlide>
					<SwiperSlide className='swiper-slide'>
						<img
							src={body5}
							alt=''
						/>
					</SwiperSlide>
					<SwiperSlide className='swiper-slide'>
						<img
							src={body2}
							alt=''
						/>
					</SwiperSlide>
				</Swiper>
			</Box>
			{/* Smaller Devices */}

			<Box
				className='container'
				sx={{
					display: { lg: 'none', xs: 'block' },
				}}>
				<Swiper
					spaceBetween={30}
					slidesPerView={1}
					grabCursor={true}
					loop={true}
					centeredSlides={true}
					modules={[Pagination]}
					fadeEffect={true}
					pagination={{ clickable: true }}
					className='container-small'>
					<SwiperSlide className='swiper-slide'>
						<img
							src={body1}
							alt=''
						/>
					</SwiperSlide>
					<SwiperSlide className='swiper-slide'>
						<img
							src={body2}
							alt=''
						/>
					</SwiperSlide>
					<SwiperSlide className='swiper-slide'>
						<img
							src={body3}
							alt=''
						/>
					</SwiperSlide>
					<SwiperSlide className='swiper-slide'>
						<img
							src={banner}
							alt=''
						/>
					</SwiperSlide>
					<SwiperSlide className='swiper-slide'>
						<img
							src={body4}
							alt=''
						/>
					</SwiperSlide>
					<SwiperSlide className='swiper-slide'>
						<img
							src={body5}
							alt=''
						/>
					</SwiperSlide>
					<SwiperSlide className='swiper-slide'>
						<img
							src={body2}
							alt=''
						/>
					</SwiperSlide>
				</Swiper>
			</Box>
		</Stack>
	);
};

export default Imagewrapper;
