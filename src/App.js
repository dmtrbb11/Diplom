import "./Main_style.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <div className="header">
            <ul className="header_list">
              <li className="list_li">
                <a className="list_a" href="">
                  Передать показания
                </a>
              </li>
              <li className="list_li">
                <a className="list_a" href="">
                  Тарифы и нормативы потребления
                </a>
              </li>
              <li className="list_li">
                <a className="list_a" href="">
                  Личный кабинет
                </a>
              </li>
            </ul>
          </div>
        </header>
        <section className="get_utilities">
          <div>
            <p className="get_utilities_Title">Внесите показания</p>
            <div className="div_blocks">
              <div className="utilities_block">
                <h1 className="block_title">Показания электроэнергии</h1>
                <p className="block_p">Номер лицевого счета</p>
                <input className="block_input" type="text" />
                <p className="block_p">Заводской № счетчика</p>
                <input className="block_input" type="text" />
                <p className="block_p">Показания счетчика, кВт · ч</p>
                <input className="block_input" type="text" />
                <button className="sumbit_btn">Отправить показания</button>
              </div>
              <div className="utilities_block">
                <h1 className="block_title">Показания тепла</h1>
                <p className="block_p">Номер лицевого счета</p>
                <input className="block_input" type="text" />
                <p className="block_p">Заводской № счетчика</p>
                <input className="block_input" type="text" />
                <p className="block_p">Показания счетчика, кВт · ч</p>
                <input className="block_input" type="text" />
                <button className="sumbit_btn">Отправить показания</button>
              </div>
              <div className="utilities_block">
                <h1 className="block_title">Показания ГВС</h1>
                <p className="block_p">Номер лицевого счета</p>
                <input className="block_input" type="text" />
                <p className="block_p">Заводской № счетчика</p>
                <input className="block_input" type="text" />
                <p className="block_p">Показания счетчика, кВт · ч</p>
                <input className="block_input" type="text" />
                <button className="sumbit_btn">Отправить показания</button>
              </div>
              <div className="utilities_block">
                <h1 className="block_title">Показания ХВС</h1>
                <p className="block_p">Номер лицевого счета</p>
                <input className="block_input" type="text" />
                <p className="block_p">Заводской № счетчика</p>
                <input className="block_input" type="text" />
                <p className="block_p">Показания счетчика, кВт · ч</p>
                <input className="block_input" type="text" />
                <button className="sumbit_btn">Отправить показания</button>
              </div>
              <div className="utilities_block">
                <h1 className="block_title">Показания газа</h1>
                <p className="block_p">Номер лицевого счета</p>
                <input className="block_input" type="text" />
                <p className="block_p">Заводской № счетчика</p>
                <input className="block_input" type="text" />
                <p className="block_p">Показания счетчика, кВт · ч</p>
                <input className="block_input" type="text" />
                <button className="sumbit_btn">Отправить показания</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
