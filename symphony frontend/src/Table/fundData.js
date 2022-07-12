import React, {useEffect, useState} from "react";
import { SocialLinks } from './SocialLinks';
import Header from '../Header';


function FundData() {
    return (
        <div className="top-section">
            <div className="top-data">
                <div className="top-banner">
                    <img className="top-banner-image" src="/assets/images/banner_dark.png"></img>
                    <Header />
                    <div className="top-banner-title">
                        <div>
                            <h1>
                                Yield
                                <br></br> 
                                optimized 
                                <br></br>
                                limit orders
                            </h1>
                            <p className="polygon-avalanche">At <span><img src="/assets/images/polygon.png"></img> <img src="/assets/images/Avalanche.png"></img></span> Avalanche logo earns revenue for your limit orders.</p>
                            <div className="trading-button">
                                <a href="https://app.symphony.finance/" className="trading-button" target="_blank"> Start Trading </a>
                            </div>
                        </div>
                        <div className="rectangle-image-section">
                            <img className="rectangle-image" src="/assets/images/rectangle.png"></img>
                            <div className="social-links-div">
                                <SocialLinks className="social-links" />
                            </div>
                        </div>
                    </div>
                    <div className="number-data">
                        <div className="number">
                            <h3>$9.91M</h3>
                            <p>Total Volume</p>
                        </div>
                        <div className="number">
                            <h3>76,143</h3>
                            <p>Total Created Orders</p>
                        </div>
                        <div className="number">
                            <h3>52,840</h3>
                            <p>Total Executed Orders</p>
                        </div>
                        <div className="number">
                            <h3>32,508</h3>
                            <p>Total Unique Users</p>
                        </div>
                    </div>
                    <p className="polygon-stats">* Only Polygon Stats</p>
                </div>
                <div className="dex-trading">
                    <div className="left-reshaping">
                        <h2>
                            Reshaping
                            <br></br>
                            DEX trading with YOLO!
                        </h2>

                        <img className="divider-image" src="/assets/images/divider.png"></img>
                        
                        <div className="left-reshaping-title">
                            <div className="left-reshaping-text">
                                <img src="/assets/images/item_red.png"></img>
                                <h6>Limit Order</h6>
                            </div>
                            <p>Users can create limit orders by depositing the sell asset.</p>

                            <div className="left-reshaping-text">
                                <img src="/assets/images/item_blue.png"></img>
                                <h6>Stoploss order</h6>
                            </div>
                            <p>Stoploss is another great feature that allows for minimizing risk in case the sell asset price goes below a certain price threshold.</p>
                            
                            <div className="left-reshaping-text">
                                <img src="/assets/images/item_green.png"></img>
                                <h6>Yield optimized</h6>
                            </div>
                            <p>The sell asset is deposited to a yield generating protocol like Aave, Yearn, Mstable, etc. The order automatically gets executed by the “Executor” if the price constraints are satisfied. The order creator receives the buy asset and yield automatically when the order is filled.</p>
                        </div>

                        <div className="docs-button-section">
                            <a href="https://symphonyfi.gitbook.io/docs" className="docs-button" target="_blank"> DOCS &rarr; </a>
                        </div>
                    </div>
                    <div className="yolo-image">
                        <img className="order-book-img" src="/assets/images/yolo.png"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FundData;