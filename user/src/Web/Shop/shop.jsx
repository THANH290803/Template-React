import React from 'react';
import Header from '../../Component/Header';
import Sidebar from '../../Component/Sidebar';
import Footer from '../../Component/Footer';


function Shop() {
    return (
        <>
            <Header />
            {/* <section id="advertisement">
                <div className="container">
                    <img src="images/shop/advertisement.jpg" alt="" />
                </div>
            </section> */}
            <section>
                <div className="container">
                    <div className="row">
                        <Sidebar />
                        <div className="col-sm-9 padding-right">
                            <div className="features_items">
                                {/*features_items*/}
                                <h2 className="title text-center">Tất cả mặt hàng</h2>
                                <div className="col-sm-4">
                                    <div className="product-image-wrapper">
                                        <div className="single-products">
                                            <div className="productinfo text-center">
                                                <img src="images/shop/product12.jpg" alt="" />
                                                <h2>$56</h2>
                                                <p>Easy Polo Black Edition</p>
                                                <a href="#" className="btn btn-default add-to-cart">
                                                    <i className="fa fa-shopping-cart" />
                                                    Add to cart
                                                </a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart">
                                                        <i className="fa fa-shopping-cart" />
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="choose">
                                            <ul className="nav nav-pills nav-justified">
                                                <li>
                                                    <a href="">
                                                        <i className="fa fa-plus-square" />
                                                        Add to wishlist
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <i className="fa fa-plus-square" />
                                                        Add to compare
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="product-image-wrapper">
                                        <div className="single-products">
                                            <div className="productinfo text-center">
                                                <img src="images/shop/product11.jpg" alt="" />
                                                <h2>$56</h2>
                                                <p>Easy Polo Black Edition</p>
                                                <a href="#" className="btn btn-default add-to-cart">
                                                    <i className="fa fa-shopping-cart" />
                                                    Add to cart
                                                </a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart">
                                                        <i className="fa fa-shopping-cart" />
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="choose">
                                            <ul className="nav nav-pills nav-justified">
                                                <li>
                                                    <a href="">
                                                        <i className="fa fa-plus-square" />
                                                        Add to wishlist
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <i className="fa fa-plus-square" />
                                                        Add to compare
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="product-image-wrapper">
                                        <div className="single-products">
                                            <div className="productinfo text-center">
                                                <img src="images/shop/product10.jpg" alt="" />
                                                <h2>$56</h2>
                                                <p>Easy Polo Black Edition</p>
                                                <a href="#" className="btn btn-default add-to-cart">
                                                    <i className="fa fa-shopping-cart" />
                                                    Add to cart
                                                </a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart">
                                                        <i className="fa fa-shopping-cart" />
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="choose">
                                            <ul className="nav nav-pills nav-justified">
                                                <li>
                                                    <a href="">
                                                        <i className="fa fa-plus-square" />
                                                        Add to wishlist
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <i className="fa fa-plus-square" />
                                                        Add to compare
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="product-image-wrapper">
                                        <div className="single-products">
                                            <div className="productinfo text-center">
                                                <img src="images/shop/product9.jpg" alt="" />
                                                <h2>$56</h2>
                                                <p>Easy Polo Black Edition</p>
                                                <a href="#" className="btn btn-default add-to-cart">
                                                    <i className="fa fa-shopping-cart" />
                                                    Add to cart
                                                </a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart">
                                                        <i className="fa fa-shopping-cart" />
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                            <img src="images/home/new.png" className="new" alt="" />
                                        </div>
                                        <div className="choose">
                                            <ul className="nav nav-pills nav-justified">
                                                <li>
                                                    <a href="">
                                                        <i className="fa fa-plus-square" />
                                                        Add to wishlist
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <i className="fa fa-plus-square" />
                                                        Add to compare
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="product-image-wrapper">
                                        <div className="single-products">
                                            <div className="productinfo text-center">
                                                <img src="images/shop/product8.jpg" alt="" />
                                                <h2>$56</h2>
                                                <p>Easy Polo Black Edition</p>
                                                <a href="#" className="btn btn-default add-to-cart">
                                                    <i className="fa fa-shopping-cart" />
                                                    Add to cart
                                                </a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart">
                                                        <i className="fa fa-shopping-cart" />
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                            <img src="images/home/sale.png" className="new" alt="" />
                                        </div>
                                        <div className="choose">
                                            <ul className="nav nav-pills nav-justified">
                                                <li>
                                                    <a href="">
                                                        <i className="fa fa-plus-square" />
                                                        Add to wishlist
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <i className="fa fa-plus-square" />
                                                        Add to compare
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="product-image-wrapper">
                                        <div className="single-products">
                                            <div className="productinfo text-center">
                                                <img src="images/shop/product7.jpg" alt="" />
                                                <h2>$56</h2>
                                                <p>Easy Polo Black Edition</p>
                                                <a href="#" className="btn btn-default add-to-cart">
                                                    <i className="fa fa-shopping-cart" />
                                                    Add to cart
                                                </a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart">
                                                        <i className="fa fa-shopping-cart" />
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="choose">
                                            <ul className="nav nav-pills nav-justified">
                                                <li>
                                                    <a href="">
                                                        <i className="fa fa-plus-square" />
                                                        Add to wishlist
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <i className="fa fa-plus-square" />
                                                        Add to compare
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="product-image-wrapper">
                                        <div className="single-products">
                                            <div className="productinfo text-center">
                                                <img src="images/home/product6.jpg" alt="" />
                                                <h2>$56</h2>
                                                <p>Easy Polo Black Edition</p>
                                                <a href="#" className="btn btn-default add-to-cart">
                                                    <i className="fa fa-shopping-cart" />
                                                    Add to cart
                                                </a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart">
                                                        <i className="fa fa-shopping-cart" />
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="choose">
                                            <ul className="nav nav-pills nav-justified">
                                                <li>
                                                    <a href="">
                                                        <i className="fa fa-plus-square" />
                                                        Add to wishlist
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <i className="fa fa-plus-square" />
                                                        Add to compare
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="product-image-wrapper">
                                        <div className="single-products">
                                            <div className="productinfo text-center">
                                                <img src="images/home/product5.jpg" alt="" />
                                                <h2>$56</h2>
                                                <p>Easy Polo Black Edition</p>
                                                <a href="#" className="btn btn-default add-to-cart">
                                                    <i className="fa fa-shopping-cart" />
                                                    Add to cart
                                                </a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart">
                                                        <i className="fa fa-shopping-cart" />
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="choose">
                                            <ul className="nav nav-pills nav-justified">
                                                <li>
                                                    <a href="">
                                                        <i className="fa fa-plus-square" />
                                                        Add to wishlist
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <i className="fa fa-plus-square" />
                                                        Add to compare
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="product-image-wrapper">
                                        <div className="single-products">
                                            <div className="productinfo text-center">
                                                <img src="images/home/product4.jpg" alt="" />
                                                <h2>$56</h2>
                                                <p>Easy Polo Black Edition</p>
                                                <a href="#" className="btn btn-default add-to-cart">
                                                    <i className="fa fa-shopping-cart" />
                                                    Add to cart
                                                </a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart">
                                                        <i className="fa fa-shopping-cart" />
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="choose">
                                            <ul className="nav nav-pills nav-justified">
                                                <li>
                                                    <a href="">
                                                        <i className="fa fa-plus-square" />
                                                        Add to wishlist
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <i className="fa fa-plus-square" />
                                                        Add to compare
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="product-image-wrapper">
                                        <div className="single-products">
                                            <div className="productinfo text-center">
                                                <img src="images/home/product3.jpg" alt="" />
                                                <h2>$56</h2>
                                                <p>Easy Polo Black Edition</p>
                                                <a href="#" className="btn btn-default add-to-cart">
                                                    <i className="fa fa-shopping-cart" />
                                                    Add to cart
                                                </a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart">
                                                        <i className="fa fa-shopping-cart" />
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="choose">
                                            <ul className="nav nav-pills nav-justified">
                                                <li>
                                                    <a href="">
                                                        <i className="fa fa-plus-square" />
                                                        Add to wishlist
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <i className="fa fa-plus-square" />
                                                        Add to compare
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="product-image-wrapper">
                                        <div className="single-products">
                                            <div className="productinfo text-center">
                                                <img src="images/home/product2.jpg" alt="" />
                                                <h2>$56</h2>
                                                <p>Easy Polo Black Edition</p>
                                                <a href="#" className="btn btn-default add-to-cart">
                                                    <i className="fa fa-shopping-cart" />
                                                    Add to cart
                                                </a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart">
                                                        <i className="fa fa-shopping-cart" />
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="choose">
                                            <ul className="nav nav-pills nav-justified">
                                                <li>
                                                    <a href="">
                                                        <i className="fa fa-plus-square" />
                                                        Add to wishlist
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <i className="fa fa-plus-square" />
                                                        Add to compare
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="product-image-wrapper">
                                        <div className="single-products">
                                            <div className="productinfo text-center">
                                                <img src="images/home/product1.jpg" alt="" />
                                                <h2>$56</h2>
                                                <p>Easy Polo Black Edition</p>
                                                <a href="#" className="btn btn-default add-to-cart">
                                                    <i className="fa fa-shopping-cart" />
                                                    Add to cart
                                                </a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart">
                                                        <i className="fa fa-shopping-cart" />
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="choose">
                                            <ul className="nav nav-pills nav-justified">
                                                <li>
                                                    <a href="">
                                                        <i className="fa fa-plus-square" />
                                                        Add to wishlist
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <i className="fa fa-plus-square" />
                                                        Add to compare
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <ul className="pagination">
                                    <li className="active">
                                        <a href="">1</a>
                                    </li>
                                    <li>
                                        <a href="">2</a>
                                    </li>
                                    <li>
                                        <a href="">3</a>
                                    </li>
                                    <li>
                                        <a href="">»</a>
                                    </li>
                                </ul>
                            </div>
                            {/*features_items*/}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            {/*/Footer*/}
        </>
    )
}



export default Shop;