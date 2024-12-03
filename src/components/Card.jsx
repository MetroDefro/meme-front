import React, { useState, useEffect } from 'react';
import styles from '../styles/Card.module.css';

const Card = () => {

    return (
        <>
                       {/* // 이미지 카드
                temp_html = `
            <div class="col">
                <div class="card" data-id="${cardId}" data-is-image="${sourceType}" style="height: 100%;">
                    <img src="${source}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${content}</p>
                    </div>
                    <div class="card-footer" style="text-align: right";>
                        <small>${year}년도</small>
                    </div>
                    작성일자 식별용: ${whenwrite}
                </div>
            </div>`;
            } else {
                // 영상 카드
                temp_html = `
            <div class="col">
                <div class="card" data-id="${cardId}" data-is-image="${sourceType}" data-source="${source}" data-thumbnail="${thumbnail}" style="height: 100%;">
                    <img src="${thumbnail}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${content}</p>
                    </div>
                    <div class="card-footer" style="text-align: right";>
                        <small>${year}년도</small>
                    </div>
                    작성일자 식별용: ${whenwrite}
                </div>
            </div>`; */}
        </>
    );
};

export default Card;
