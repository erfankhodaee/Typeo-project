import { useState } from "react";

const Modal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    if (!modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        +
      </button>

      {/* Always in the DOM, but visibility controlled by CSS */}
      <div className={`modal ${modal ? "show" : ""}`}>
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content">
          <h2>ساخت تمرین</h2>
          <textarea name="" id=""></textarea>
          <div className="char-limit">0/1000</div>
          <button className="add-practice" role="button">
            شروع تمرین
          </button>
          <button className="pure-button" onClick={toggleModal}>
            بستن
          </button>
        </div>
      </div>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora atque
        perspiciatis adipisci sequi deleniti quibusdam! Provident, obcaecati
        minima voluptate voluptatibus hic excepturi ad, consectetur earum harum
        dolorem inventore itaque. Repudiandae culpa quo doloremque ad veniam
        unde debitis distinctio laborum accusamus quidem aliquam recusandae
        ratione sit at, provident ut, odio magni placeat facere nam eveniet,
        amet incidunt in veritatis. Quia accusamus quo qui, doloribus
        consequatur facere odit iste nesciunt tempora iure hic laboriosam in?
        Iste repudiandae sunt illum nulla nesciunt exercitationem debitis,
        aperiam ab natus, enim voluptate ipsa voluptates, doloremque optio vero
        laudantium commodi incidunt temporibus? Fugit iusto voluptates
        exercitationem minus molestias cumque inventore dolorum iste vel, rem
        perferendis ducimus quod quos neque officiis incidunt ab dolorem impedit
        quia temporibus veritatis veniam beatae. Temporibus odit laboriosam
        aperiam ullam explicabo sit culpa, quibusdam expedita eligendi minima,
        commodi sint maxime quisquam delectus voluptate, beatae repellendus
        earum. Beatae, odit id nemo aliquam, itaque sunt iure saepe minima
        nesciunt esse suscipit voluptas, numquam enim libero? Ratione dolorem
        tempore odit! Maxime fugiat at quis repellat doloremque a architecto
        quod distinctio culpa, eum laudantium voluptatem dicta rerum beatae
        molestias commodi optio. Facere, debitis quod. Odio rem dolorem
        quibusdam deleniti? Dolor, autem laboriosam necessitatibus cum unde
        nesciunt saepe?
      </h1>
    </>
  );
};

export default Modal;
