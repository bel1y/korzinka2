import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./oformlenia_zakaz.css";

export default function Oformlenia_zakaz() {
  const Openanotherperson = () => {
    document.querySelector(".gets-person2-zakaz").style = "display:flex";
  };
  const Opendostavkazakaz = () => {
    document.querySelector(".big-dostavka-zakaz").style = "display:block";
    document.querySelector(".inp-checkbox-and-text-zakaz p").style =
      "display:none";
    document.querySelector(".radio-dostavka-zakaz").style =
      "accent-color: #06c160; ";
    document.querySelector(".radio-dostavka-zakaz2").style =
      "accent-color: #fff; ";
  };
  const Openzakaz = () => {
    document.querySelector(".big-dostavka-zakaz").style = "display:none";
    document.querySelector(".inp-checkbox-and-text-zakaz p").style =
      "display:block";
    document.querySelector(".radio-dostavka-zakaz").style =
      "accent-color: #fff; ";
    document.querySelector(".radio-dostavka-zakaz2").style =
      "accent-color: #06c160; ";
  };

  return (
    <div className="App-offormlenia-zakaz">
      <div className="where-Oformlenia-zakaz">
        <a href="#">
          Главная
          <span>
            <IoIosArrowForward />
          </span>
        </a>
        <p>Корзина</p>
      </div>
      <div className="My-order-oformlenia">
        <h2>ОФОРМИТЬ ЗАКАЗ</h2>
      </div>

      <div className="big-oformlinia-zaka">
        <div className="first-oformlenia-zakaz">
          <div className="count-what-do-oformlenia-zakaz">
            <div className="count-offermlenia-zakaz">
              <h3>01</h3>
            </div>
            <div className="text-oformlenia-zakaz">
              <h2>ПОЛУЧАТЕЛЬ</h2>
              <div className="gets-person-zakaz">
                <div className="name-person-zakaz">
                  <p>Sojida</p>
                </div>
                <div className="phone-number-zakaz">
                  <p>+7 (902) 663-33-71</p>
                </div>
              </div>
              <div className="get-another-person-zakaz">
                <input
                  type="checkbox"
                  id="checkbox-zakaz"
                  onClick={Openanotherperson}
                />
                <h4>Другой получатель</h4>
              </div>
              <div className="gets-person2-zakaz">
                <div className="name-person-zakaz">
                  <input type="text" name="" id="" placeholder="Имя" />
                </div>
                <div className="phone-number-zakaz">
                  <input type="text" name="" id="" placeholder="Телефон" />
                </div>
              </div>
            </div>
          </div>
          <hr className="hr-for-dostavka-or-zakaz" />
          <div className="count-what-do-oformlenia-zakaz">
            <div className="count-offermlenia-zakaz">
              <h3>02</h3>
            </div>
            <div className="detals-of-the-zakaz">
              <h2>ДЕТАЛИ ЗАКАЗА</h2>
              <div className="inp-checkbox-and-text-zakaz">
                <div className="radio-inp-text-zakaz">
                  <input
                    type="radio"
                    onClick={Openzakaz}
                    name=""
                    id="radio-zakaz"
                    className="radio-dostavka-zakaz2"
                  />
                  <h3>Самовызов</h3>
                </div>
                <p>
                  Тюменский район, автодорога Тюмень - Боровский - Богандинский,
                  15-й километр
                </p>
              </div>
              <div className="inp-checkbox-and-text-zakaz">
                <div className="radio-inp-text-zakaz">
                  <input
                    type="radio"
                    onClick={Opendostavkazakaz}
                    name=""
                    id="radio-zakaz"
                    className="radio-dostavka-zakaz"
                  />
                  <h3>Доставка</h3>
                </div>
                <div className="big-dostavka-zakaz">
                  <div className="first-info-dostavka-zakaz">
                    <div className="small-div-dostavka">
                      <p>Тюмень</p>
                      <input type="text" placeholder="Улица" name="" id="" />
                    </div>
                    <div className="middle-dostavka-div">
                      <div className="another-info-zakaz">
                        <input type="text" placeholder="Дом" name="" id="" />
                        <input
                          type="text"
                          placeholder="Квартира офис"
                          name=""
                          id=""
                        />
                      </div>
                      <div className="another-info-zakaz">
                        <input
                          type="text"
                          placeholder="Подъезд"
                          name=""
                          id=""
                        />
                        <input type="text" placeholder="Этаж" name="" id="" />
                      </div>
                    </div>
                  </div>
                  <p>
                    Точную стоимость доставки на ваш адрес повар сообщит при
                    подтверждении заказа
                  </p>
                </div>
                <div className="data-zakaz-time">
                  <h3>Желаемая дата и время</h3>
                  <div className="inp-time-data-dostavka">
                    <input type="date" name="" id="" />
                    <select name="" id="">
                      <option value="">21:00 - 21:30</option>
                      <option value="">21:30 - 22:00</option>
                      <option value="">22:00 - 22:30</option>
                      <option value="">22:30 - 23:00</option>
                      <option value="">23:00 - 23:30</option>
                      <option value="">23:30 - 00:00</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="hr-for-dostavka-or-zakaz" />
          <div className="count-what-do-oformlenia-zakaz">
            <div className="count-offermlenia-zakaz">
              <h3>04</h3>
            </div>
            <div className="comment-for-zakaz">
              <h2>КОММЕНТАРИЙ К ЗАКАЗУ</h2>
              <textarea name=" " id="" cols="30" rows="10"></textarea>
            </div>
          </div>
        </div>
        <div className="second-oformlenia-zakaz"></div>
      </div>
    </div>
  );
}
