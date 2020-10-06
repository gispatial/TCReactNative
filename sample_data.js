const { default: config } = require("./config")

let data = {
    "homeBanner": [
        {
            image: "https://gharxy.digital/stage/native/wp-content/uploads/sites/4/2020/10/save.jpeg",
        },
        {
            image: "https://tripcarte.asia/wp-content/uploads/2020/03/Colmar-Tropicale-And-Genting-Highland-Tour-6-300x300.jpg",
        }
    ],
    "brands": [
        {
            "name": "Top Destination",
            "image": "https://cdn.vox-cdn.com/thumbor/pOMbzDvdEWS8NIeUuhxp23wi_cU=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19700731/googlemaps.png",
            "id": 1
        },
        {
            "name": "Special Promotion",
            "image": "https://www.iconfinder.com/data/icons/advertisement-marketing/512/sale_banner-512.png",
            "id": 2
        },
        {
            "name": "Most Popular",
            "image": "https://thumbs.dreamstime.com/z/most-popular-icon-vector-100621114.jpg",
            "id": 3
        },
        {
            "name": "New Attractions",
            "image": "https://i.pinimg.com/originals/33/99/36/339936505946c5a1e2553122e0a4e4fa.jpg",
            "id": 4
        },
        {
            "name": "Malaysia Special",
            "image": "https://www.vectorportal.com/img_novi/I-love-Malaysia.jpg",
            "id": 3
        },
        {
            "name": "Weekend Ideas",
            "image": "https://i.pinimg.com/originals/79/38/4a/79384a33aba84a0390278731a986de15.jpg",
            "id": 3
        },
        {
            "name": "Family Fun",
            "image": "https://cdn1.vectorstock.com/i/thumb-large/28/60/family-icon-and-symbol-vector-642860.jpg",
            "id": 3
        },
        {
            "name": "Romantic Ideas",
            "image": "https://i.pinimg.com/originals/4e/3d/2b/4e3d2bec6b238d77d65eeacd4548cc40.jpg",
            "id": 3
        },
        {
            "name": "Visit Malaysia 2020",
            "image": "https://rspo.org/addons/default/themes/r3p2_revamp/img/impacts/Home-Impacts-3.png",
            "id": 3
        },
        {
            "name": "Outdoor Fun",
            "image": "https://cdn2.vectorstock.com/i/1000x1000/77/81/flying-handle-kite-for-outdoor-games-vector-25477781.jpg",
            "id": 3
        },
    ],
    "categories": [
        {
            "name": "Top",
            "image": "http://intelvue.com/demo/app-template/light/p2.png",
            "banner_image": "http://intelvue.com/demo/app-template/light/1.png",
            "id": 1,
            "title_position": "right"
        },
        {
            "name": "Bottom",
            "image": "http://intelvue.com/demo/app-template/light/p1.png",
            "banner_image": "http://intelvue.com/demo/app-template/light/2.png",
            "id": 2,
            "title_position": "left"
        },
        {
            "name": "Top",
            "image": "http://intelvue.com/demo/app-template/light/p4.png",
            "banner_image": "http://intelvue.com/demo/app-template/light/3.png",
            "id": 3,
            "title_position": "right"
        },
        {
            "name": "Bottom",
            "image": "http://intelvue.com/demo/app-template/light/p5.png",
            "banner_image": "http://intelvue.com/demo/app-template/light/4.png",
            "id": 4,
            "title_position": "left"
        }
    ],
    "items": [
        {
            "name": "Scenic Day Cruise - Langkawi",
            "sku": "SKU001",
            "images": [
                "https://tripcarte.asia/wp-content/uploads/2019/11/SCENIC-DAY-CRUISE.jpg",
                "https://tripcarte.asia/wp-content/uploads/2019/11/Sunset-Party-Cruise-2-300x300.jpg"
            ],
            "price": "RM99",
            "id": 1,
            "rating": 3,
            "brand_name": "Things To Do / Langkawi",
            "description": "<h3>Full Description</h3><p>Nice Dude</p>",
            "specification": "<p>I am specs</p>"
        },
        {
            "name": "DARK MANSION 3D GLOW",
            "sku": "SKU001",
            "images": [
                "https://tripcarte.asia/wp-content/uploads/2019/10/Dark-7-600x400.jpg",
                "http://intelvue.com/demo/app-template/light/p3.png"
            ],
            "price": "RM40",
            "special_price": "RM20",
            "id": 2,
            "rating": 4,
            "brand_name": "Things To Do / Langkawi",
            "full_description": "<h3>Full Description</h3>",
            "specification": "<p>I am specs</p>"
        },
        {
            "name": "THE HABITAT PENANG HILL",
            "sku": "SKU001",
            "images": [
                "https://tripcarte.asia/wp-content/uploads/2019/10/Habitat-new-1.jpg",
                "http://intelvue.com/demo/app-template/light/p5.png"
            ],
            "price": "RM99",
            "special_price": "RM160",
            "id": 3,
            "brand_name": "Things To Do / Penang",
            "full_description": "<h3>Full Description</h3>",
            "specification": "<p>Standard Entry.</p>"
        },{
            "name": " SNORKELING DAY TRIP – REDANG ISLAND (5 Points)",
            "sku": "SKU001",
            "images": [
                "https://tripcarte.asia/wp-content/uploads/2020/03/Snorkeling-Day-Trip-5-points-7.jpg",
                "https://tripcarte.asia/wp-content/uploads/2020/03/Snorkeling-Day-Trip-5-points-2-150x150.jpg"
            ],
            "price": "RM82.80",
            "special_price": "RM55.20",
            "id": 4,
            "brand_name": "Things To Do / Redang Island",
            "full_description": "<h3>Full Description</h3>",
            "specification": "<p>What’s Included</p>"
        },
        {
            "name": "SARAWAK RIVER CRUISE",
            "sku": "SKU001",
            "images": [
                "https://tripcarte.asia/wp-content/uploads/2019/10/the-charles-memorial-150x150.jpg",
                "https://tripcarte.asia/wp-content/uploads/2019/10/River-Cruise.jpg"
            ],
            "price": "RM105.80",
            "special_price": "",
            "id": 5,
            "brand_name": "Things To Do / Sarawak",
            "full_description": "<h3>Full Description</h3>",
            "specification": "<p>What’s Included</p>"
        },{
            "name": "KIULU RIVER WHITE WATER RAFTING (GRADE I-II)",
            "sku": "SKU001",
            "images": [
                "https://tripcarte.asia/wp-content/uploads/2019/10/KIULU-RIVER-WHITE-WATER-RAFTING-1.jpg",
                "https://tripcarte.asia/wp-content/uploads/2019/10/KIULU-RIVER-WHITE-WATER-RAFTING-5-600x400.jpg"
            ],
            "price": "RM162",
            "special_price": "RM126",
            "id": 6,
            "brand_name": "Things To Do / Sabah",
            "full_description": "<h3>Full Description</h3>",
            "specification": "<p>What’s Included</p>"
        }
    ],
    "cart": {
        "lines": [
            {
                "name": "BAYOU LAGOON WATER PARK",
                "sku": "SKU001",
                "image": "https://tripcarte.asia/wp-content/uploads/2019/10/bayou-lagoon-waterpark12-malacca.jpg",
                "rate": "RM12.80",
                "linetotal": "RM18.70"
            },
            {
                "name": "KIULU RIVER WHITE WATER RAFTING (GRADE I-II)",
                "sku": "SKU001",
                "image": "https://tripcarte.asia/wp-content/uploads/2019/10/KIULU-RIVER-WHITE-WATER-RAFTING-1.jpg",
                "rate": "RM126",
                "linetotal": "RM162"
            }
        ],
        "summary": {
            "total": "$1000",
            "subtotal": "$800",
            "estimatedshipping": "RM100",
            "taxtotal": "RM100"
        }
    },
    "addresses": [
        {
            "name": "Norsyafiqah binti Norashid",
            "address": "UNDERWATER WORLD LANGKAWI, \nLANGKAWI, MY",
            "selected": true,
            "id": 1
        },
        {
            "name": "Norsyafiqah binti Norashid",
            "address": "UNDERWATER WORLD LANGKAWI, \nLANGKAWI, MY",
            "selected": false,
            "id": 2
        },
        {
            "name": "Norsyafiqah binti Norashid",
            "address": "UNDERWATER WORLD LANGKAWI, \nLANGKAWI, MY",
            "selected": false,
            "id": 3
        },
        {
            "name": "Norsyafiqah binti Norashid",
            "address": "UNDERWATER WORLD LANGKAWI, \nLANGKAWI, MY",
            "selected": false,
            "id": 4
        }
    ],
    "orders": [
        {
            "id": 1,
            "order_no": "79692",
            "date": "2019/12/12",
            "status": "pending",
            "statusLabel": "Pending",
            "total": "RM1000",
            "summary": {
                "total": "RM1000",
                "shippingtotal": "RM100",
                "taxtotal": "RM100",
                "subtotal": "RM800"
            },
            "lines": [
                {
                    "id": 1,
                    "name": "DAY TOUR AT MALACCA",
                    "sku": "TESTITEM",
                    "image": "https://tripcarte.asia/wp-content/uploads/2019/10/3-9.jpg",
                    "rate": "RM27.60",
                    "qty": 2,
                    "total": "RM9.20"
                },
                {
                    "id": 2,
                    "name": "UPSIDE DOWN HOUSE GALLERY",
                    "sku": "TESTITEM2",
                    "image": "https://tripcarte.asia/wp-content/uploads/2019/10/upside-down-house-e1571303944144.jpg",
                    "rate": "RM200",
                    "qty": 2,
                    "total": "RM400"
                }
            ]
        },
        {
            "id": 3,
            "order_no": "SO-10002",
            "date": "2019/12/12",
            "status": "billed",
            "statusLabel": "Billed",
            "total": "RM1000",
            "summary": {
                "total": "RM1000",
                "shippingtotal": "RM100",
                "taxtotal": "RM100",
                "subtotal": "RM800"
            },
            "lines": [
                {
                    "id": 1,
                    "name": "BALI SWING IN UBUD",
                    "sku": "TESTITEM",
                    "image": "https://tripcarte.asia/wp-content/uploads/2019/11/Real-Bali-6-1.jpg",
                    "rate": "RM69.30",
                    "qty": 2,
                    "total": "RM318.80"
                },
                {
                    "id": 2,
                    "name": "TANAH LOT SUNSET TOUR",
                    "sku": "TESTITEM2",
                    "image": "https://tripcarte.asia/wp-content/uploads/2020/09/Sunset-Tanah-Lot-Tour-and-Spa_3.jpg",
                    "rate": "RM80.50",
                    "qty": 2,
                    "total": "RM296.20"
                }
            ]
        },
        {
            "id": 2,
            "order_no": "SO-10003",
            "date": "2019/12/12",
            "status": "cancelled",
            "statusLabel": "Cancelled",
            "total": "RM1000",
            "summary": {
                "total": "RM1000",
                "shippingtotal": "RM100",
                "taxtotal": "RM100",
                "subtotal": "RM800"
            },
            "lines": [
                {
                    "id": 1,
                    "name": "MARI MARI DISCOVER SCUBA DIVE",
                    "sku": "TESTITEM",
                    "image": "https://tripcarte.asia/wp-content/uploads/2019/10/Scuba-Diving-8.jpg",
                    "rate": "RM340",
                    "qty": 2,
                    "total": "RM259.20"
                },
                {
                    "id": 2,
                    "name": "MARI MARI STAND UP PADDLE BOARD",
                    "sku": "TESTITEM2",
                    "image": "https://tripcarte.asia/wp-content/uploads/2019/10/Stand-up-6.jpg",
                    "rate": "RM33.30",
                    "qty": 2,
                    "total": "RM47.50"
                }
            ]
        }
    ],
    "filters": {
        "colors": [
            {"id": 1, "label": "Black"},
            {"id": 2, "label": "White"},
            {"id": 3, "label": "Red"},
            {"id": 4, "label": "Maroon"},
            {"id": 5, "label": "Blue"},
            {"id": 6, "label": "Grey"},
        ],
        "sizes": [
            {"id": 1, "label": "XSm"},
            {"id": 2, "label": "Sm"},
            {"id": 3, "label": "M"},
            {"id": 4, "label": "L"},
            {"id": 5, "label": "XL"},
            {"id": 6, "label": "XXL"},
            {"id": 7, "label": "XXXL"},
            {"id": 8, "label": "XXXXL"},
        ]
    }
}

