import React from 'react';
import product1 from '../../../Image/Product/product-1.png'
import product2 from '../../../Image/Product/product-2.png'
import product3 from '../../../Image/Product/product-3.png'
import product4 from '../../../Image/Product/product-4.png'
import ProductCol from '../ProductCol/ProductCol';
import CancelIcon from '@material-ui/icons/Cancel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Products.css'
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import DropDownCol from '../DropDownCol/DropDownCol';

const Products = () => {
    const productData = [
        { img: product1, pName: "Multicolor Cotton long", forWhom: "sleeve shirt for men", price: "7,850", offerPrice: "7000" },
        { img: product2, pName: "GAP Stylish long sleeve shirt", forWhom: ". ", price: "7,550", offerPrice: "5,555" },
        { img: product3, pName: "Firstly Comfortable Shoes", forWhom: "for Men", price: "7,850", offerPrice: "2,850" },
        { img: product4, pName: "Microsoft Game controller", forWhom: "for Xbox", price: "7,850", offerPrice: "22,850" },
        { img: product1, pName: "Multicolor Cotton long", forWhom: "sleeve shirt for men", price: "7,850", offerPrice: "7000" },
        { img: product2, pName: "GAP Stylish long sleeve shirt", forWhom: ". ", price: "7,550", offerPrice: "5,555" },
        { img: product3, pName: "Firstly Comfortable Shoes", forWhom: "for Men", price: "7,850", offerPrice: "2,850" },
        { img: product4, pName: "Microsoft Game controller", forWhom: "for Xbox", price: "7,850", offerPrice: "22,850" },
        { img: product1, pName: "Multicolor Cotton long", forWhom: "sleeve shirt for men", price: "7,850", offerPrice: "7000" },
        { img: product2, pName: "GAP Stylish long sleeve shirt", forWhom: ". ", price: "7,550", offerPrice: "5,555" },
        { img: product3, pName: "Firstly Comfortable Shoes", forWhom: "for Men", price: "7,850", offerPrice: "2,850" },
        { img: product4, pName: "Microsoft Game controller", forWhom: "for Xbox", price: "7,850", offerPrice: "22,850" },
        { img: product1, pName: "Multicolor Cotton long", forWhom: "sleeve shirt for men", price: "7,850", offerPrice: "7000" },
        { img: product2, pName: "GAP Stylish long sleeve shirt", forWhom: ". ", price: "7,550", offerPrice: "5,555" },
        { img: product3, pName: "Firstly Comfortable Shoes", forWhom: "for Men", price: "7,850", offerPrice: "2,850" },
        { img: product4, pName: "Microsoft Game controller", forWhom: "for Xbox", price: "7,850", offerPrice: "22,850" },
        { img: product1, pName: "Multicolor Cotton long", forWhom: "sleeve shirt for men", price: "7,850", offerPrice: "7000" },
        { img: product2, pName: "GAP Stylish long sleeve shirt", forWhom: ". ", price: "7,550", offerPrice: "5,555" },
        { img: product3, pName: "Firstly Comfortable Shoes", forWhom: "for Men", price: "7,850", offerPrice: "2,850" },
        { img: product4, pName: "Microsoft Game controller", forWhom: "for Xbox", price: "7,850", offerPrice: "22,850" },
    ];

    const brandItems = [
        { name: "Aeropostale" },
        { name: "Antony Morato" },
        { name: "Arrow" },
        { name: "Arrow Blue Jeans" },
        { name: "Arrow Sport" },
        { name: "Mufti" },
        { name: "Raymond" },
        { name: "United Colors of Benetton" },
    ];
    const country = [
        { name: "USA" },
        { name: "UAE" },
        { name: "UE" },
        { name: "Germany" },
        { name: "Italy" },
        { name: "Bangladesh" },
    ];
    const size = [
        { name: "XS" },
        { name: "S" },
        { name: "M" },
        { name: "XL" },
        { name: "XXL" },
    ];
    const discount = [
        { name: "10 - 30%" },
        { name: "30 - 50%" },
        { name: "50 - 70%" },
    ];

    const category = [
        {name:"shirt"},
        {name:"three-pice"},
    ];

    const rating = [
        
    ];
    const fabric = [
        {name:"Cotton Blend"},
        {name:"Cotton Linen Blend"},
        {name:"Cotton Silk"},
        {name:"Linen Blend"},
        {name:"Nylon Blend"},
        {name:"Poly Silk"},
        {name:"Polycotton"},
        {name:"Pure Cotton"},
        {name:"Rayon"},
    ];


    const pattern = [
        {name:"Checkered"},
        {name:"Chevron/Zig Zag"},
        {name:"Color Block"},
        {name:"Floral Print"},
        {name:"Houndstooth"},
        {name:"Polka Print"},
        {name:"Printed"},
    ];

    const service = [
        {name:"Cash On Delivery"},
        {name:"Free Shipping"},
    ];
    const clothingStyle = [
        {name:"style-1"},
        {name:"style-2"},
        {name:"style-3"},
    ];

    const mensTrend = [
        {name:"mens trend - 1"},
        {name:"mens trend - 2"},
        {name:"mens trend - 3"},
    ];

    const fillType = [
        {name:"fill type-1"},
        {name:"fill type-2"},
        {name:"fill type-3"},
    ];


    return (
        <div className="mt-5">
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="filter-area">
                                <div>
                                    <div>
                                        <h6>Filters</h6>
                                        <p className="btn btn-sm btn-outline-secondary rounded-pill">Out Of Stock <CancelIcon /> </p> <br />
                                        <p className="btn btn-sm btn-outline-secondary rounded-pill">Size: XL <CancelIcon /> </p> <br />
                                        <p className="btn btn-sm btn-outline-success rounded-pill">Clear All<CancelIcon /> </p>
                                        <div className="dash"></div>

                                        <DropDownCol
                                        key={0}
                                        menuTitle={"Category"}
                                        items={category}
                                        moreItems={'236'} idName="collapseExample2"
                                    />
                                        <div>
                                            <p>Men's Cloth</p>

                                            <h6 className="ml-4">Casual Wear</h6>
                                            <p className="ml-5">Shirts</p>
                                        </div>
                                    </div>
                                    <div className="dash"></div>
                                    <DropDownCol
                                        key={1}
                                        menuTitle={"Brands"}
                                        items={brandItems}
                                        moreItems={'236'} idName="collapseExample1"
                                    />

                                    <div className="dash"></div>

                                    <DropDownCol
                                        key={2}
                                        menuTitle={"Country"}
                                        items={country}
                                        moreItems={'107'} idName="collapseExample3"
                                    />

                                    <div className="dash"></div>

                                    <DropDownCol
                                        key={3}
                                        menuTitle={"Size"}
                                        items={size}
                                        moreItems={''}
                                        idName="collapseExample4"
                                    />

                                    <div className="dash"></div>

                                    <DropDownCol
                                        key={4}
                                        menuTitle={"Discount"}
                                        items={discount}
                                        moreItems={''}
                                        idName="collapseExample5"
                                    />

                                    <div className="dash"></div>
                                    <DropDownCol
                                        key={5}
                                        menuTitle={"Fabric"}
                                        items={discount}
                                        moreItems={'5'}
                                        idName="collapseExample6"
                                    />

                                    <div className="dash"></div>
                                    <DropDownCol
                                        key={6}
                                        menuTitle={"Pattern"}
                                        items={pattern}
                                        moreItems={'65'}
                                        idName="collapseExample7"
                                    />

                                    <div className="dash"></div>

                                    <DropDownCol
                                        key={8}
                                        menuTitle={"Service"}
                                        items={service}
                                        moreItems={'5'}
                                        idName="collapseExample8"
                                    />

                                    <div className="dash"></div>

                                    <DropDownCol
                                        key={9}
                                        menuTitle={"Clothing Style"}
                                        items={clothingStyle}
                                        moreItems={'25'}
                                        idName="collapseExample9"
                                    />

                                    <div className="dash"></div>

                                    <DropDownCol
                                        key={10}
                                        menuTitle={"Men's Trend"}
                                        items={mensTrend}
                                        moreItems={'35'}
                                        idName="collapseExample10"
                                    />

                                    <div className="dash"></div>

                                    <DropDownCol
                                        key={15}
                                        menuTitle={"Fill Type"}
                                        items={fillType}
                                        moreItems={'15'}
                                        idName="collapseExample11"
                                    />                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                {
                                    productData.map(product => <ProductCol product={product} />)
                                }
                            </div>
                            <div className="mb-5">
                                <div className="text-center">
                                    <button className="btn rounded-pill mr-2 btn-success">1</button>
                                    <button className="btn rounded-pill mr-2 btn-outline-success">2</button>
                                    <button className="btn rounded-pill mr-2 btn-outline-success">3</button>
                                    <button className="btn rounded-pill mr-2 btn-outline-success">4</button>
                                    <button className="btn rounded-pill mr-2 btn-outline-success">5</button>
                                    <button className="btn rounded-pill mr-2 btn-outline-success">6</button>
                                    <button className="btn rounded-pill mr-2 btn-outline-success">7</button>
                                    <button className="btn rounded-pill mr-2 btn-outline-success">8</button>
                                    <button className="btn rounded-pill mr-2 btn-outline-success">9</button>
                                    <button className="btn rounded-pill mr-2 btn-outline-success">10</button>
                                    <button className="btn rounded-pill mr-2 btn-outline-success">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;