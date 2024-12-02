import React, { useState, useEffect } from 'react';
import styles from '../styles/PostModal.module.css';
import { Form, Button, Modal } from 'react-bootstrap'

// 수정 전에 비밀번호 확인 필요
const ModifyModal = ({ isOpen, onClose, form }) => {
    const [formData, setFormData] = useState({
        nickname: form.nickname,
        password: form.password,
        source: form.source,
        title: form.title,
        year: form.year,
        content: form.content
    });

    const [isImage, setIsImage] = useState(true);

    const handleImgbtn = () => {
        setIsImage(true);
    };

    const handleVdobtn = () => {
        setIsImage(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCancelbtn = (e) => {
        onClose();
    }

    const handleWritebtn = () => {
        // Put
    }

    const isFormValid = Object.values(formData).every((value) => value.trim() !== "");

    return (
        <Modal show={isOpen} onHide={onClose}>
            <Modal.Body>
                <Form.Floating>
                    <Button variant="outline-secondary" onClick={handleImgbtn} disabled={isImage}>이미지</Button>
                    <Button variant="outline-secondary" onClick={handleVdobtn} disabled={!isImage}>동영상</Button>
                    <div class="form-floating mb-3">
                        <Form.Control class="form-control" placeholder="소스" name="source" value={formData.source} onChange={handleInputChange}/>
                        <label for="floatingInput">소스</label>
                    </div>
                    <div class="form-floating mb-3">
                        <Form.Control class="form-control" placeholder="밈 이름" name="title" value={formData.title} onChange={handleInputChange} />
                        <label for="floatingInput">밈 이름</label>
                    </div>
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupSelect01">유행 년도</label>
                        <select class="form-select" name="year" value={formData.year} onChange={handleInputChange}>
                            <option selected>년도 선택</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                        </select>
                    </div>
                    <p>내용</p>
                    <div class="form-floating">
                        <textarea class="form-control" maxlength='500' placeholder="내용" name="content" value={formData.content} onChange={handleInputChange}></textarea>
                        <label for="floatingTextarea2">(500자 이하)</label>
                    </div>
                </Form.Floating>
            </Modal.Body>
            <Modal.Footer>
                <div className={styles.footer_btns}>
                    <Button type="button" variant="primary" onClick={handleWritebtn} onChange={handleInputChange} disabled={!isFormValid}>수정하기</Button>
                    <Button type="button" variant="secondary" onClick={handleCancelbtn}>취소</Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
};

export default ModifyModal;
