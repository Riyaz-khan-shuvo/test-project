import React from 'react';
import './DropDownCol.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faSortDown } from '@fortawesome/free-solid-svg-icons';

const DropDownCol = (props) => {
    return (
        <div>
            <ul class="navbar-nav align-self-stretch">
                <li class="has-sub">
                    <a class="nav-link collapsed text-left" href={`#${props.idName}`} role="button" data-toggle="collapse">
                        {props.menuTitle} <FontAwesomeIcon icon={faSortDown} />
                    </a>
                    <div class="collapse menu mega-dropdown" id={`${props.idName}`}>
                        <div class="dropmenu" aria-labelledby="navbarDropdown">
                            <div class="container-fluid ">
                                <div class="row">
                                    <div class="col-lg-12 px-2">
                                        <div class="submenu-box">
                                            <ul class="list-unstyled m-0">

                                                {
                                                    props.items.map((item, index) => <li key={index}> <a href=""> <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label class="form-check-label" for="flexRadioDefault1">
                                                            {item.name}
                                                        </label>
                                                    </div> </a> </li>)
                                                }
                                            </ul>
                                        </div>
                                        <a href="#"><h6 className="text-success"> {props.moreItems} More </h6></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

        </div>
    );
};

export default DropDownCol;