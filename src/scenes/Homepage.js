import React from 'react'
import Fade from 'react-reveal/Fade';

import "assets/css/style.css"

import Section from 'elements/Section';
import Header from 'parts/Header';
import Clients from 'parts/Clients';
import Feature from 'parts/Feature';
import Cards from 'elements/Cards';
import Lists from 'elements/Lists'

import HeroImage from "assets/images/hero-image.png"
import FeatureTile01 from "assets/images/feature-tile-icon-01.svg";
import FeatureTile02 from "assets/images/feature-tile-icon-02.svg";
import FeatureTile03 from "assets/images/feature-tile-icon-03.svg";


export default function Homepage() {

    const features = [
        {
            ImgSrc : FeatureTile01,
            ImgAlt : "Feature tile 01",
            title: "Join the system",
            description: "A pseudo-latin text used in web design layout and printing in place of things to emphaise design"
        },
        {
            ImgSrc : FeatureTile02,
            ImgAlt : "Feature tile 02",
            title: "Join the system",
            description: "A pseudo-latin text used in web design layout and printing in place of things to emphaise design"
        },
        {
            ImgSrc : FeatureTile03,
            ImgAlt : "Feature tile 03",
            title: "Join the system",
            description: "A pseudo-latin text used in web design layout and printing in place of things to emphaise design"
        }
    ];

const listPricing = [
    {
        price: 27,
        currencySymbol : "$",
        description : "Lorem ipsum is a common text",
        features : [
            {isChecked:true, content:"Excepteur sint occaecat velit"},
            {isChecked:true, content:"Excepteur sint occaecat velit"},
            {isChecked:true, content:"Excepteur sint occaecat velit"},
            {isChecked:false, content:"Excepteur sint occaecat velit"},
            {isChecked:false, content:"Excepteur sint occaecat velit"},
        ]
    },
    {
        price: 47,
        currencySymbol : "$",
        description : "Lorem ipsum is a common text",
        features : [
            {isChecked:true, content:"Excepteur sint occaecat velit"},
            {isChecked:true, content:"Excepteur sint occaecat velit"},
            {isChecked:true, content:"Excepteur sint occaecat velit"},
            {isChecked:true, content:"Excepteur sint occaecat velit"},
            {isChecked:false, content:"Excepteur sint occaecat velit"},
        ]
    },
    {
        price: 67,
        currencySymbol : "$",
        description : "Lorem ipsum is a common text",
        features : [
            {isChecked:true, content:"Excepteur sint occaecat velit"},
            {isChecked:true, content:"Excepteur sint occaecat velit"},
            {isChecked:true, content:"Excepteur sint occaecat velit"},
            {isChecked:true, content:"Excepteur sint occaecat velit"},
            {isChecked:true, content:"Excepteur sint occaecat velit"},
        ]
    },
]


    return (
        <div className="body-wrap">
            <Header></Header>     
                <Section className="hero illustration-section-01" isCenteredContent>
                    <div className="container-sm">
                        <div className="hero-inner section-inner">
                                <div className="hero-content">
                                <Fade bottom delay={500}>
                                    <h1 className="mt-0 mb-16">Landing template for startups</h1>
                                </Fade>
                                <div className="container-xs">
                                    <Fade bottom delay={1000}>
                                        <p className="mt-0 mb-32">
                                            Our landing page template works on all devices, so you
                                            only have to set it up once, and get beautiful results
                                            forever.
                                        </p>
                                    </Fade>
                                </div>
                            </div>
                            <div className="hero-figure illustration-element-01">
                                <Fade bottom delay={1500}>
                                    <img
                                        className="has-shadow"
                                        src={HeroImage}
                                        alt="Hero"
                                        width="896"
                                        height="504"
                                    />
                                </Fade>
                            </div>
                        </div>
                    </div>
                </Section>
            <Clients></Clients>
            <Section className="features-tiles">
                <div className="container">
                    <div className="features-tiles-inner section-inner">
                        <div className="tiles-wrap">
                            {features.map((feature, index) => 
                                <Feature 
                                    key={index}
                                    delayInMS={index * 500}
                                    data={feature}
                                ></Feature> 
                            )}
                        </div>
                    </div>
                </div>
            </Section>
            <Section className="pricing">
                <div className="container">
                    <div className="pricing-inner section-inner has-top-divider">
                        <div className="section-header center-content">
                            <div className="container-xs">
                                <h2 class="mt-0 mb-16">
                                    Simple, transarent pricing
                                </h2>
                                <p class="m-0">
                                    Lorem ipsum is common placeholder text
                                    used to demonstrate the graphic elements
                                    of a document or visual presentation.
                                </p>
                            </div>
                            <div className="tiles-wrap">
                                {
                                    listPricing.map((list, id) => <Cards hasShadow>
                                        <div class="pricing-item-header pb-24 mb-24">
                                            <div class="pricing-item-price mb-4">
                                                <span class="pricing-item-price-currency h2">
                                                    $
                                                        <span class="pricing-item-price-amount h1 pricing-switchable"data-pricing-monthly="34" data-pricing-yearly="27">
                                                            27
                                                        </span>
                                                </span>
                                                <div class="text-xs text-color-low">
                                                    Lorem ipsum is a common text
                                                </div>
                                            </div>
                                        </div>
                                        <div class="pricing-item-features mb-40">
                                            <div class="pricing-item-features-title h6 text-xs text-color-high mb-24">
												What’s included
                                                <ul class="pricing-item-features-list list-reset text-xs mb-32">
                                                    <li class="is-checked">
                                                        Excepteur sint occaecat
                                                        velit
                                                    </li>
                                                    <li class="is-checked">
                                                        Excepteur sint occaecat
                                                        velit
                                                    </li>
                                                    <li class="is-checked">
                                                        Excepteur sint occaecat
                                                        velit
                                                    </li>
                                                    <li class="is-checked">
                                                        Excepteur sint occaecat
                                                        velit
                                                    </li>
                                                    <li class="is-checked">
                                                        Excepteur sint occaecat
                                                        velit
                                                    </li>
                                                </ul>
											</div>
                                        </div>
                                        <div clas="pricing-item-cta mb-8">
                                            <a class="button button-primary button-block" href="#">Start free trial</a>
                                        </div>
                                    </Cards> )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}
    