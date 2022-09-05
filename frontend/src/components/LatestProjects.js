import React, { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const config = {
    dots: true,
    autoplay:true,
    autoplaySpeed: 200,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };


const products = [
    {
        img: './assets/images/products/products-1.jpg',
        title: 'Dolore magna',
        text: 'Lorem ipsum dolor sit amet elit.',
        tag:'',
        date:''
    },
    {
        img: './assets/images/products/products-2.jpg',
        title: 'Dolore magna',
        text: 'Lorem ipsum dolor sit amet elit.',
        tag:'',
        date:''
    },
    {
        img: './assets/images/products/products-3.jpg',
        title: 'Dolore magna',
        text: 'Lorem ipsum dolor sit amet elit.',
        tag:'',
        date:''
    },
    {
        img: './assets/images/products/products-4.jpg',
        title: 'Dolore magna',
        text: 'Lorem ipsum dolor sit amet elit.',
        tag:'',
        date:''
    }
]

const LatestProjects = () => {
  return (
    <section className="popular-deals section bg-gray">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<div className="section-title">
					<h2>Trending Adds</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, magnam.</p>
				</div>
			</div>
		</div>
		<div className="row">
			{/* <!-- offer 01 --> */}
			<div className="col-lg-12">
				<div className="trending-ads-slide">
						{/* <!-- product card --> */}
                        <Slider {...config}>
                            {products.map((x, i) => {
                            return (<div key="{i}">
                                <div className="product-item bg-light ml-2 mr-2">
                                    <div className="card">
                                        <div className="thumb-content">
                                            <a href="single.html">
                                                <img className="card-img-top img-fluid" src={x.img} alt="Card cap"/>
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <h4 className="card-title"><a href="single.html">{x.title}</a></h4>
                                            <ul className="list-inline product-meta">
                                                <li className="list-inline-item">
                                                    <a href="single.html"><i className="fa fa-folder-open-o"></i>{x.tag}</a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="category.html"><i className="fa fa-calendar"></i>{x.date}</a>
                                                </li>
                                            </ul>
                                            <p className="card-text">{x.text}</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>)
                            })}
                        </Slider>
				</div>
			</div>
		</div>
	</div>
</section>
  )
}

export default LatestProjects