if(config.layoutMode == 'dark') {
    data = {
        "homeBanner": [
            {
                image: "https://gharxy.digital/stage/native/wp-content/uploads/sites/4/2020/10/save.jpeg",
            },
            {
                image: "https://tripcarte.asia/wp-content/uploads/2020/03/Colmar-Tropicale-And-Genting-Highland-Tour-6-300x300.jpg",
            }
        ],
        "brands": [
            {
                "name": "West Malaysia",
                "image": "https://cdn.sketchbubble.com/pub/media/catalog/product/cache/1/image/720x540/c96a280f94e22e3ee3823dd0a1a87606/m/a/malaysia-map-slide1.png",
                "id": 1
            },
            {
                "name": "East Malaysia",
                "image": "https://www.esri.com/about/newsroom/wp-content/uploads/2018/09/arcgis-online-aids_3-lg.jpg",
                "id": 2
            },
            {
                "name": "Singapore",
                "image": "https://esrisingapore.com.sg/sites/esrisingapore.com.sg/files/2019-04/about-gis-overview-banner-image.png",
                "id": 3
            },
            {
                "name": "Thailand",
                "image": "https://intelvue.com/demo/app-template/dark/category-th-4.png",
                "id": 4
            }
        ],
        "categories": [
            {
                "name": "West Malaysia",
                "image": "http://intelvue.com/demo/app-template/dark/category-th-1.png",
                "banner_image": "http://intelvue.com/demo/app-template/dark/category-1.png",
                "id": 1
            },
            {
                "name": "East Malaysia",
                "image": "http://intelvue.com/demo/app-template/dark/category-th-2.png",
                "banner_image": "http://intelvue.com/demo/app-template/dark/category-2.png",
                "id": 2,
                "title_position": "left"
            },
            {
                "name": "Singapore",
                "image": "http://intelvue.com/demo/app-template/dark/category-th-3.png",
                "banner_image": "http://intelvue.com/demo/app-template/dark/category-3.png",
                "id": 3
            },
            {
                "name": "Thailand",
                "image": "https://downloads.esri.com/blogs/arcgisonline/APHR_ServiceAreas.png",
                "banner_image": "http://intelvue.com/demo/app-template/dark/category-4.png",
                "id": 4,
                "title_position": "left"
            }
        ],
        "items": [
            {
                "name": "MELAKA DUCK TOURS",
                "sku": "SKU001",
                "images": [
                    "https://tripcarte.asia/wp-content/uploads/2019/10/melaka-duck-tours-1-min.jpg",
                    "https://tripcarte.asia/wp-content/uploads/2019/10/melaka-duck-tours-3-min-100x100.jpg"
                ],
                "price": "RM200",
                "id": 1,
                "rating": 3,
                "brand_name": "Things To Do / Melaka",
                "description": "<h3>Full Description</h3><p>Nice Dude</p>",
                "specification": "<p>I am specs</p>"
            },
            {
                "name": "A’FAMOSA SAFARI WONDERLAND",
                "sku": "SKU001",
                "images": [
                    "https://tripcarte.asia/wp-content/uploads/2019/10/AFAMOSA-SAFARI-600x343.jpg",
                    "https://tripcarte.asia/wp-content/uploads/2019/10/Melaka-A-Famosa-Safari-Wonderland-3-100x100.jpg"
                ],
                "price": "RM200",
                "special_price": "RM160",
                "id": 2,
                "rating": 4,
                "brand_name": "My Brand",
                "full_description": "<h3>Full Description</h3>",
                "specification": "<p>I am specs</p>"
            },
            {
                "name": "MELAKA RIVER CRUISE",
                "sku": "SKU001",
                "images": [
                    "https://tripcarte.asia/wp-content/uploads/2019/10/Melaka-River-Cruise-1.jpg",
                    "https://tripcarte.asia/wp-content/uploads/2019/10/Melaka-River-Cruise-4-100x100.jpg"
                ],
                "price": "RM200",
                "special_price": "RM160",
                "id": 3,
                "brand_name": "My Brand",
                "full_description": "<h3>Full Description</h3>",
                "specification": "<p>I am specs</p>"
            },{
                "name": "ANGRY BIRD ACTIVITY PARK",
                "sku": "SKU001",
                "images": [
                    "https://tripcarte.asia/wp-content/uploads/2019/10/angry-bird-johor-1-600x313.jpg",
                    "https://tripcarte.asia/wp-content/uploads/2019/10/ab7-100x100.jpg"
                ],
                "price": "RM200",
                "special_price": "RM160",
                "id": 4,
                "brand_name": "My Brand",
                "full_description": "<h3>Full Description</h3>",
                "specification": "<p>I am specs</p>"
            },
            {
                "name": "T-Shirt 0xx",
                "sku": "SKU001",
                "images": [
                    "http://intelvue.com/demo/app-template/dark/product-5.png",
                    "http://intelvue.com/demo/app-template/dark/product-4.png"
                ],
                "price": "RM200",
                "special_price": "RM160",
                "id": 5,
                "brand_name": "My Brand",
                "full_description": "<h3>Full Description</h3>",
                "specification": "<p>I am specs</p>"
            },{
                "name": "5D ART STUDIO KULAI JOHOR",
                "sku": "SKU001",
                "images": [
                    "hhttps://tripcarte.asia/wp-content/uploads/2019/10/ART-2.jpg",
                    "https://tripcarte.asia/wp-content/uploads/2019/10/ART-3-100x100.jpg"
                ],
                "price": "$200",
                "special_price": "RM160",
                "id": 6,
                "brand_name": "My Brand",
                "full_description": "<h3>Full Description</h3>",
                "specification": "<p>I am specs</p>"
            }
        ],
        "cart": {
            "lines": [
                {
                    "name": "Langkawi:",
                    "sku": "SKU001",
                    "image": "https://tripcarte.asia/wp-content/uploads/2019/10/KilimGeoforest8-2-100x100.jpg",
                    "rate": "RM200",
                    "linetotal": "RM200",
                    "id": 1,
                    "qty": 1
                },
                {
                    "name": "PENANG 3D TRICK ART MUSEUM",
                    "sku": "SKU001",
                    "image": "http://intelvue.com/demo/app-template/dark/product-2.png",
                    "rate": "– RM23",
                    "linetotal": "RM9.20",
                    "id": 1,
                    "qty": 3
                }
            ],
            "summary": {
                "total": "RM1000",
                "subtotal": "RM800",
                "estimatedshipping": "RM100",
                "taxtotal": "RM100"
            }
        },
        "addresses": [
            {
                "name": "Bukit OUG Condo",
                "address": "Bkt Jalil, \nKL, MY",
                "selected": true,
                "id": 1
            },
            {
                "name": "Bukit OUG Condo",
                "address": "Bkt Jalil, \nKL, MY",
                "selected": false,
                "id": 2
            },
            {

                "name": "Bukit OUG Condo",
                "address": "Bkt Jalil, \nKL, MY",
                "selected": false,
                "id": 3
            },
            {
                "name": "Bukit OUG Condo",
                "address": "Bkt Jalil, \nKL, MY",
                "selected": false,
                "id": 4
            }
        ],
        "orders": [
            {
                "id": 1,
                "order_no": "SO-10001",
                "date": "2019/12/12",
                "status": "pending",
                "statusLabel": "Pending",
                "total": "$1000",
                "summary": {
                    "total": "RM1000",
                    "shippingtotal": "RM100",
                    "taxtotal": "RM100",
                    "subtotal": "RM800"
                },
                "lines": [
                    {
                        "id": 1,
                        "name": "THE HABITAT PENANG HILL",
                        "sku": "TESTITEM",
                        "image": "https://tripcarte.asia/wp-content/uploads/2019/10/Habitat-new-1-600x399.jpg",
                        "rate": "RM200",
                        "qty": 2,
                        "total": "RM47"
                    },
                    {
                        "id": 2,
                        "name": "TROPICAL SPICE GARDEN",
                        "sku": "TESTITEM2",
                        "image": "https://tripcarte.asia/wp-content/uploads/2019/10/Tropical-Spice-3-300x300.jpg",
                        "rate": "RM200",
                        "qty": 2,
                        "total": "RM400"
                    }
                ]
            },
            {
                "id": 3,
                "order_no": "SO-10002",
                "date": "2019/12/12",
                "status": "billed",
                "statusLabel": "Billed",
                "total": "RM1000",
                "summary": {
                    "total": "RM1000",
                    "shippingtotal": "RM100",
                    "taxtotal": "RM100",
                    "subtotal": "RM800"
                },
                "lines": [
                    {
                        "id": 1,
                        "name": "THE MARITIME EXPERIENTIAL MUSEUM",
                        "sku": "TESTITEM",
                        "image": "https://tripcarte.asia/wp-content/uploads/2019/10/Milky-6.jpg",
                        "rate": "RM78.20",
                        "qty": 2,
                        "total": "RM41.40"
                    },
                    {
                        "id": 2,
                        "name": "MILKY WAY PLAY SPACE",
                        "sku": "TESTITEM2",
                        "image": "https://tripcarte.asia/wp-content/uploads/2019/10/Milky-5-600x400.jpg",
                        "rate": "RM200",
                        "qty": 2,
                        "total": "RM400"
                    }
                ]
            },
            {
                "id": 2,
                "order_no": "SO-10003",
                "date": "2019/12/12",
                "status": "cancelled",
                "statusLabel": "Cancelled",
                "total": "RM1000",
                "summary": {
                    "total": "RM1000",
                    "shippingtotal": "RM100",
                    "taxtotal": "RM100",
                    "subtotal": "RM800"
                },
                "lines": [
                    {
                        "id": 1,
                        "name": "VR ENGAGE",
                        "sku": "TESTITEM",
                        "image": "https://tripcarte.asia/wp-content/uploads/2019/10/Vr-6-600x400.jpg",
                        "rate": "RM200",
                        "qty": 2,
                        "total": "RM400"
                    },
                    {
                        "id": 2,
                        "name": "SKY SIMULATOR",
                        "sku": "TESTITEM2",
                        "image": "https://tripcarte.asia/wp-content/uploads/2019/10/A94E8390-e1572594543358.jpg",
                        "rate": "RM200",
                        "qty": 2,
                        "total": "RM400"
                    }
                ]
            }
        ],
        "filters": {
            "colors": [
                {"id": 1, "label": "Black"},
                {"id": 2, "label": "White"},
                {"id": 3, "label": "Red"},
                {"id": 4, "label": "Maroon"},
                {"id": 5, "label": "Blue"},
                {"id": 6, "label": "Grey"},
            ],
            "sizes": [
                {"id": 1, "label": "XSm"},
                {"id": 2, "label": "Sm"},
                {"id": 3, "label": "M"},
                {"id": 4, "label": "L"},
                {"id": 5, "label": "XL"},
                {"id": 6, "label": "XXL"},
                {"id": 7, "label": "XXXL"},
                {"id": 8, "label": "XXXXL"},
            ]
        }
    }
}

export default data;
