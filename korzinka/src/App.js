import "./App.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

function App() {
  return (
    <div className="App-korzinka">
      <div className="where-korzinka">
        <a href="#">
          Главная
          <span>
            <IoIosArrowForward />
          </span>
        </a>
        <p>Корзина</p>
      </div>
      <div className="My-goods">
        <h2>ВАШ ЗАКАЗ</h2>
      </div>

      <div className="korzinka-big-and-about-div">
        <div className="first-korzinka-div">
          <div className="small-first-korzinka-div">
            <p>Кондитер</p>
            <h3>babecake.tmn</h3>
          </div>
          <div className="delete-first-korzinka-div">
            <RiDeleteBin5Line className="trash-delete-korzinka" />
          </div>
        </div>
        <hr className="korzinka-bottom" />
        <div className="second-korzinka-div">
          <div className="img-name-price-korzinka">
            <div className="korzinka-img">
              <img
                src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/e66c63a20c4a2c336bab23752d311e184be565ae/e66c63a20c4a2c336bab23752d311e184be565ae-wc100.jpeg"
                alt=""
              />
            </div>
            <div className="name-price-korzinka">
              <h3>бенто коты</h3>
              <p>400 • 1 000 ₽</p>
            </div>
          </div>
          <div className="overall-price-plus-minus-korzinka">
            <h3>1 000 ₽</h3>
            <div className="minus-korzinka">
              <FaMinus />
            </div>
            <h2>1</h2>
            <div className="plus-korzinka">
              <FaPlus />
            </div>
            <RiDeleteBin5Line className="trash-delete-korzinka" />
          </div>
          <div className="after-media-six-hundred">
            <div className="media-img-name-price-korzinka">
              <div className="media-img-name-price-korzinka-kotta">
                <div className="korzinka-img">
                  <img
                    src="https://s3.timeweb.com/3c054d59-37319911-7058-4007-b6f4-e93899e36aed/e66c63a20c4a2c336bab23752d311e184be565ae/e66c63a20c4a2c336bab23752d311e184be565ae-wc100.jpeg"
                    alt=""
                  />
                </div>
                <div className="name-price-korzinka">
                  <h3>бенто коты</h3>
                  <p>400 • 1 000 ₽</p>
                </div>
              </div>
              <div className="media-img-name-price-korzinka-trash">
                <RiDeleteBin5Line className="trash-delete-korzinka" />
              </div>
            </div>
            <div className="media-overall-price-plus-minus-korzinka">
              <div className="media-overall-price-plus-minus-korzinka-text">
                <h3>1 000 ₽</h3>
              </div>
              <div className="media-overall-price-plus-minus-korzinka-count">
                <div className="minus-korzinka">
                  <FaMinus />
                </div>
                <h2>1</h2>
                <div className="plus-korzinka">
                  <FaPlus />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="korzinka-top" />
        <div className="price-over-korzinka">
          <h3>ИТОГО: 1 000 ₽</h3>
          <button>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
}

export default App;
