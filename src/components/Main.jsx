import React, { useState, useEffect } from 'react';
import styles from '../styles/Main.module.css';
import { Form, Button } from 'react-bootstrap';
import PostModal from './PostModal';
import CardList from './CardList';

const Main = () => {
    const [isPostModalOpen, setIsPostModalOpen] = useState(false);

    const handlePost = () => {
        setIsPostModalOpen(true);
    };

    return (
        <>
            <div className={styles.sub_body}>
                <div className={styles.select_container}>
                    <Form.Select className={styles.select_box}>
                        <option>전체보기</option>
                        <option value="jjal">짤</option>
                        <option value="vdo">영상</option>
                    </Form.Select>
                </div>

                <div className={styles.search_container}>
                    <Form.Control type="text" placeholder="Search" id="queryText" />
                    <Button variant="outline-secondary" id="searchBtn" type="submit"> Search </Button>
                </div>
            </div>

            <div className={styles.sub_body_btn}>
                <Button className={styles.write_btn} variant="secondary" onClick={handlePost}> 글 쓰기 </Button>
            </div>
            <CardList
                
            />
            <PostModal
                isOpen={isPostModalOpen}
                onClose={() => setIsPostModalOpen(false)}
            />
        </>
    );
};

export default Main;
