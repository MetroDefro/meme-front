import React, { useState, useEffect } from 'react';
import styles from '../styles/CardList.module.css';
import { Row, Col } from 'react-bootstrap';

const CardList = () => {

    return (
        <div class="card-group">
            <div id="cards" class="row row-cols-1 row-cols-md-3 g-4">
                카드리스트
            </div>
        </div>
    );
};

export default CardList;
