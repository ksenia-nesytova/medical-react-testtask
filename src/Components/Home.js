import React from "react"

function Home() {
    return (
      <main>
        <h1>Место для получения медицинской помощи</h1>
        <a href="#" className="btn btn-default">Войти</a>
        <a href="#" className="btn btn-outline">Контакты</a>
        <div>
          <div className="card">
            <div className="circle"></div>
            <h3>Онлайн-прием</h3>
            <p>Рыба текст</p>
          </div>
          <div className="card">
            <div className="circle"></div>
            <h3>Экстренный случай</h3>
            <p>Рыба текст</p>
          </div>
          <div className="card">
            <div className="circle"></div>
            <h3>Лечение рака</h3>
            <p>Рыба текст</p>
          </div>
        </div>
      </main>
    )
}

export default Home
