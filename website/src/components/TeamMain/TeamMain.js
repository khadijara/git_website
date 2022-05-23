import React, { useState } from 'react';
import Modal from './Modal';
import TeamImage from './TeamImage';
import './Team.css';

function TeamMain(props) {
    const { text, title, image } = props;
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div>
            {
                modalOpen &&
                <Modal onCancel={closeModal}>
                    <div className="imageT">
                    <TeamImage  url={image} />
                    </div>
                    <div className='titleT'><h1>{title}</h1></div>
                    <p className='titlep'>{text}</p>

                </Modal>
            }
            <li onClick={openModal} className="imageList">
                <div className="image-container"><TeamImage url={image} /></div>
            </li>


        </div>

    );
}

export default TeamMain;